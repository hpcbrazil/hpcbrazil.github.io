// Inicializa o mapa centralizado no Brasil
var map = L.map('map').setView([-14.235, -51.9253], 4);

// Adiciona camada de mapa do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Lista de centros de HPC com coordenadas
var locations = [
    { name: "LNCC - Santos Dumont", coords: [-22.5045, -43.1785] },
    { name: "SENAI CIMATEC", coords: [-12.8654, -38.4322] },
    { name: "CESUP/UFRGS", coords: [-30.0331, -51.2302] },
    { name: "CENAPAD-SP", coords: [-22.8142, -47.0647] },
    { name: "CENAPAD-RJ", coords: [-22.8600, -43.2226] },
    { name: "CENAPAD-MG", coords: [-19.8700, -43.9678] },
    { name: "CENAPAD-CPTEC/INPE", coords: [-23.2083, -45.8723] },
    { name: "CENAPAD-UFC", coords: [-3.745, -38.574] },
    { name: "CENAPAD-UFPE", coords: [-8.0500, -34.9500] },
    { name: "CENAPAD-INPA", coords: [-3.1072, -60.0261] }
];

// Adiciona marcadores para cada centro de HPC no mapa
locations.forEach(function(loc) {
    L.marker(loc.coords).addTo(map)
     .bindPopup(`<b>${loc.name}</b>`);
});
