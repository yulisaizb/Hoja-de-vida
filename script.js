// Botón de agradecimiento
document.getElementById('thanksBtn').addEventListener('click', function() {
    alert('¡Gracias por visitar mi página!');
});

// Validación básica del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const formMsg = document.getElementById('formMsg');

    if (!nombre || !correo || !mensaje) {
        formMsg.textContent = 'Por favor, completa todos los campos.';
        formMsg.style.color = 'var(--danger)';
        return;
    }
    // Validación simple de email
    if (!/\S+@\S+\.\S+/.test(correo)) {
        formMsg.textContent = 'Correo electrónico no válido.';
        formMsg.style.color = 'var(--danger)';
        return;
    }
    formMsg.textContent = '¡Mensaje enviado correctamente!';
    formMsg.style.color = 'var(--accent)';
    this.reset();
});