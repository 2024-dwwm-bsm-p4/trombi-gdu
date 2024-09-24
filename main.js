// Initialiser la carte sur une vue de la France

const contacts = [
  {
    "name": "Dupont",
    "prenom": "Grégoire",
    "latitude": 50.65414,
    "longitude": 1.63452,
    "ville": "Condette",
    "stackIcons": [
      { "name": "HTML", "icon": "icons/html5.svg" },
      { "name": "CSS", "icon": "icons/css3.svg" },
      { "name": "JS", "icon": "icons/javascript.svg" },
      { "name": "C#", "icon": "icons/iconc.svg" }
    ],
    "socials": {
      "linkedin": "https://www.linkedin.com/in/gr%C3%A9goire-dupont-801355328/"
    },
    "hobbies": "Informatique, jeux vidéo, univers pop culture, arts créatifs",
    "background": "images/modele-culture-zine-realiste_23-2149148625.avif",
    "photo": "images/gregoire.webp"
  },
  {
    "name": "Legrand",
    "prenom": "Aledorian",
    "latitude": 50.72816663437951,
    "longitude": 1.6085496091491847,
    "ville": "Boulogne sur mer",
    "stackIcons": [
      { "name": "HTML", "icon": "icons/html5.svg" },
      { "name": "CSS", "icon": "icons/css3.svg" },
      { "name": "Javascript", "icon": "icons/javascript.svg" },
      { "name": "PHP", "icon": "icons/php.svg" }
    ],
    "socials": {
      "linkedin": "https://www.linkedin.com/in/aledorian-legrand/"
    },
    "hobbies": "Jeux vidéos, art",
    "background": "images/flat-abstract-background_23-2149123691.avif",
    "photo": "images/aledorian.webp"
  },
  {
    "name": "Lamour",
    "prenom": "Marine",
    "latitude": 50.72615395483013,
    "longitude": 1.605238809099898,
    "ville": "Boulogne Sur Mer",
    "stackIcons": [
      { "name": "HTML", "icon": "icons/html5.svg" },
      { "name": "CSS", "icon": "icons/css3.svg" }
    ],
    "socials": {
      "linkedin": "https://www.linkedin.com/in/marine-lamour-8a1747278/"
    },
    "hobbies": "Randonnée, Lecture",
    "background": "images/cozy-reading-pattern_123891-43999.avif",
    "photo": "images/marine.webp"
  },
  {
    "name": "Lesaffre",
    "prenom": "Marilyne",
    "latitude": 50.7,
    "longitude": 1.6,
    "ville": "Le Portel",
    "stackIcons": [
      { "name": "HTML", "icon": "icons/html5.svg" },
      { "name": "CSS", "icon": "icons/css3.svg" }
    ],
    "socials": {
      "linkedin": "https://www.linkedin.com/in/marilyne-lesaffre/"
    },
    "hobbies": "Dessin, jeux vidéo",
    "background": "images/hand-drawn-art-supplies-background_52683-123028.avif",
    "photo": "images/maryline.webp"
  },
  {
    "name": "Eeckman",
    "prenom": "Perrine",
    "latitude": 50.72548791837526,
    "longitude": 1.6122502046759923,
    "ville": "Boulogne sur mer",
    "stackIcons": [
      { "name": "HTML", "icon": "icons/html5.svg" },
      { "name": "CSS", "icon": "icons/css3.svg" }
    ],
    "socials": {
      "linkedin": "https://www.linkedin.com/in/perrine-eeckman-193969222/"
    },
    "hobbies": "Cause animale, environnement, chorale",
    "background": "images/cute-animal-pattern-background-wallpaper-paw-print-vector-illustration_53876-146422.avif",
    "photo": "images/perrine.webp"
  },
  {
    "name": "Bourgeois",
    "prenom": "Philippe",
    "latitude": 50.71789827170887,
    "longitude": 1.605626853277117,
    "ville": "Boulogne sur mer",
    "stackIcons": [
      { "name": "HTML", "icon": "icons/html5.svg" },
      { "name": "CSS", "icon": "icons/css3.svg" },
      { "name": "MySQL", "icon": "icons/mysql-logo.svg" },
      { "name": "Symfony", "icon": "icons/symfony.svg" }
    ],
    "socials": {
      "linkedin": "https://www.linkedin.com/in/philippe-bourgeois-76662723b/"
    },
    "hobbies": "Randonnée Musique",
    "background": "images/citywalk.avif",
    "photo": "images/philippe.webp"
  },
  {
    "name": "Créteur",
    "prenom": "Térence",
    "latitude": 50.72372133213707,
    "longitude": 1.6091759397839611,
    "ville": "Boulogne sur mer",
    "stackIcons": [
      { "name": "HTML", "icon": "icons/html5.svg" },
      { "name": "CSS", "icon": "icons/css3.svg" },
      { "name": "JS", "icon": "icons/javascript.svg" },
      { "name": "C#", "icon": "icons/iconc.svg" }
    ],
    "socials": {
      "linkedin": "https://www.linkedin.com/in/t%C3%A9rence-cr%C3%A9teur-00aaa81b0/"
    },
    "hobbies": "Écriture Musique",
    "background": "images/hands-character-writing-letter-desk-with-papers-pencil-envelopes-coffee-cup_74855-10720.avif",
    "photo": "images/terence.webp"
  },
  {
    "name": "Diereman",
    "prenom": "Sacha",
    "latitude": 50.82425742332678,
    "longitude": 1.5958404531884935,
    "ville": "Audreselles",
    "stackIcons": [
      { "name": "HTML", "icon": "icons/html5.svg" },
      { "name": "CSS", "icon": "icons/css3.svg" }
    ],
    "socials": {
      "linkedin": "?"
    },
    "hobbies": "Techo/Hardtech, Sport",
    "background": "images/yc-space-manufacturing.webp",
    "photo": "images/sacha.webp"
  },
  {
    "name": "Vanherzecke",
    "prenom": "Yohann",
    "latitude": 50.953061582627086,
    "longitude": 1.854471972943669,
    "ville": "Calais",
    "stackIcons": [
      { "name": "HTML", "icon": "icons/html5.svg" },
      { "name": "CSS", "icon": "icons/css3.svg" },
      { "name": "JS", "icon": "icons/javascript.svg" }
    ],
    "socials": {
      "linkedin": "https://www.linkedin.com/in/vanherzecke-yohann-a49587177/"
    },
    "hobbies": "Randonnées, informatique, lecture",
    "background": "images/circuit-board-neon-background_23-2148335792.avif",
    "photo": "images/yohann.webp"
  },
  {
    "name": "Broutin",
    "prenom": "Florent",
    "latitude": 50.95836859866863,
    "longitude": 1.8931831355338746,
    "ville": "Calais",
    "stackIcons": [
      { "name": "HTML", "icon": "icons/html5.svg" },
      { "name": "CSS", "icon": "icons/css3.svg" },
      { "name": "JS", "icon": "icons/javascript.svg" }
    ],
    "socials": {
      "linkedin": "https://www.linkedin.com/in/florent-broutin-40b651271/"
    },
    "hobbies": "Informatique, jeux vidéo",
    "background": "images/hand-drawn-video-game-background_23-2150307800.avif",
    "photo": "images/florent.webp"
  },
  {
    "name": "Charles",
    "prenom": "Julie",
    "latitude": 50.737206235597164,
    "longitude": 1.62235,
    "ville": "Boulogne sur mer",
    "stackIcons": [
      { "name": "HTML", "icon": "icons/html5.svg" },
      { "name": "CSS", "icon": "icons/css3.svg" }
    ],
    "socials": {
      "linkedin": "https://linkedin.com/in/julie-c-92207a294"
    },
    "hobbies": "Cinéma, mode",
    "background": "images/modele-sans-couture-elements-cinema_225004-1155.avif",
    "photo": "images/julie.webp"
  },
  {
    "name": "Hermant",
    "prenom": "Maxence",
    "latitude": 50.735764715867255,
    "longitude": 2.300809568620041,
    "ville": "Arques",
    "stackIcons": [
      { "name": "HTML", "icon": "icons/html5.svg" },
      { "name": "CSS", "icon": "icons/css3.svg" },
      { "name": "PHP", "icon": "icons/php.svg" },
      { "name": "MySQL", "icon": "icons/mysql-logo.svg" }
    ],
    "socials": {
      "linkedin": "https://www.linkedin.com/in/maxence-hermant-501583328/"
    },
    "hobbies": "MMA, jeux vidéo",
    "background": "images/empty-mma-arena-mma-ring-side-view-lights-complete-tribune_542898-152.avif",
    "photo": "images/Maxence.webp"
  },
  {
    "name": "Herbez",
    "prenom": "Nicolas",
    "latitude": 50.639873167303776,
    "longitude": 1.745547470464413,
    "ville": "Samer",
    "stackIcons": [
      { "name": "HTML", "icon": "icons/html5.svg" },
      { "name": "CSS", "icon": "icons/css3.svg" },
      { "name": "JS", "icon": "icons/javascript.svg" },
      { "name": "PHP", "icon": "icons/php.svg" },
      { "name": "Symfony", "icon": "icons/symfony.svg" },
      { "name": "MySQL", "icon": "icons/mysql-logo.svg" }
    ],
    "socials": {
      "linkedin": "https://www.linkedin.com/in/nicolas-herbez-hdf/"
    },
    "hobbies": "Code, les apprenants",
    "background": "images/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.avif",
    "photo": "images/Nicolas.webp"
  },
  {
    "name": "Cottrez",
    "prenom": "Rémy",
    "latitude": 50.73248953086215,
    "longitude": 2.303572797827876,
    "ville": "Arques",
    "stack": [
      "HTML",
      "CSS",
      "JS",
      "Figma",
      "MongoDB",
      "NextJS",
      "React",
      "PostgreSQL",
      "NodeJS",
      "MySQL",
      "Swagger"
    ],
    "stackIcons": [
      { "name": "HTML", "icon": "icons/html5.svg" },
      { "name": "CSS", "icon": "icons/css3.svg" },
      { "name": "JS", "icon": "icons/javascript.svg" },
      { "name": "Figma", "icon": "icons/figma.svg" },
      { "name": "MongoDB", "icon": "icons/mongodb.svg" },
      { "name": "NextJS", "icon": "icons/nextjs-icon.svg" },
      { "name": "React", "icon": "icons/React Logo.svg" },
      { "name": "PostgreSQL", "icon": "icons/postgresql.svg" },
      { "name": "NodeJS", "icon": "icons/node-js.svg" },
      { "name": "MySQL", "icon": "icons/mysql-logo.svg" },
      { "name": "Swagger", "icon": "icons/swagger.svg" }
    ],
    "socials": {
      "linkedin": "https://www.linkedin.com/in/remyco/"
    },
    "hobbies": "Jeux vidéo, cinéma, séries, developpement web",
    "background": "images/development-4536630_640.webp",
    "photo": "images/Remy.webp"
  }
]
const map = L.map("map").setView([46.603354, 1.888334], 6); // Coordonnées de la France

