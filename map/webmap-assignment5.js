let map = L.map('mapFive').setView([49.708957, 132.325044],4)

let greenBasemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
let greenBasemap = L.tileLayer(greenBasemapUrl)
greenBasemap.addTo(map)

let redBasemapUrl='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
let redBasemap=L.tileLayer(redBasemapUrl)

let blueBasemapUrl='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
let blueBasemap=L.tileLayer(blueBasemapUrl)


let basemaps= {
  'Green Basemap': greenBasemap,
  'Red Basemap':redBasemap,
  'Blue Basemap': blueBasemap
}
let ControlOptions={
  collapsed: false
}
let opLayers={}
L.control.layers(basemaps, opLayers, ControlOptions).addTo(map)
