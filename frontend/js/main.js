// This file is intentionally left blank.
// ...existing code...

// Mostrar/Ocultar barra lateral
document.getElementById('toggle-sidebar').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
});

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

document.addEventListener('DOMContentLoaded', cargarMascotas);

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