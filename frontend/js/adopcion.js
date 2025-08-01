const API_URL = 'http://localhost:5001/api/pets/';

const imagenesMascotas = {
  "Sofia": "img/pets/01.jpg",
  "mario": "img/pets/02.jpg",
};

async function cargarMascotas() {
  try {
    const respuesta = await fetch(API_URL);
    const mascotas = await respuesta.json();

    const container = document.getElementById('mascotasCard');

    container.innerHTML = mascotas.map(m => `
      <div class="card-mascota">
        <img src="${imagenesMascotas[m.name] || 'img/pets/default.jpg'}" alt="${m.name}">
        <h3>${m.name}</h3>
        <p><strong>Especie:</strong> ${m.species}</p>
        <p><strong>Raza:</strong> ${m.breed}</p>
        <p><strong>Edad:</strong> ${m.age} años</p>
        <p><strong>Esterilizado:</strong> ${m.description?.esterilizado || 'No especificado'}</p>
        <p><strong>Vacunas:</strong></p>
        <ul>
          <li>Rabia: ${m.description?.vacunas?.rabia || 'N/A'}</li>
          <li>Moquillo: ${m.description?.vacunas?.moquillo || 'N/A'}</li>
          <li>Parvovirosis: ${m.description?.vacunas?.parbovirosis || 'N/A'}</li>
        </ul>
        <p><strong>Estado:</strong> ${m.description?.categoria || 'No especificado'}</p>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error al cargar mascotas:', error);
  }
}

document.addEventListener('DOMContentLoaded', cargarMascotas);