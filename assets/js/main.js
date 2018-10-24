const { h, app } = hyperapp

const state = {
  pageTitle: 'ES6 Javascript Exercises',
  exercises: typeof exercisesData !== 'undefined' ? exercisesData : []
}

const actions = {}

// components:

const exerciseItem = (item, index) => (
  h('li', { className: 'exercises-list__item' }, [
    h('a', { href: item.link, target: '_blank' }, [
      h('div', { className: 'exercise-card card-animation' }, [
        h('div', { className: 'exercise-card__number' }, index + 1),
        h('div', { className: 'exercise-card__image' }, [
          h('img', { src: item.img, alt: item.title.toLowerCase().replace(/\s/g, '-') })
        ]),
        h('div', { className: 'exercise-card__title' }, item.title)
      ])
    ])
  ])
)

const exercisesList = state => h('ul', { className: 'exercises-list' }, state.exercises.map((item, index) => exerciseItem(item, index)))


// main view:
const view = state => (
  h('div', { className: 'main' }, [
    h('h1', { className: 'page-title' }, state.pageTitle),
    exercisesList
  ])
)

app(state, actions, view, document.body) // inject app on body element