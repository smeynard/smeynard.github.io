
let mapJapan = L.map('travelMap').setView([35.357417, 138.722806], 7)

let lightBasemapUrl ='https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
let lightBasemap = L.tileLayer(lightBasemapUrl)
lightBasemap.addTo(mapJapan)

let grayBasemapUrl='http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
let grayBasemap=L.tileLayer(grayBasemapUrl)

let greenBasemapUrl='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
let greenBasemap=L.tileLayer(greenBasemapUrl)

let optionalBasemaps= {
  'Light Basemap': lightBasemap,
  'Gray Basemap':grayBasemap,
  'Green Basemap': greenBasemap
}
L.control.layers(optionalBasemaps).addTo(mapJapan)

function createCustomIcon (feature, latlng) {
  let sushi = L.icon({
    iconUrl: 'images/foodIcon.PNG',
    iconSize: [30, 40],
  })
  return L.marker(latlng, { icon: sushi })
}
//function popup (feature, layer) {
//  let name = feature.properties.Place
//  let URL = feature.properties.URL
//  layer.bindPopup('Place:' + name +'<br> Description:' + cat +'<br> URL:' + URL)}

let options = {
  pointToLayer: createCustomIcon
//  onEachFeature: popup
  }

//function style (feature) {
  //let type = feature.properties
  //let icon =
 //if type = "City Activity" {color: 'pink'}
 //if type = "Nature Activity" {color: 'olive'}
 //if type = "Shopping" {color: 'blue'}
 //if type = "Bars" {color: 'yellow'}
 //if type = "Entertainment" {color: 'orange'}
 //if type = "Lodging" {color: 'Black'}

//let style = {
  //color: color,
  //weight: 4,
  //fillOpacity: 0.1
//}
//return style



L.geoJSON(travelPoints, options).addTo(mapJapan)
