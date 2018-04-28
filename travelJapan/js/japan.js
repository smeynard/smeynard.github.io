
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

function style (feature) {
 let Description = feature.properties.cat
  let color = 'maroon'
 //if Description = "City Activity" {color: 'pink'}
 //if Description = "Nature Activity" {color: 'olive'}
 //if Description = "Shopping" {color: 'blue'}
 //if Description = "Bars" {color: 'yellow'}
 //if Description = "Entertainment" {color: 'orange'}
 //if Description = "Lodging" {color: 'Black'}
}

//let style = {
  //color: color,
  //weight: 4,
  //fillOpacity: 0.1
//}
//return style

function popup (feature) {
let name = feature.properties.place
  let URL = feature.properties.URL
  layer.bindPopup('Place:' + name +'<br> Description:' + cat +'<br> URL:' + URL)}

let options = {onEachFeature: popup}

L.geoJSON(travelPoints, options).addTo(mapJapan)
