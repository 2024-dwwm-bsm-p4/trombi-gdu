// Initialisation de la carte
var map = L.map('map').setView([50.80, 1.6], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Charger le fichier JSON
fetch('infos.json') 
  .then(response => response.json())
  .then(data => {
    data.forEach(person => {
      var marker = L.marker([person.latitude, person.longitude]).addTo(map);
      
      var popupContent = `
        <div style="background-image: url('${person.background}'); padding: 10px; background-size: cover;">
          <h2>${person.prenom} ${person.name}</h2>
          <img src="${person.photo}" alt="${person.name}" width="100px" height="100px">
          <p><strong>Ville:</strong> ${person.ville}</p>
          <p><strong>Stack:</strong> ${person.stack.join(', ')}</p>
          <p><strong>Hobbies:</strong> ${person.hobbies}</p>
          <p><strong>Liens:</strong></p>
          <ul>
            <li><a href="${person.socials.linkedin}" target="_blank">LinkedIn</a></li>
          </ul>
        </div>
      `;

      marker.bindPopup(popupContent);
    });
  })
  .catch(error => console.error('Erreur lors du chargement des données JSON:', error));
