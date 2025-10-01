class TavernManager {
    constructor(heroManager, tavernaNode) {
        this.heroManager = heroManager;
        this.node = tavernaNode;
    }

    esvaziar() {
        this.node.innerHTML = '';
    }

    preencher(totalDeHerois) {
        this.esvaziar();

        if (totalDeHerois > 12) {
            this.node.style.gridTemplateColumns = 'repeat(5, 100px)';
        }
        else {
            this.node.style.gridTemplateColumns = 'repeat(4, 100px)';
        }
    }
}