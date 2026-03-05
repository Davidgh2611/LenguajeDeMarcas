// Ejercicio 22: Eventos y Clases

// 1. Selecciona el botón del menú, el botón de cerrar y el menú lateral [cite: 77]
const btnAbrir = document.getElementById('toggleMenu');
const btnCerrar = document.getElementById('closeMenu');
const menu = document.getElementById('menuLateral');

// 2. Define una función 'toggleMenu' que:
const toggleMenu = () => {
    menu.classList.toggle('hidden');
};

// 3. Agrega los Event Listeners a los botones para llamar a esa función [cite: 78]
btnAbrir.addEventListener('click', toggleMenu);
btnCerrar.addEventListener('click', toggleMenu);