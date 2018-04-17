let map = L.map('mapOne').setView([35.357417, 138.722806], 13)

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(map)

let polygon = L.polygon([
  [35.518459, 138.964695],
  [35.146176, 138.625796],
  [35.413903, 138.163878]
]).addTo(map)

let mypoint = L.marker([35.357417, 138.722806]).addTo(map)

polygon.bindPopup('Japan City')
mypoint.bindPopup('Mount Fuji')

map.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
