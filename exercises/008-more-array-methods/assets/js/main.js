'use strict'


const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];


// Some and Every Checks

// Array.prototype.some() // is at least one person 19 or older?
const isOverNineteen = people.some(person => (new Date()).getFullYear() - person.year >= 19)
console.table(people)
console.log(`At least a person is 19 or older: ${JSON.stringify(isOverNineteen)}`)

// Array.prototype.every() // is everyone 19 or older?
const everyBodyOverNineteen = people.every(person => (new Date()).getFullYear() - person.year >= 19)
console.log(`Everyone is 19 or older: ${JSON.stringify(everyBodyOverNineteen)}`)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const targetId = 823423
const found = comments.find(comment => comment.id === targetId)
console.table(comments)
console.log(`Found comment with id ${found.id} and text: '${found.text}'`)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const toRemove = comments.findIndex(comment => comment.id === targetId)
console.log(`Removed comment with id ${comments[toRemove].id} in the index ${toRemove}`)

const updatedComments = [
  ...comments.splice(0, toRemove),
  ...comments.splice(toRemove + 1)
]
console.table(updatedComments)