var map = L.map("map").setView([50.8, 1.6], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

const markers = [];

fetch("infos.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((person, index) => {
      const customIcon = L.icon({
        iconUrl: person.photo,
        iconSize: [50, 50], main.js
        iconAnchor: [25, 50],
        className: 'rounded-icon'
      });

      var stackIcons = person.stackIcons
        .map(
          (iconData) => `
          <div class="stack-icon">
            <img src="${iconData.icon}" alt="${iconData.name}" title="${iconData.name}">
          </div>
        `
        )
        .join("");

      var popupContent = `
        <div style="background-image: url('${person.background}'); padding: 10px; background-size: cover;">
          <img src="${person.photo}" alt="${person.name}" class="profile-photo">  
          <h2>${person.prenom} ${person.name}</h2>
          <div class="info"><strong>Ville:</strong> ${person.ville}</div>
          <div class="info"><strong>Stack:</strong></div>
          <div class="stack-icons">${stackIcons}</div>
          <div class="info"><strong>Hobbies:</strong> ${person.hobbies}</div>
          <div class="info"><strong>Liens:</strong> <a href="${person.socials.linkedin}" target="_blank">LinkedIn</a></div>
        </div>
      `;

      var marker = L.marker([person.latitude, person.longitude], { icon: customIcon })
        .bindPopup(popupContent);

      marker.addTo(map);
      markers.push(marker);

      displayContactInList(person, index); // Appelle la fonction pour afficher les contacts
    });
  })
  .catch((error) => console.error("Erreur lors du chargement des données JSON:", error));

function displayContactInList(person, index) {
  const contactsContainer = document.querySelector(".inserCard");
  const cardHTML = `
    <a href="#" onclick="flyToMarker(${index}); return false;">
      <div class="contact-card">
        <div class="header">
          <img src="${person.photo}" class="photoProfil" alt="photo apprenant">
          <div class="nameVille">
            <h3>${person.prenom} ${person.name}</h3>
            <p>${person.ville}</p>
          </div>
        </div>
        <p><a href="${person.socials.linkedin}" target="_blank">LinkedIn</a></p>
        <p>Hobbies: ${person.hobbies}</p>
      </div>
    </a>
  `;
  contactsContainer.insertAdjacentHTML("beforeend", cardHTML);
}

function flyToMarker(index) {
  const marker = markers[index];
  if (marker) {
    map.flyTo(marker.getLatLng(), 13);
    marker.openPopup();
  }
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();
  fetch("infos.json")
    .then((response) => response.json())
    .then((data) => {
      const filteredContacts = data.filter((contact) => {
        return `${contact.prenom} ${contact.name}`.toLowerCase().includes(searchValue);
      });
      document.querySelector(".inserCard").innerHTML = "";
      filteredContacts.forEach(displayContactInList);
    });
});