// Ajouter une couche de tuiles OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const markers = [];
console.log(markers);


// Fonction pour ajouter un marqueur personnalisé
function addCustomMarker(person) {
  const customIcon = L.icon({
    iconUrl: person.photo, // Utilisation de la photo de la personne comme icône
    iconSize: [50, 50], // Taille de l'icône
    iconAnchor: [25, 50], // Point d'ancrage de l'icône
  });

  // Création du contenu du popup
  const stackIcons = person.stackIcons
        .map(
          (iconData) => `
        <div class="stack-icon">
          <img src="${iconData.icon}" alt="${iconData.name}" title="${iconData.name}">
        </div>
      `
        )
        .join("");

  const popupContent = `
  <div class="backgroundPopup" style="background-image: url('${person.background}'); padding: 10px; background-size: cover;">
    <img src="${person.photo}" alt="${person.name}" class="profile-photo">  
    <h2>${person.prenom} ${person.name}</h2>
    <div class="info"><strong>Ville:</strong> ${person.ville}</div>
    <div class="info"><strong>Stack:</strong></div>
    <div class="stack-icons">${stackIcons}</div>
    <div class="info"><strong>Hobbies:</strong> ${person.hobbies}</div>
    <div class="info"><strong>Liens:</strong> <a href="${person.socials.linkedin}" target="_blank">LinkedIn</a></div>
  </div>
`;

  // Création du marqueur avec l'icône personnalisée mais ne l'ajoute pas à la carte immédiatement
  const marker = L.marker([person.latitude, person.longitude], { icon: customIcon })
    .bindPopup(popupContent);

  markers.push(marker); // Conserver le marqueur dans le tableau pour un accès ultérieur
}

