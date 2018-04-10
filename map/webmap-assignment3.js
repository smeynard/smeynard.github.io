let map = L.map('mapThree').setView([51.505,	-0.09], 13)

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(map)

let courage = L.icon({
  iconUrl: 'images/purpleDog.PNG',
  iconSize: [68, 78],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let marker = L.marker([51.5, -0.09], {icon:courage}).addTo(map)

let neighborhoodCoords = [
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]
let neighborhoodStyle = {
  color: 'blue',
  fillColor: 'purple',
  dashArray: 3
}

let neighborhood = L.polygon(neighborhoodCoords, neighborhoodStyle).addTo(map)
