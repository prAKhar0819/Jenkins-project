document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('animateButton');
    button.addEventListener('click', () => {
        const h1 = document.querySelector('h1');
        h1.style.animation = 'bounceIn 1s forwards';
    });
});
