class Pizza {
    sabor= ""
    tamanho= ""
    borda= ""

    constructor(sabor, tamanho, borda) {
        this.sabor = sabor
        this.tamanho = tamanho
        this.borda = borda
    }

    calcularPreco() {
        if(this.tamanho === "P") {
            let preco = 25
            return preco
    } else if (this.tamanho === ""){

    }
    }
}

// DIA 14/05

class ContaBancaria{
    //atributos titular e saldo (inicial em 0)
    //método depositar(valor) que soma o valor ao saldo

    titular = ""
    saldo = 0

    constructor(_titular, _saldo) {
        this.titular = this.titular
        this.saldo = this.saldo
    }

    depositarValor(valor){
        this.valor = valor
        return valor + saldo
    }

    sacarValor(valor){
        this.valor = valor
        if(saldo >= valor){
            let saldoRestante = this.saldo - valor
            console.log(saldoRestante)
        } else {
            console.log("Saldo insuficiente")
        }
    }

    extratoBancario() {
        return `Titular: ${this.titular} | Saldo: R$ ${this.saldo}`
    }
}

const pessoa = new ContaBancaria("João", 500)

pessoa.extratoBancario()