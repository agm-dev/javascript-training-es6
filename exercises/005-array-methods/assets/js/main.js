'use strict'

// DATA:

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William']


// CODE:

// 1. Filter the list of inventors for those who were born in the 1500's

const filtered = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)

console.log(`Inventors who were born in the 1500's`)
console.table(filtered)


// 2. Give us an array of the inventor first and last names

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

console.log(`Inventor's full names`)
console.table(fullNames)


// 3. Sort the inventors by birthdate, oldest to youngest

const orderedByAge = inventors.sort((a, b) => a.year > b.year ? 1 : -1)

console.log(`Inventors ordered from oldest to youngest`)
console.table(orderedByAge)


// 4. How many years did all the inventors live?

const totalYearsLived = inventors.reduce((result, inventor) => result + inventor.passed - inventor.year, 0)

console.log(`Total years all the inventors lived`)
console.log(totalYearsLived)

// 5. Sort the inventors by years lived

const orderedByTotalYearsLived = inventors.sort((a, b) => a.passed - a.year > b.passed - b.year ? -1 : 1)

console.log(`Inventors ordered by total yeras lived`)
console.table(orderedByTotalYearsLived)


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// Visit this page and exec the code there:
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const items = Array.from(document.querySelectorAll('.mw-category a'))
const withDe = items
  .map(item => item.innerText)
  .filter(item => item.includes('de'))

console.log(`List of Boulevards in Paris that contain 'de' anywhere in the name`)
console.table(withDe)


// 7. sort Exercise: Sort the people alphabetically by FIRST name
const orderedByFirstName = people
  .sort((a, b) => {
    const [aLast, aFirst] = a.split(', ')
    const [bLast, bFirst] = b.split(', ')
    return aFirst > bFirst ? -1 : 1
  })

console.log(`People ordered by first name`)
console.table(orderedByFirstName)


// 8. Reduce Exercise: Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick']

const result = data.reduce((result, current) => {
  if (result[current]) {
    result[current]++
  } else {
    result[current] = 1
  }
  return result
}, {})

console.log(`Sum of instances of each one in data`)
console.log(data)
console.table(result)


// 9. The same than last one but with immutability:

const immutability = data.reduce((result, current) => {
  const updated = {}
  updated[current] = result[current] ? result[current] + 1 : 1
  return Object.assign(result, updated)
}, {})

console.log(`Sum of instances of each one in data with immutability`)
console.log(data)
console.table(immutability)
