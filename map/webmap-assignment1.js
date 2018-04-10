let map = L.map('mapOne').setView([51.505,	-0.09], 13)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(map)
let polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map)

let mypoint = L.marker([51.5, -0.09]).addTo(map)

polygon.bindPopup('St. Katharine\'s and Wapping')
mypoint.bindPopup('London Bridge<br>Station')

map.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
