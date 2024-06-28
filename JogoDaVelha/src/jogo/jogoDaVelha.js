class JogoDaVelha {
    constructor() {
        this.jogadorAtual = 'X'
        this.tabuleiro = new Tabuleiro()
        this.jogadores = {
            'X': new Jogador('Jogador 1', 'X'),
            'O': new Jogador('Jogador 2', 'O')
        }
        this.jogadorMaquina = false
        this.jogoFinalizado = false
        this.configurandoJogadores()
        this.carregarPontuacoes()
    }

    configurandoJogadores() {
        document.getElementById('inputJogador1').addEventListener('input', (event) => {
            const nome = event.target.value
            if (nome) {
                this.jogadores['X'].nome = nome
                document.getElementById('nomeJogador1').textContent = nome
                document.getElementById('jogador1').textContent = nome
                this.salvarPontuacoes()
            }
        })

        document.getElementById('inputJogador2').addEventListener('input', (event) => {
            const nome = event.target.value
            if (nome) {
                this.jogadores['O'].nome = nome
                document.getElementById('nomeJogador2').textContent = nome
                document.getElementById('jogador2').textContent = nome
                this.salvarPontuacoes()
            }
        })

        document.getElementById('jogadorMaquina').addEventListener('click', () => {
            if (this.jogadores['X'].nome) {
                this.iniciarMaquina()
            } else {
                alert('Por favor, selecione o nome do jogador 1 antes de jogar contra a máquina.')
            }
        })

        document.getElementById('limpar').addEventListener('click', () => {
            this.reniciarJogo()
        })

        this.tabuleiro.quadradosHTML.forEach(quadrado => {
            quadrado.addEventListener('click', () => {
                const indice = quadrado.dataset.quadrado
                if (!this.jogoFinalizado && this.tabuleiro.quadradoVazio(indice)) {
                    this.realizarJogada(indice)
                    if (this.jogadorMaquina && !this.jogoFinalizado) {
                        this.jogadaMaquina()
                    }
                }
            })
        })
    }
}