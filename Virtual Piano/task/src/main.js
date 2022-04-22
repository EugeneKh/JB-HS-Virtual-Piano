document.addEventListener('keydown', (event) => {
    event.code.match(/Key[ASDFGHJWETYU]/) ?
        new Audio(`./audio/${event.key.toUpperCase()}.mp3`).play():
        console.warn('any key ...')
});
