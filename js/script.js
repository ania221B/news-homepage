const nav = document.querySelector('.primary-nav')

const navBtn = document.querySelector('.mobile-btn')

navBtn.addEventListener('click', _ => {
  const visible = nav.getAttribute('data-visible')

  if (visible === 'false') {
    nav.setAttribute('data-visible', true)
    navBtn.setAttribute('aria-expanded', true)
    document.body.classList.add('menu-is-open')
  } else {
    nav.setAttribute('data-visible', false)
    navBtn.setAttribute('aria-expanded', false)
    document.body.classList.remove('menu-is-open')
  }
})
