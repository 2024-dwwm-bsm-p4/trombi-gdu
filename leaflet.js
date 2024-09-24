var map = L.map("map").setView([50.8, 1.6], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

fetch("infos.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((person) => {
      var marker = L.marker([person.latitude, person.longitude]).addTo(map);

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

      marker.bindPopup(popupContent);
    });
  })
  .catch((error) =>
    console.error("Erreur lors du chargement des données JSON:", error)
  );
