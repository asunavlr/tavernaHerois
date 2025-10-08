class HeroManager {
    constructor() {
        this.heroisVisiveis = []; // Lista para guardar os 2 heróis clicados
        this.podeJogar = true;     // Variável para bloquear cliques enquanto verifica um par
    }

    // A função gerarRetratoURL continua a mesma
    gerarRetratoURL = (id) => `imagens/${id}.png`; 

    // A função invocar continua a mesma
    invocar(id) {
        const heroiNode = document.createElement('div');
        heroiNode.classList.add('heroi');
        heroiNode.dataset.id = id; 

        const verso = document.createElement('div');
        verso.classList.add('heroi-verso');

        const frente = document.createElement('div');
        frente.classList.add('heroi-frente');
        const retrato = document.createElement('img');
        retrato.src = this.gerarRetratoURL(id);
        frente.appendChild(retrato);

        heroiNode.appendChild(verso);
        heroiNode.appendChild(frente);

        heroiNode.addEventListener('click', () => {
            // Agora o clique chama a nova lógica
            this.onClick(heroiNode);
        });

        return heroiNode;
    }

    /**
     * Lida com o clique em um herói, agora com a lógica completa.
     * @param {HTMLElement} heroiNode 
     */
    onClick(heroiNode) {
        // 1. Não faz nada se não for permitido jogar, ou se o herói já está revelado/pareado
        if (!this.podeJogar || heroiNode.classList.contains('revelado') || heroiNode.classList.contains('par-formado')) {
            return;
        }

        this.revelar(heroiNode);
        this.heroisVisiveis.push(heroiNode);

        // 2. Se já temos dois heróis visíveis, é hora de checar
        if (this.heroisVisiveis.length === 2) {
            this.checarPar();
        }
    }
    
    /**
     * NOVO MÉTODO: Verifica se os dois heróis na lista 'heroisVisiveis' são um par.
     */
    checarPar() {
        this.podeJogar = false; // Bloqueia novos cliques
        const [heroi1, heroi2] = this.heroisVisiveis;

        // Se os IDs são iguais, é um par!
        if (heroi1.dataset.id === heroi2.dataset.id) {
            this.formarPar(heroi1);
            this.formarPar(heroi2);
            this.heroisVisiveis = []; // Limpa a lista
            this.podeJogar = true;    // Libera os cliques
        } 
        // Se os IDs são diferentes, não é um par.
        else {
            // Espera 1 segundo antes de virar de volta
            setTimeout(() => {
                this.esconder(heroi1);
                this.esconder(heroi2);
                this.heroisVisiveis = []; // Limpa a lista
                this.podeJogar = true;    // Libera os cliques
            }, 1000); // 1000 ms = 1 segundo
        }
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