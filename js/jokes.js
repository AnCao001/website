const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

jokeBtn.addEventListener('click',generateJoke)

async function generationJoke(){
    const res = await fetch('https://icanhazdadjoke.com' , {
        headers: {Accept: 'application/json',},
    })

    const data = await res.json()
    jokesEl.innerHTML = data.joke
}