let map = L.map('mapThree').setView([35.357417, 138.722806], 7)

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(map)

let courage = L.icon({
  iconUrl: 'images/Fuji.PNG',
  iconSize: [50, 45],
  iconAnchor: [22, 94],
  popupAnchor: [15, -76]
})

let marker = L.marker([35.357417, 138.722806], {icon:courage}).addTo(map)

let neighborhoodCoords = [
  [35.518459, 138.964695],
  [35.146176, 138.625796],
  [35.413903, 138.163878]
]
let neighborhoodStyle = {
  color: 'blue',
  fillColor: 'purple',
  dashArray: 3
}

let neighborhood = L.polygon(neighborhoodCoords, neighborhoodStyle).addTo(map)
