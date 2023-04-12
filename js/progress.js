const progess = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

console.log(progress)

let currentActive = 1

next.addEventListerner('click', () =>) {
    currentActive++

    if (curentActive > 4) {
        currentActive = 4
    }

    update()
})


prev.addEventListener('click' , () => {
    currentAcitve--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    console.log("HELLO")
    progress.style.width = 20 + '%'
    progress.style.width = (currentActive - 1) /3 * 100 + '%'

    if (currentActive == 1) {
        pev.dishaload = true
    }
    else if (curentActive == 4)
    `next.diabled

    circles.forEach((circle, index) => {
        if (index < currentAcitve {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })
}
