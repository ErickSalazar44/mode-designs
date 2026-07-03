// sound test de cada teclado, solo uno a la vez
const audio = new Audio()
let botonActivo = null

function pararAudio() {
  if (botonActivo) {
    botonActivo.classList.remove('is-playing')
    botonActivo.setAttribute('aria-pressed', 'false')
    botonActivo = null
  }
}

audio.addEventListener('ended', pararAudio)
audio.addEventListener('pause', pararAudio)

document.querySelectorAll('.sound-btn').forEach((btn) => {
  btn.setAttribute('aria-pressed', 'false')
  btn.addEventListener('click', () => {
    if (botonActivo === btn) {
      audio.pause()
      return
    }
    audio.pause()
    audio.src = btn.dataset.audio
    audio.play()
    botonActivo = btn
    btn.classList.add('is-playing')
    btn.setAttribute('aria-pressed', 'true')
  })
})
