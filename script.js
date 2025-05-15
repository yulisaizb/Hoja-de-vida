document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de habilidades técnicas
    const technicalCtx = document.getElementById('technicalSkills').getContext('2d');
    new Chart(technicalCtx, {
        type: 'bar',
        data: {
            labels: ['HTML', 'CSS', 'Javascript', 'SQL', 'GitHub'],
            datasets: [{
                label: 'Nivel de Habilidad',
                data: [85, 70, 40, 40, 70],
                backgroundColor: 'rgba(231, 76, 60, 0.2)',
                borderColor: 'rgba(231, 76, 60, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Gráfico de habilidades personales
    const softCtx = document.getElementById('softSkills').getContext('2d');
    new Chart(softCtx, {
        type: 'bar',
        data: {
            labels: ['Trabajo en Equipo', 'Comunicación', 'Resolución de Problemas', 'Adaptabilidad'],
            datasets: [{
                label: 'Nivel de Habilidad',
                data: [80, 90, 30,  85],
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Gráfico de idiomas
    const languagesCtx = document.getElementById('languages').getContext('2d');
    new Chart(languagesCtx, {
        type: 'doughnut',
        data: {
            labels: ['Español', 'Inglés'],
            datasets: [{
                data: [100, 44],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.8)',
                    'rgba(231, 76, 60, 0.8)'
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(231, 76, 60, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validación básica
        if (!name || !email || !message) {
            alert('Por favor, completa todos los campos');
            return;
        }

        // Aquí puedes agregar la lógica para enviar el formulario
        alert(`¡Gracias por tu mensaje, ${name}! Espero tener mas conocimientos para mejorar cada dia .`);
        contactForm.reset();
    });
});