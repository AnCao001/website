const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElekejt('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click', () => {
        stopSongs()
        document.getElemntById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.GetElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}