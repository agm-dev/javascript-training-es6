'use strict'

const rules = {
	"name": ["Ghislaine", "Spike", "Daniel", "Tama", "Vlad", "Daniel", "Waldron", "Owen", "Edwin", "Deverell"],
	"villan_name": ["Athanasius", "Desmond", "Norrix", "Dragon", "Jett", "Virgil", "Talon", "Creighton", "Randal", "Auberon"],
  "mood": ["cansado", "hastiado", "enojado", "enfadado", "sorprendido", "exhausto", "deprimido", "eufórico", "extasiado", "furioso", "mareado", "confuso", "estupefacto"],
  "action": ["golpeó con fuerza", "hirió de gravedad", "abrazó como si no hubiera un mañana", "besó con pasión", "engañó descaradamente", "abofeteó varias veces", "ignoró deliberadamente", "ofendió", "arrastró por el suelo", "venció limpiamente", "retó", "empujó por la ventana", "descuartizó", "desmembró cuidadosamente", "estranguló desapasionadamente", "lanzó por la ventana", "disparó una flecha", "atravesó con la lanza", "apuñaló repetidamente"],
  "conclusion": ["lo había sido todo para él", "jamás rechistaba", "nunca oponía resistencia", "solía enfadarse por ello", "había sido su mejor amigo", "había regresado de entre los muertos para acabar así", "no emitió ni un solo grito", "no apartó la mirada durante todo el proceso", "siempre recordaría aquello"],
	"story": ["#hero# #action# a #villain#. #hero# estaba #mood#; el bueno de #villain# #conclusion#."],
	"origin": ["#[hero:#name#][villain:#villan_name#]story#"]
}

let grammar

const createGrammar = rules => tracery.createGrammar(rules)

const getStory = (grammar) => grammar.flatten('#origin#')

const generateStories = () => {

  const stories = document.querySelectorAll('.story')
  stories.forEach(item => {

    const story = getStory(grammar)

    const b = baffle(item)
    b.start()
      .set({ speed: 100 })
      .text(text => story)

    item.dataset.revealed = 'no'
    item.addEventListener('mouseover', () => {
      if (item.dataset.revealed === 'no') {
        b.reveal(1000)
        item.dataset.revealed = 'yes'
      }
    })

  })

  document.querySelector('.hidden').classList.remove('hidden')

}

const obfuscateStories = () => {
  const b = baffle('.story')
  b.start()
}

const start = () => {
  grammar = createGrammar(rules)
  generateStories()
}

const onLoadInterval = setInterval(() => {
  if (typeof tracery !== 'undefined') {
    start()
    clearInterval(onLoadInterval)
  }
}, 100)


