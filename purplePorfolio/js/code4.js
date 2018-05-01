
let assignmentArray = [
  1,
  'http://arcg.is/2DsHgpx',
  'Points of Interest - Lafitte, LA',
  'Book Assignment 1',
  true,
  ['Lafite','Story Map']
]
  let assignmentObject = {
    id: 1,
    url: 'http://arcg.is/2DsHgpx',
    title: 'Points of Interest - Lafitte, LA',
    desc: 'Book Assignment 1',
    thumb: true,
    keywords: ['Lafite','Story Map']
  }

console.log(assignmentArray[0], assignmentObject.id, assignmentObject["id"])
console.log(assignmentArray[1], assignmentObject.url, assignmentObject["url"])
console.log(assignmentArray[2], assignmentObject.title, assignmentObject["title"])
