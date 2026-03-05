// Ejercicio 21: Manipulación del DOM

// 1. Selecciona la caja (id="miCaja")
const caja = document.getElementById('miCaja');

// 2. Selecciona los botones
const btnColor = document.getElementById('btnColor');
const btnTexto = document.getElementById('btnTexto');
const btnAgregar = document.getElementById('btnAgregar');
const lista = document.getElementById('lista');

// 3. Agrega funcionalidad al botón de color (click) 
btnColor.addEventListener('click', () => {
    caja.style.backgroundColor = 'purple';
    caja.style.color = 'white';
});

// 4. Agrega funcionalidad al botón de texto (click)
btnTexto.addEventListener('click', () => {
    caja.innerText = 'Hola JS';
});

// 5. Agrega funcionalidad al botón de agregar (click) 
btnAgregar.addEventListener('click', () => {
    const nuevoElemento = document.createElement('li');
    
    nuevoElemento.innerText = `Elemento ${lista.children.length + 1}`;
    
    lista.appendChild(nuevoElemento);
});