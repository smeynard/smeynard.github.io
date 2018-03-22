let map = L.map('mapOne').setView([51.505,	-0.09], 13)
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	ext: 'png'
}).addTo(map)
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
