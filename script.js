
// Mostrar mais projetos
document.getElementById('btn-ver-mais').addEventListener('click', function() {
    document.querySelectorAll('.card-projeto.extra').forEach(card => {
        card.style.display = 'block';
    });
    this.style.display = 'none'; // Esconde o botão depois de expandir
});

// Alternar Dark Mode
document.getElementById('btn-darkmode').addEventListener('click', function() {
    document.body.classList.toggle('darkmode');
});


window.addEventListener('DOMContentLoaded', () => {
    // Animação para a aba "Sobre"
    const sobre = document.querySelector('#conteudo-sobre');
    if (sobre) {
        sobre.classList.add('fade-in');
    }

    // Animação para a aba "Projetos"
    const container = document.querySelector('.cards-projetos');
    if (container) {
        container.classList.add('animar-entrada');
    }
});


// botão hamburguer//

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const burger = document.querySelector('.hamburguer');

    menu.classList.toggle('active');
    burger.classList.toggle('active');
}


