let icon = document.getElementById('hamburgerIcon')
let menu = document.getElementById('hamburgerMenu')

icon.addEventListener('click', () => {
    menu.classList.toggle("hidden")
})