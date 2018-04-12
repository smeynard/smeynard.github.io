let map = L.map('mapFive').setView([39,-98],4)

let greenBasemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
let greenBasemap = L.tileLayer(greenBasemapUrl)
greenBasemap.addTo(map)

let otherUrl='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
let otherBasemap=L.tileLayer(otherUrl)
//satelliteBasemap.addTo(map)
let basemaps= {
  'Green Basemap': greenBasemap,
  'Red Basemap':otherBasemap
}
let ControlOptions={
  collapsed: false
}
let opLayers={}
L.control.layers(basemaps, opLayers, ControlOptions).addTo(map)
