class Tabuleiro {
    constructor() {
        this.quadrado = Array(9).fill('')
        this.quadradosHTML = document.querySelectorAll('.quadrado')
    }

    reniciar() {
        this.quadrado.fill('')
        this.quadradosHTML.forEach(quadrado => {
            quadrado.textContent = ''
            quadrado.removeAttribute('mark')
        })
    }

    quadradosAtualizados(indice, simbolo) {
        this.quadrado[indice] = simbolo
        this.quadradosHTML[indice].textContent = simbolo
        this.quadradosHTML[indice].setAttribute('mark', simbolo)
    }

    quadradoVazio(indice) {
        return this.quadrado[indice] === ''
    }

    quadradosDisponiveis() {
        return this.quadrado.map((value, indice) => value === '' ? indice : null).filter(value => value !== null)
    }
}
