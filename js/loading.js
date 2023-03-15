const search = document.querySelector('.search')
const btn = docment.querySelector('.btn')
const input = document,querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})
