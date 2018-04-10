let map = L.map('mapFive').setView([39,-98],4)

let grayBasemapUrl = ''
let grayBasemap = L.titleLayer(grayBasemapUrl)
grayBasemap.addTo(map)

let satelliteUrl=''
let satelliteBasemap=L.titleLayer(satelliteUrl)

let Basemaps= {
  'Light basemap': grayBasemap,
  'Satellite':satelliteBasemap
}
let myControlOptions={
  collapsed: false
}
let opLayers={}
L.control.layer(myBasemaps, opLayers, myControllOptions).addTo(map)
