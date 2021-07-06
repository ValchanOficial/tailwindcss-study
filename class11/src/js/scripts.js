const btn = document.querySelector('#dark-mode');
const html = document.querySelector('html');

btn.addEventListener('click', () => html.classList.toggle('dark'));
