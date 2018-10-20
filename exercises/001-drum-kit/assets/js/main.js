'use strict';

const loops = {}

function playAudio () {
  this.currentTime = 0
  this.play()
}

const loopHandler = (key, audio) => {
  const id = key.dataset.key
  if (loops[id]) { // then disable it
    console.log(`disable loop for key ${id}`)
    loops[id] = false
    audio.removeEventListener('ended', playAudio, false)
    key.classList.remove('playing')
  } else { // enable the loop
    console.log(`enable loop for key ${id}`)
    loops[id] = true
    key.classList.add('playing')
    audio.addEventListener('ended', playAudio, false)
    audio.play()
  }
}

const playSound = e => {

  console.log(`keyCode: ${e.keyCode}`)
  const keyElement = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if (!keyElement || !audio) return

  let logMessage = `pressed ${keyElement.children[0].textContent} key`
  if (e.shiftKey) {
    console.log(`${logMessage} with SHIFT key`)
    loopHandler(keyElement, audio)
  } else {
    console.log(logMessage)
    keyElement.classList.add('playing')
    audio.currentTime = 0;
    audio.play()
  }

}

const removeTransition = e => {
  if (e.propertyName !== 'transform') return
  if (loops[e.target.dataset.key]) return
  e.target.classList.remove('playing')
}

document.querySelectorAll('.key').forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound, false);
