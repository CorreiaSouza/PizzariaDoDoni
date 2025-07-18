const menuDiv = document.querySelector('.menu.mobile'); // Alterado para selecionar o elemento corretamente
const btnAnimar = document.getElementById('btn-menu');

btnAnimar.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuDiv.classList.toggle('abrir');
    btnAnimar.classList.toggle('ativar');
}

function animarMenu() {
    const btn = document.getElementById('btn-menu');
    btn.classList.toggle('ativar');
}
