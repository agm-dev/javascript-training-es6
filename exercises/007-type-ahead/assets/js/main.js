'use strict'

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []

// fill the array with url data
fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data))

const getMatchingCities = (search, cities) => cities.filter(item => item.city.toLowerCase().includes(search.toLowerCase()) || item.state.toLowerCase().includes(search.toLowerCase()))

const printMatches = function () { // we need the usual 'this' value
  console.log(`value:  ${this.value}`)
  const matches = getMatchingCities(this.value, cities)
  const ordered = matches.sort((a, b) => Number(a.population) > Number(b.population) ? -1 : 1)
  const html = ordered.map(item => {
    const regex = new RegExp(this.value, 'gi')
    const cityHighlighted = item.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const stateHightlighted = item.state.replace(regex, `<span class="hl">${this.value}</span>`)
    return `
      <li>
        <span class="name">${cityHighlighted}, ${stateHightlighted}</span>
        <span class="population">${Number(item.population).toLocaleString('en-EN')}</span>
      </li>
    `;
  })
  resultsContainer.innerHTML = html.join('')
}

const input = document.querySelector('input.search')
const resultsContainer = document.querySelector('.suggestions')

input.addEventListener('keyup', printMatches, false)
input.addEventListener('change', printMatches, false)