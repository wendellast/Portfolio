const playButton = document.getElementById('playButton');
const audio = document.getElementById('minhaMusica');

// Função para atualizar a visibilidade do botão e do controle de áudio
function updateVisibility() {
    const isSmallScreen = window.innerWidth <= 600; // Ajuste o valor conforme necessário

    if (isSmallScreen) {
        playButton.style.display = 'block'; // Exibe o botão
        audio.style.display = 'none'; // Oculta o controle de áudio
    } else {
        playButton.style.display = 'none'; // Oculta o botão
        audio.style.display = 'inline'; // Exibe o controle de áudio
    }
}

// Chama a função na carga da página
updateVisibility();

// Adiciona um ouvinte de evento para o redimensionamento da janela
window.addEventListener('resize', updateVisibility);

// Adiciona um ouvinte de evento para o botão
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        audio.pause();
        playButton.textContent = 'Play';
    }
});