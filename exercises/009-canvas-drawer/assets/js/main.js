'use strict'

const canvas = document.querySelector('#draw')

const ctx = canvas.getContext('2d') // get context of the canvas, where you can draw

// resize the canvas to window size
canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = 'BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 20

let drawing = false
let originX = 0
let originY = 0

let h = 0 // for color
let increase = true // for lineWidth
const maxLineWidth = 70
const minLineWidth = 5

const updateOrigin = data => {
  originX = data.offsetX
  originY = data.offsetY
}

const updateHsl = () => h >= 360 ? h = 0 : h++

const updateLineWidth = () => {
  increase = (ctx.lineWidth >= maxLineWidth || ctx.lineWidth <= minLineWidth) ? !increase : increase // toggle variable
  if (increase) {
    ctx.lineWidth++
  } else {
    ctx.lineWidth--
  }
}

const enableDrawing = e => {
  drawing = true
  updateOrigin(e)
}

const disableDrawing = () => drawing = false

const draw = e => {
  if (!drawing) return

  ctx.strokeStyle = `hsl(${h}, 100%, 50%)`
  ctx.beginPath()
  ctx.moveTo(originX, originY)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()

  // update origin values
  updateOrigin(e)
  updateHsl()
  updateLineWidth()
}

canvas.addEventListener('mousedown', enableDrawing)
canvas.addEventListener('mouseup', disableDrawing)
canvas.addEventListener('mouseleave', disableDrawing)
canvas.addEventListener('mousemove', draw)
