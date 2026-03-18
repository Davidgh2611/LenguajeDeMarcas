const btnMenu = document.getElementById('btn-menu');
const container = document.querySelector('.dashboard-container');

btnMenu.addEventListener('click', () => {
    container.classList.toggle('sidebar--oculto');
});