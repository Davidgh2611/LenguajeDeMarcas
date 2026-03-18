// 1. Selecciona el botón por su ID
const btnComprar = document.getElementById("btn-comprar")
// 2. Agrega el Event Listener para el evento 'click'
btnComprar.addEventListener("click", function(){
// 3. Dentro de la función del evento:
//    - Cambia el texto del botón
    this.textContent="Añadido";
//    - Añade una clase (ej: 'btn--success') para cambiar el color
    this.classList.add("btn--success");
//    - Muestra el mensaje en consola
    console.log("Producto añadido al carrito");
})
