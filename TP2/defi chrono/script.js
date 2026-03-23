const bouton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
bouton.addEventListener('click', () => {
    menu.classList.toggle('is-open');
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        bouton.focus();
    }
});