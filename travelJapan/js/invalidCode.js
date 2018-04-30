
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


-----------------------------------------------------------------------------



function createCustomIcon (feature, latlng) {
  let sushi = L.icon({
    iconUrl: 'images/foodIcon.PNG',
    iconSize: [30, 40],
  })
  return L.marker(latlng, { icon: sushi })
}
let options = {
  pointToLayer: createCustomIcon
}
---------------------------------------------------------------------------

function popup (feature, layer) {
  let name = feature.properties.Place
  let URL = feature.properties.URL
  layer.bindPopup('Place:' + name +'<br> Description:' + cat +'<br> URL:' + URL)
  onEachFeature: popup
}

function style (feature) {
  let type = feature.properties.
  let icon = icon
 if type = "City Activity" {iconURL: 'images/cityIcon.PNG'}
 if type = "Nature Activity" {iconURL: 'images/natureIcon.PNG'}
 if type = "Shopping" {iconURL: 'images/shoppingIcon.PNG'}
 if type = "Bars" {iconURL: 'images/barsIcon.PNG'}
 if type = "Entertainment" {iconURL: 'images/enterIcon.PNG'}
 if type = "Lodging" {iconURL: 'images/lodgingIcon.PNG'}


let locator = L.control.locate({
    position: 'topright',
    strings: {
        title: "Where am I?"
    }
  })
---------------------------------------------------------------------------

L.geoJSON(travelPoints, options, locator).addTo(mapJapan)