// Récupération des données depuis le fichier JSON et ajout des marqueurs

    contacts.forEach(person => {
      // Ajoute un marqueur personnalisé pour chaque personne
      addCustomMarker(person);
    });
  

// Fonction pour ajouter un marqueur personnalisé
function addCustomMarker(contact) {
  const customIcon = L.icon({
    iconUrl: contact.photo, // Utilisation de la photo de la personne comme icône
    iconSize: [50, 50], // Taille de l'icône
    iconAnchor: [25, 50], // Point d'ancrage de l'icône
  });

  // Création du contenu du popup
  const stackIcons = contact.stackIcons
    .map(iconData => `
      <img src="${iconData.icon}" alt="${iconData.name}" title="${iconData.name}" width="30px" height="30px" style="margin-right: 5px;">
    `)
    .join("");

    const popupContent = `
    <div style="background-image: url('${contact.background}'); padding: 10px; background-size: cover;">
      <h2>${contact.prenom} ${contact.name}</h2>
      <img src="${contact.photo}" alt="${contact.name}" width="100px" height="100px">
      <p><strong>Ville:</strong> ${contact.ville}</p>
      <p><strong>Stack:</strong></p>
      <div>${stackIcons}</div> <!-- Correction ici -->
      <p><strong>Hobbies:</strong> ${contact.hobbies}</p>
      <p><strong>Liens:</strong></p>
      <ul>
        <li><a href="${contact.socials.linkedin}" target="_blank">LinkedIn</a></li>
      </ul>
    </div>
  `;
  

  // Création du marqueur avec l'icône personnalisée et le contenu du popup
  const marker = L.marker([contact.latitude, contact.longitude], { icon: customIcon })
    .bindPopup(popupContent);

  markers.push(marker); // Conserver le marqueur dans le tableau pour un accès ultérieur
}

