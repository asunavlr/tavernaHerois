class TavernManager {
    constructor(heroManager, tavernaNode) {
        this.heroManager = heroManager;
        this.node = tavernaNode; // O elemento da taverna na página
    }

    /**
     * Manda todos os heróis para casa, limpando a taverna.
     */
    esvaziar() {
        this.node.innerHTML = '';
    }

    /**
     * Convoca heróis para a taverna, embaralhando-os.
     * @param {number} totalDeHerois - O número total de heróis a serem criados.
     */
    preencher(totalDeHerois) {
        this.esvaziar();
        
        // Ajusta o grid do CSS com base no número de heróis
        if (totalDeHerois > 12) {
            this.node.style.gridTemplateColumns = 'repeat(5, 100px)';
        } else {
            this.node.style.gridTemplateColumns = 'repeat(4, 100px)';
        }

        const idsDeHeroisUnicos = [];
        // Precisamos da metade do total de heróis para formar pares
        for (let i = 1; i <= totalDeHerois / 2; i++) {
            idsDeHeroisUnicos.push(i);
        }

        // Duplica a lista para criar os pares
        let idsParaEmbaralhar = [...idsDeHeroisUnicos, ...idsDeHeroisUnicos];

        // Embaralha a lista de heróis (Algoritmo Fisher-Yates)
        for (let i = idsParaEmbaralhar.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [idsParaEmbaralhar[i], idsParaEmbaralhar[j]] = [idsParaEmbaralhar[j], idsParaEmbaralhar[i]];
        }

        // Invoca e adiciona cada herói à taverna
        for (const id of idsParaEmbaralhar) {
            const novoHeroi = this.heroManager.invocar(id);
            this.addHeroi(novoHeroi);
        }
    }

    /**
     * Adiciona um herói específico à taverna.
     * @param {HTMLElement} heroiNode 
     */
    addHeroi(heroiNode) {
        this.node.appendChild(heroiNode);
    }
}