// Crear menú lateral dinámicamente
function crearMenuLateral() {
    const sidebarMenu = document.getElementById('sidebar-menu');
    if (!sidebarMenu) return;
    sidebarMenu.innerHTML = `
        <li id="pets-menu-li" style="position:relative;">
            <span style="font-weight:bold; cursor:pointer; padding-left:10px;">Pets</span>
            <ul id="pets-submenu" style="margin-left: 10px; display:none; background:#333; padding:10px 0; border-radius:6px; min-width:120px; z-index:10; position:static;">
                <li><a href="#crear-pet" id="menu-crear-pet" style="padding-left:10px;">Crear</a></li>
                <li><a href="#editar-pet" id="menu-editar-pet" style="padding-left:10px;">Editar</a></li>
                <li><a href="#eliminar-pet" id="menu-eliminar-pet" style="padding-left:10px;">Eliminar</a></li>
                <li><a href="#listar-pet" id="menu-listar-pet" style="padding-left:10px;">Listar</a></li>
            </ul>
        </li>
    `;
    // Mostrar/ocultar submenú al pasar el mouse
    const petsMenuLi = document.getElementById('pets-menu-li');
    const petsSubmenu = document.getElementById('pets-submenu');
    if (petsMenuLi && petsSubmenu) {
        petsMenuLi.addEventListener('mouseenter', () => {
            petsSubmenu.style.display = 'block';
        });
        petsMenuLi.addEventListener('mouseleave', () => {
            petsSubmenu.style.display = 'none';
        });
    }
}

function mostrarSeccionCRUD(seccion) {
    const secciones = ['crud-crear', 'crud-editar', 'crud-eliminar', 'crud-listar'];
    secciones.forEach(id => {
        document.getElementById(id).style.display = (id === seccion) ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    crearMenuLateral();
    // Mostrar/Ocultar barra lateral
    document.getElementById('toggle-sidebar').addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('active');
    });

    // Mostrar la sección correspondiente al hacer clic en el menú lateral
    document.getElementById('sidebar-menu').addEventListener('click', function(e) {
        if (e.target && e.target.matches('a')) {
            if (e.target.id === 'menu-crear-pet') mostrarSeccionCRUD('crud-crear');
            if (e.target.id === 'menu-editar-pet') mostrarSeccionCRUD('crud-editar');
            if (e.target.id === 'menu-eliminar-pet') mostrarSeccionCRUD('crud-eliminar');
            if (e.target.id === 'menu-listar-pet') mostrarSeccionCRUD('crud-listar');
        }
    });

    // Mostrar la lista por defecto al cargar
    mostrarSeccionCRUD('crud-listar');

    // Cambia la URL al nuevo puerto
    async function cargarMascotas() {
        try {
            const response = await fetch('http://localhost:5001/api/pets');
            if (!response.ok) throw new Error('Error al consultar mascotas');
            const mascotas = await response.json();
            const lista = document.getElementById('pet-list');
            lista.innerHTML = '';
            mascotas.forEach(mascota => {
                const div = document.createElement('div');
                div.className = 'pet-card';
                div.innerHTML = `
                    <h2>${mascota.name}</h2>
                    <p><strong>Especie:</strong> ${mascota.species}</p>
                    <p><strong>Raza:</strong> ${mascota.breed}</p>
                    <p><strong>Edad:</strong> ${mascota.age}</p>
                    <p><strong>Descripción:</strong> ${mascota.description}</p>
                `;
                lista.appendChild(div);
            });
        } catch (error) {
            document.getElementById('pet-list').innerHTML = '<p>Error al cargar mascotas</p>';
        }
    }

    cargarMascotas();

    // Manejar el formulario para agregar mascota
    const petForm = document.getElementById('pet-form');
    if (petForm) {
        petForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const name = document.getElementById('pet-name').value;
            const species = document.getElementById('pet-type').value;
            const breed = document.getElementById('pet-breed').value;
            const age = document.getElementById('pet-age').value;
            const description = document.getElementById('pet-description').value;
            const owner = document.getElementById('pet-owner').value; // Situación de
            const createdAt = new Date().toISOString();
            // Puedes agregar más campos si los tienes en el formulario
            const nuevaMascota = {
                name,
                species,
                breed: 'Desconocida',
                age: 0,
                description: 'Sin descripción',
                owner: '000000000000000000000000' // ID dummy, ajusta si tienes usuarios
            };
            try {
                const response = await fetch('http://localhost:5001/api/pets', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(nuevaMascota)
                });
                if (response.ok) {
                    petForm.reset();
                    cargarMascotas();
                } else {
                    alert('Error al agregar mascota');
                }
            } catch (error) {
                alert('Error al conectar con el servidor');
            }
        });
    }

    // Consultar mascotas al hacer clic en el botón de consulta
    const btnConsultar = document.getElementById('consultar-mascotas');
    if (btnConsultar) {
        btnConsultar.addEventListener('click', async function() {
            const consultaLista = document.getElementById('consulta-lista');
            consultaLista.innerHTML = 'Cargando...';
            try {
                const response = await fetch('http://localhost:5001/api/pets');
                if (!response.ok) throw new Error('Error al consultar mascotas');
                const mascotas = await response.json();
                if (mascotas.length === 0) {
                    consultaLista.innerHTML = '<p>No hay mascotas registradas.</p>';
                    return;
                }
                let html = '<ul style="padding-left: 18px;">';
                mascotas.forEach(mascota => {
                    html += `<li><b>${mascota.name}</b> (${mascota.species}) - ${mascota.breed}, ${mascota.age} años</li>`;
                });
                html += '</ul>';
                consultaLista.innerHTML = html;
            } catch (error) {
                consultaLista.innerHTML = '<p>Error al consultar mascotas</p>';
            }
        });
    }
});
// Carrusel de imágenes automático
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('carousel');
  const track = document.getElementById('carouselTrack');
  let position = 0;
  const velocity = 0.5; // velocidad lenta y constante

  function animate() {
    position += velocity;
    const maxScroll = track.scrollWidth - carousel.offsetWidth;
    if (position > 0) position = -maxScroll; // reinicia al final para efecto bucle
    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  if (carousel && track) {
    animate();
  }
});
// Menú desplegable de la huella
document.addEventListener('DOMContentLoaded', function () {
  const huellaBtn = document.getElementById('huellaBtn');
  const huellaMenu = document.getElementById('huellaMenu');

  if (huellaBtn && huellaMenu) {
    huellaBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      huellaMenu.style.display = huellaMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function (e) {
      if (!huellaMenu.contains(e.target) && e.target !== huellaBtn) {
        huellaMenu.style.display = 'none';
      }
    });
  }
});