let map = L.map('mapFive').setView([39,-98],4)

let greenBasemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
let greenBasemap = L.titleLayer(greenBasemapUrl)
greenBasemap.addTo(map)

let satelliteUrl='https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
let satelliteBasemap=L.titleLayer(satelliteUrl)

let Basemaps= {
  'Light basemap': greenBasemap,
  'Satellite':satelliteBasemap
}
let ControlOptions={
  collapsed: false
}
let opLayers={}
L.control.layer(Basemaps, opLayers, ControllOptions).addTo(map)
