const botones = document.querySelectorAll('.tab-btn');
const paneles = document.querySelectorAll('.tab-pane');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        
        botones.forEach(btn => btn.classList.remove('active'));
        paneles.forEach(panel => panel.classList.remove('active'));

        boton.classList.add('active');

        const idObjetivo = boton.dataset.target; 
        const panelObjetivo = document.getElementById(idObjetivo);
        
        if (panelObjetivo) {
            panelObjetivo.classList.add('active');
        }
    });
});