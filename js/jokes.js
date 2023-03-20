const jokeE1 = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

async function generationJoke(){
    const res = await fetch('https://icanhazdadjoke.com' , {
        headers: {Accept: 'application/json' ,},
    })

    const data = await res.json()
    jokesEL.innerHTML = data.joke
}