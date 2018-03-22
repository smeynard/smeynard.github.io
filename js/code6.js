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
thumb: true,
}
function createThumbAlt (project) {
  let thumbAlt = 'Project ' + projectObject.id + 'Title:' + projectObject.title
  return thumbAlt
}
functions createThumbSrc (project) {
  if (project.tumb === true) {
    let thumbSrc = 'image/project' + project.id +'.PNG'
    return thumbSrc
  }
  return 'images/none.PNG'
}

for(let i=0; i<projectObject.length; i++) {
  let imgAlt = createThumbAlt(projectObject[i])
   let imgSrc = createThumbSrc(projectObject[i])
   console.log(imgAlt)
   console.log(imgSrc)
 }
