  let projectObject1 = {
    id: 1,
    url: 'http://arcg.is/2DsHgpx',
    title: 'Points of Interest - Lafitte, LA',
    desc: 'Book Assignment 1',
    thumb: true,
    keywords: ['Lafite','Story Map']
  }

let projectObject2 = {
  id:2,
  url: 'https://www.arcgis.com/apps/View/index.html?appid=b570f72dd7ed4d22af291d9d0021211f',
  title: 'Layer Symbology and Popups',
  desc: 'Book Assignment 2',
  thumb: true,
  keywords:['recent earthquakes']
}

let projects=[
  projectObject1,
  projectObject2
]

for(let i=0; i<projects.length; i++){
  console.log('Element ' + i + ' title: ' + projects[i].title)

  if (projects[i].thumb === true) {
    console.log('images/project' + projects[i].id + '.PNG')
  }
}
