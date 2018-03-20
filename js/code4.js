
let projectArray = [
  1,
  'http://arcg.is/2DsHgpx',
  'Points of Interest - Lafitte, LA',
  'Book Assignment 1',
  true,
  ['Lafite','Story Map']
]
  let projectObject = {
    id: 1,
    url: 'http://arcg.is/2DsHgpx',
    title: 'Points of Interest - Lafitte, LA',
    desc: 'Book Assignment 1',
    thumb: true,
    keywords: ['Lafite','Story Map']
  }

console.log(projectArray[0], projectObject.id, projectObject["id"])
console.log(projectArray[1], projectObject.url, projectObject["url"])
console.log(projectArray[2], projectObject.title, projectObject["title"])
