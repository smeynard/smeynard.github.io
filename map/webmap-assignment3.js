let map = L.map('mapThree').setView([51.505,	-0.09], 13)

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	ext: 'png'
}).addTo(map)

let courage = L.icon({
  iconUrl: 'images/purpleDog.PNG',
  iconSize: [68, 78], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
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
//script.js

let neighborhood = L.polygon(neighborhoodCoords, neighborhoodStyle).addTo(map)
