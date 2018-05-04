
let mapJapan = L.map('travelMap').setView([35.357417, 138.722806], 7)

let greenBasemapUrl='https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
let greenBasemap=L.tileLayer(greenBasemapUrl)
greenBasemap.addTo(mapJapan)

let lightBasemapUrl ='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
let lightBasemap = L.tileLayer(lightBasemapUrl)

let grayBasemapUrl='http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
let grayBasemap=L.tileLayer(grayBasemapUrl)

let optionalBasemaps= {
  'Light Basemap': lightBasemap,
  'Gray Basemap':grayBasemap,
  'Green Basemap': greenBasemap
}
L.control.layers(optionalBasemaps).addTo(mapJapan)

function createCustomIcon (feature, latlng) {
    let type = feature.properties.Cat
    let url = 'images/foodIcon.PNG'
    if (type == "City Activity") {url= 'images/cityIcon.PNG'}
    if (type == "Nature Activity") {url= 'images/natureIcon.PNG'}
    if (type == "Shopping") {url= 'images/shoppingIcon.PNG'}
    if (type == "Bars") {url= 'images/barsIcon.PNG'}
    if (type == "Entertainment") {url= 'images/enterIcon.PNG'}
    if (type == "Lodging") {url= 'images/LodgingIcon.PNG'}
    if (type == "Food") {url= 'images/foodIcon.PNG'}

    let customIcon = L.icon({
       iconUrl: url,
       iconSize: [40, 50],
     })
     console.log(type)
     return L.marker(latlng, { icon: customIcon })
}

function popup (feature, layer) {
    let name = feature.properties.Place
    let url = feature.properties.URL
    let cat = feature.properties.Cat
    let address = feature.properties.Address
    layer.bindPopup('Address:'+ address + '<br> Description:' + cat + '<br> URL:' + '<a href="'+ url +'">'+name+'</a>')
}

let options = {
  pointToLayer: createCustomIcon,
  onEachFeature: popup
}

let locator = L.control.locate({
  position: 'topright'
}).addTo(mapJapan)


L.geoJSON(travelPoints, options).addTo(mapJapan)
