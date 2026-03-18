document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('app-catalogo');
    const buscador = document.getElementById('buscador');

    // 1. Cargar datos inicialmente
    async function cargarVehiculos() {
        try {
            const res = await fetch('datos.xml');
            const str = await res.text();
            const xml = new DOMParser().parseFromString(str, "application/xml");
            const vehiculos = xml.getElementsByTagName('vehiculo');

            renderizar(Array.from(vehiculos));
        } catch (e) { console.error("Error SPA:", e); }
    }

    // 2. Renderizar nodos en el DOM
    function renderizar(lista) {
        contenedor.innerHTML = '';
        lista.forEach(v => {
            const marca = v.querySelector('marca').textContent;
            const modelo = v.querySelector('modelo').textContent;
            const desc = v.querySelector('descripcion').textContent;
            const precio = v.querySelector('precio').textContent;

            const div = document.createElement('article');
            div.className = 'vehiculo-card';
            // Guardamos marca y modelo en minúsculas para facilitar el filtro después
            div.dataset.info = `${marca} ${modelo} ${desc}`.toLowerCase();
            
            div.innerHTML = `
                <h3>${marca} ${modelo}</h3>
                <p>${desc}</p>
                <span class="precio">${parseFloat(precio).toLocaleString()} €</span>
            `;
            contenedor.appendChild(div);
        });
    }

    // 3. Lógica de Filtrado Real-time
    buscador.addEventListener('input', (e) => {
        const termino = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.vehiculo-card');

        cards.forEach(card => {
            const contenido = card.dataset.info;
            if (contenido.includes(termino)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    cargarVehiculos();
});