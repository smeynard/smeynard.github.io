  let assignmentObject1 = {
    id: 1,
    url: 'http://arcg.is/2DsHgpx',
    title: 'Points of Interest - Lafitte, LA',
    desc: 'Book Assignment 1',
    thumb: true,
    keywords: ['Lafite','Story Map']
  }

let assignmentObject2 = {
  id:2,
  url: 'https://www.arcgis.com/apps/View/index.html?appid=b570f72dd7ed4d22af291d9d0021211f',
  title: 'Layer Symbology and Popups',
  desc: 'Book Assignment 2',
  thumb: true,
  keywords:['recent earthquakes']
}

let assignments=[
  assignmentObject1,
  assignmentObject2
]

for(let i=0; i<assignments.length; i++){
  console.log('Element ' + i + ' title: ' + assignments[i].title)

  if (assignments[i].thumb === true) {
    console.log('images/assignment' + assignments[i].id + '.PNG')
  }
}