// Appel de la fonction pour chaque contact
contacts.forEach(contact => {
  addCustomMarker(contact);
});


// Fonction pour afficher les contacts dans le DOM
function displayContacts(filteredContacts) {
  const contactsContainer = document.querySelector(".inserCard");
  contactsContainer.innerHTML = ""; // Vider le conteneur avant d'ajouter les cartes

  filteredContacts.forEach((contact, index) => {
    const cardHTML = `
      <div class="contact-card">
          <div class="header">
              <img src="${contact.photo}" class="photoProfil" alt="photo apprenant">
              <div class="nameVille">
                  <h3>${contact.prenom} ${contact.name}</h3>
                  <p>
                    <a href="#" onclick="flyToMarker(${index}); return false;">
                      ${contact.ville}
                    </a>
                  </p>
              </div>
          </div>
          <p><a href="${contact.socials.linkedin}" target="_blank">LinkedIn</a></p>
          <p>Hobbies: ${contact.hobbies}</p>
      </div>
    `;
    // Ajouter la carte dans la section contacts
    contactsContainer.insertAdjacentHTML("beforeend", cardHTML);

    // Ajouter le marqueur correspondant
    addCustomMarker(contact, index);
  });
}

// Fonction pour effectuer le "fly to" vers un marqueur
function flyToMarker(index) {
  const marker = markers[index];
  if (marker) {
    map.flyTo(marker.getLatLng(), 13); // Zoomer vers le marqueur
    marker.addTo(map).openPopup(); // Afficher le marqueur et son popup
  }
}

// Afficher tous les contacts initialement
displayContacts(contacts);

// Ajouter l'écouteur d'événements pour le champ de recherche
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase(); // Obtenir la valeur de recherche en minuscules
  const filteredContacts = contacts.filter((contact) => {
    return `${contact.prenom} ${contact.name}`
      .toLowerCase()
      .includes(searchValue);
  });
  displayContacts(filteredContacts); // Afficher uniquement les contacts filtrés
});

// Gérer l'ouverture et la fermeture du modal
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('signupModal');
const closeModal = document.getElementsByClassName('close')[0];

openModalBtn.onclick = function() {
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const signupForm = document.getElementById('signupForm');

signupForm.onsubmit = function(e) {
    e.preventDefault(); 
    const formData = {
        prenom: e.target.prenom.value,
        name: e.target.name.value,
        ville: e.target.ville.value,
        photo: e.target.photo.value,
        stack: e.target.stack.value.split(',').map(item => item.trim()), // Transformer en tableau
    };

    console.log('Données du formulaire:', formData); // Loguer les données

    modal.style.display = "none";
    signupForm.reset();
}
