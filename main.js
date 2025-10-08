// Seleciona os elementos principais da página
const startButton = document.querySelector('.start-button');
const menu = document.querySelector('.menu');
const taverna = document.querySelector('.taverna');
const seletorDeHerois = document.querySelector('#num-herois');

// Cria os gerenciadores
const heroManager = new HeroManager();
const tavernManager = new TavernManager(heroManager, taverna);

// Define a ação do botão "Iniciar Aventura"
startButton.addEventListener('click', () => {
    // Esconde o menu e mostra a taverna
    menu.classList.add('hidden');
    taverna.classList.remove('hidden');
  
    // Pega o número de heróis selecionado pelo jogador
    const numHeroisSelecionado = parseInt(seletorDeHerois.value, 10);
    
    // Pede ao gerenciador da taverna para preenchê-la com os heróis
    tavernManager.preencher(numHeroisSelecionado);
});


// --- PARA DESENVOLVIMENTO ---
// Descomente a linha abaixo para ir direto para a taverna sem clicar no botão.
// startButton.click();