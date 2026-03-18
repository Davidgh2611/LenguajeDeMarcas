async function traerNoticias() {
    const contenedor = document.getElementById('news-grid');
    
    try {
        const respuesta = await fetch("feed.xml");
        const texto = await respuesta.text();
        
        // Parsear el texto plano a un objeto XML navegable
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(texto, "application/xml");
        const items = xmlDoc.getElementsByTagName("item");

        renderizarNoticias(Array.from(items));

    } catch (error) {
        console.error("Error al obtener el RSS:", error);
        contenedor.innerHTML = "<p>Error al cargar las noticias.</p>";
    }
}

function renderizarNoticias(noticias) {
    const contenedor = document.getElementById('news-grid');
    
    noticias.forEach(item => {
        const titulo = item.getElementsByTagName("title")[0].textContent;
        const autor = item.getElementsByTagName("author")[0].textContent;
        const fecha = item.getElementsByTagName("pubDate")[0].textContent;
        const desc = item.getElementsByTagName("description")[0].textContent;

        const article = document.createElement('article');
        article.className = 'news-card';
        article.innerHTML = `
            <div class="card-content">
                <small>${fecha} | Por ${autor}</small>
                <h3>${titulo}</h3>
                <p>${desc}</p>
                <a href="#" class="read-more">Leer más →</a>
            </div>
        `;
        contenedor.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', traerNoticias);