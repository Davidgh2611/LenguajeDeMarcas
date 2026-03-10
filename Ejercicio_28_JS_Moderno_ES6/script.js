const container = document.getElementById('resultado');

const saludar = nombre => `Hola ${nombre}`; 

const usuarios = [
    { id: 1, nombre: 'Ana', rol: 'Admin' },
    { id: 2, nombre: 'Carlos', rol: 'User' },
    { id: 3, nombre: 'Bea', rol: 'Editor' }
];
const admins = usuarios.filter(u => u.rol === 'Admin');

const listaHTML = admins.map(u => `<li>${u.nombre} (ID: ${u.id})</li>`);

container.innerHTML = `
    <h3>Lista de Administradores:</h3>
    <ul>
        ${listaHTML.join('')}
    </ul>
`;