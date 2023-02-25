const nav = document.querySelector('.primary-nav')
const navBtn = document.querySelector('.mobile-btn')

function openMenu () {
  nav.setAttribute('data-state', 'opened')
  navBtn.setAttribute('aria-expanded', 'true')
  document.body.classList.add('overlay')
}

function closeMenu () {
  nav.setAttribute('data-state', 'closing')
  navBtn.setAttribute('aria-expanded', 'false')
  document.body.classList.remove('overlay')
}

navBtn.addEventListener('click', _ => {
  const visible = navBtn.getAttribute('aria-expanded') === 'true'

  visible ? closeMenu() : openMenu()

  document.body.addEventListener(
    'animationend',
    e => {
      if (e.animationName === 'closeMenu') {
        nav.setAttribute('data-state', 'closed')
      }
    },
    { once: true }
  )
})

document.body.addEventListener('click', e => {
  const visible = navBtn.getAttribute('aria-expanded') === 'true'

  if (visible) {
    if (!e.target.closest('.mobile-btn') && !e.target.closest('.primary-nav')) {
      closeMenu()
    }
  }

  document.body.addEventListener(
    'animationend',
    e => {
      if (e.animationName === 'closeMenu') {
        nav.setAttribute('data-state', 'closed')
      }
    },
    { once: true }
  )
})
