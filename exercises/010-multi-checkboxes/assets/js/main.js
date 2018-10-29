'use strict'

const inputs = document.querySelectorAll('input[type="checkbox"]')
const button = document.querySelector('.clear-button')

let lastChecked

function handleCheck(e) {

  let inBetween = false

  if (e.shiftKey && this.checked) {
    inputs.forEach(item => {
      if (item === this || item === lastChecked) {
        inBetween = !inBetween // enables on finding first input and disables on last input (checked)
      }

      if (inBetween) {
        item.checked = true
      }
    })
  }

  lastChecked = this

}

function clear () {

  const inputs = document.querySelectorAll('input[type="checkbox"]')

  inputs.forEach(item => item.checked = false)

}

function keyPressHandler (e) {

  if (e.key === 'Enter') clear()

}

function main () {

  button.addEventListener('click', clear)
  document.addEventListener('keypress', clear)
  inputs.forEach(item => item.addEventListener('click', handleCheck))

}

document.addEventListener('DOMContentLoaded', main)