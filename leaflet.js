
var map = L.map('map').setView([50.80, 1.9], 10);  
    
     
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '© OpenStreetMap contributors'
}).addTo(map);


var pinGregoire = L.marker([50.65414, 1.63452]).addTo(map);
pinGregoire.bindTooltip(`
    <div>
        <img src="./images/gregoire.webp" class="gregoire" alt="Grégoire Dupont" width="50px" height="50px">
        <p>Grégoire Dupont</p>
    </div>
`, {
    permanent: false,
    direction: 'top'
});

var pinAledorian = L.marker([50.72816663437951, 1.6085496091491847]).addTo(map);

pinAledorian.bindTooltip("Aledorian Legrand", {
    permanent: false,
    direction: 'top'
});

var pinMarine = L.marker([50.72615395483013, 1.605238809099898]).addTo(map);

pinMarine.bindTooltip("Marine Lamour", {
    permanent: false,
    direction: 'top'
});

var pinMarilyne = L.marker([50.68205122488254, 1.6243349379334344]).addTo(map);

pinMarilyne.bindTooltip("Marilyne Lesaffre", {
    permanent: false,
    direction: 'top'
});

var pinPerrine = L.marker([50.68205122488254, 1.6243349379334344]).addTo(map);

pinPerrine.bindTooltip("Perrine Eeckman", {
    permanent: false,
    direction: 'top'
});

var pinPhilippe = L.marker([50.71789827170887, 1.605626853277117]).addTo(map);

pinPhilippe.bindTooltip("Philippe Bourgeois", {
    permanent: false,
    direction: 'top'
});

var pinSacha = L.marker([50.824256892468966, 1.5958102507747567]).addTo(map);

pinSacha.bindTooltip("Sacha Diereman", {
    permanent: false,
    direction: 'top'
});

var pinTerence = L.marker([50.72372133213707, 1.6091759397839611]).addTo(map);

pinTerence.bindTooltip("Térence Créteur", {
    permanent: false,
    direction: 'top'
});

var pinYohann = L.marker([50.953061582627086, 1.854471972943669]).addTo(map);

pinYohann.bindTooltip("Yohann Vanherzecke", {
    permanent: false,
    direction: 'top'
});

var pinFlorent = L.marker([50.95836859866863, 1.8931831355338746]).addTo(map);

pinFlorent.bindTooltip("Florent Broutin", {
    permanent: false,
    direction: 'top'
});

var pinJulie = L.marker([50.72548791837526, 1.6122502046759923]).addTo(map);

pinJulie.bindTooltip("Julie Charles", {
    permanent: false,
    direction: 'top'
});

var pinMaxence = L.marker([50.735764715867255, 2.300809568620041]).addTo(map);

pinMaxence.bindTooltip("Maxence Hermant", {
    permanent: false,
    direction: 'top'
});

var pinNicolas = L.marker([50.639873167303776, 1.745547470464413]).addTo(map);

pinNicolas.bindTooltip("Nicolas Herbez", {
    permanent: false,
    direction: 'top'
});

var pinRemy = L.marker([50.62165081298511, 2.3937801028682903]).addTo(map);

pinRemy.bindTooltip("Rémy Cottrez", {
    permanent: false,
    direction: 'top'
});