
  let map = L.map('mapFour').setView([39, -98], 4)

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(map)

  function style (feature) {
    let age = feature.properties.MED_AGE
    let color = 'purple'
    if (age < 38) {
      color = 'blue'
    }
    let style = {
      color: color,
      weight: 1,
      fillOpacity: 0.2
    }
    return style
  }
  function popup (feature, layer) {
    let name = feature.properties.STATE_NAME
    let age = feature.properties.MED_AGE
    layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
  }
  let options = {
    style: style,
    onEachFeature: popup
  }
  L.geoJSON(stateDemographics, options).addTo(map)
