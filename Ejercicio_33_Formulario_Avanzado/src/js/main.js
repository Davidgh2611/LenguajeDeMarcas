const formulario = document.getElementById('registro-form');
const inputs = document.querySelectorAll('#registro-form input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, números, guion bajo
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{8,}$/, // Mínimo 8 caracteres
    telefono: /^\d{9}$/ // 9 números exactos
};

const validarFormulario = (e) => {
    const nombreCampo = e.target.name;
    const valorCampo = e.target.value;

    if (expresiones[nombreCampo]) {
        const esValido = expresiones[nombreCampo].test(valorCampo);
        const grupo = document.getElementById(`grupo__${nombreCampo}`);

        if (esValido) {
            grupo.classList.add('is-valid');
            grupo.classList.remove('is-invalid');
        } else {
            grupo.classList.add('is-invalid');
            grupo.classList.remove('is-valid');
        }
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario); // Al escribir
    input.addEventListener('blur', validarFormulario);  // Al salir del campo
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí podrías validar que todos los campos tengan 'is-valid' antes de enviar
    alert('Formulario enviado con éxito (simulado)');
});