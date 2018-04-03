let projectObject=[]

projectObject[0] = {
  id: 1,
  url: 'http://arcg.is/2DsHgpx',
  title: 'Points of Interest - Lafitte, LA',
  desc: 'Book Assignment 1',
  thumb: true,
}

projectObject[1] = {
id:2,
url: 'https://www.arcgis.com/apps/View/index.html?appid=b570f72dd7ed4d22af291d9d0021211f',
title: 'Layer Symbology and Popups',
desc: 'Book Assignment 2',
thumb: false,
}

for(let i=0; i<projectObject.length; i++) {
  createTitle(projectObject[i].title)
  createThumb(projectObject[i].thumb, projectObject[i].id)
}

function createTitle (title) {
  console.log('Title: ' + title)
}

function createThumb (thumb, id) {
  if (thumb === true) {
    console.log('images/project' + id + '.PNG') // build and log an image file name based on the project ID
  } else {
    console.log('images/none.PNG')
  }
}
