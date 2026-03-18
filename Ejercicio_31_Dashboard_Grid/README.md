# Ejercicio 31: Dashboard con Grid y SCSS

## Objetivo
Crear la estructura de un panel de control (Dashboard) utilizando **CSS Grid** para la disposición general y **SCSS** para los estilos. Además, utilizaremos **JavaScript** para una interactividad básica y configuraremos **Gulp** para compilar SCSS.

## Instrucciones
1. Ejecuta 
pm install (si hay dependencias) o inicializa tu package.json e instala gulp y gulp-sass.
2. Crea/Completa el gulpfile.js para compilar los archivos de la carpeta src/scss hacia la carpeta dist/css.
3. Crea la maqueta HTML principal en index.html con una barra lateral (Sidebar), un cabecero (Header) y una zona central dividida en tarjetas usando **CSS Grid**.
4. En src/scss/style.scss, diseña el dashboard. Utiliza variables SCSS para colores y tamaños, y nesting (anidamiento).
5. En src/js/main.js, programa la funcionalidad para ocultar/mostrar la barra lateral al hacer clic en un botón del cabecero usango Javascript moderno (document.querySelector, classList.toggle).
## Ejercicio 31: Dashboard con Grid y SCSS
**Directorio:** `Ejercicio_31_Dashboard_Grid/`

**Descripción:**
En este ejercicio crearás la estructura tipo "Panel de Control" o Dashboard. El objetivo principal es afianzar el uso de **CSS Grid** para la disposición de zonas a nivel de página (Layout) y dominar el flujo de trabajo de compilación de SCSS con Gulp.

**Pasos detallados a seguir:**
1. **Inicialización y Dependencias:**
   - Abre la terminal en la carpeta del ejercicio.
   - Ejecuta `npm init -y` para crear el archivo `package.json`.
   - Instala las dependencias necesarias de Gulp: `npm install --save-dev gulp gulp-sass sass`.
2. **Configuración de Gulp:**
   - Escribe un archivo `gulpfile.js` que defina al menos una tarea (`task`) para tomar el archivo principal SCSS (`src/scss/style.scss`), compilarlo a CSS puro usando el módulo `sass`, y soltar el resultado en una carpeta pública (`dist/css/`).
   - Añade una tarea `watch` para que Gulp observe los cambios y compile automáticamente en cuanto guardes tu código.
3. **Estructura HTML:**
   - Crea un `index.html`. Debes definir semánticamente al menos 3 áreas principales:
     - Un `<aside>` para la barra lateral (Sidebar) con opciones de menú.
     - Un `<header>` situado en la parte superior.
     - Un `<main>` para el contenido, divídido internamente en varias "tarjetas" o *cards* usando `div`s o `<article>`.
4. **Estilos y Layout con Grid (SCSS):**
   - Usa un contenedor padre y aplícale `display: grid;`. Configura las áreas (puedes usar `grid-template-areas` o dividir por filas/columnas explícitas).
   - Usa SCSS para definir variables de colores (por ejemplo `$color-primario`, `$bg-oscuro`) y aprovecha el anidamiento y la sintaxis más limpia respecto a CSS estándar.
5. **Interactividad con JS:**
   - Añade un botón en el Header que actúe como "hamburguesa".
   - En `src/js/main.js` (o directamente compilado), selecciona el botón y el Sidebar, y utiliza `addEventListener('click')` para añadir o quitar (`classList.toggle()`) una clase modificadora de SASS (ej. `.sidebar--oculto`) que encoja o esconda el menú.
