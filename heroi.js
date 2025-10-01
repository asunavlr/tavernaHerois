class HeroManager {
    constructor() {
        this.heroisVisiveis = [];

        this.gerarRetratoURL = (id) => `imagens/${id}.png`;
    }
    invocar(id) {
        const heroiNode = document.createElement('div');
        heroiNode.classList.add('heroi');
        heroiNode.dataset.id = id;

        const verso = document.createElement('div');
        verso.classList.add('heroi-verso');

        const frente = document.createElement('div');
        frente.classList.add('heroi-frente');
        const retrato = document.createElement('div');
        retrato.src = this.gerarRetratoURL(id);
        frente.appendChild(retrato);

        heroiNode.appendChild(verso);
        heroiNode.appendChild(frente);

        heroiNode.addEventListener('click', (event) => {
            this.onClick(heroiNode);
        });

        return heroiNode;
    }
    
    onClick(heroiNode) {
        this.revelar(heroiNode);
    }

    revelar(heroiNode) {
        heroiNode.classList.add('revelado');
    }

    esconder(heroiNode) {
        heroiNode.classList.remove('revelado');
    }

    formarPar(heroiNode) {
        heroiNode.classList.add('par-formado');
    }
}