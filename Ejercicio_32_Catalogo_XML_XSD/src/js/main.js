document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-productos');

    fetch("productos.xml")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const productos = xml.getElementsByTagName("producto");

            Array.from(productos).forEach(prod => {
                const nombre = prod.getElementsByTagName("nombre")[0].textContent;
                const precio = prod.getElementsByTagName("precio")[0].textContent;
                const desc = prod.getElementsByTagName("descripcion")[0].textContent;
                const cat = prod.getElementsByTagName("categoria")[0].textContent;

                const card = document.createElement('div');
                card.className = 'producto-card';
                card.innerHTML = `
                    <h3>${nombre}</h3>
                    <p class="categoria">${cat}</p>
                    <p>${desc}</p>
                    <span class="precio">${precio}€</span>
                `;
                contenedor.appendChild(card);
            });
        })
        .catch(error => console.error("Error cargando XML:", error));
});