'use strict'

const secondHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
const degreesFix = 90

const setDate = () => {

  const now = new Date()

  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + degreesFix
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  const mins = now.getMinutes()
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + degreesFix
  minsHand.style.transform = `rotate(${minsDegrees}deg)`

  const hour = now.getHours()
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + degreesFix
  hourHand.style.transform = `rotate(${hourDegrees}deg)`

  console.log(`${hour}:${mins}:${seconds}`)

}

setInterval(setDate, 1000)

setDate()