const precoOriginal = 101;
const percentualDesconto = 15;

function efetuarDesconto () {
    if (precoOriginal <= 100) {
        console.log (`O valor total da compra é de R$${precoOriginal} Reais`);
    } else {
        let valorDesconto = percentualDesconto * precoOriginal / 100;
        let precoFinal = precoOriginal - valorDesconto;
        console.log(`O valor total da compra é de R$${precoFinal} Reais`);
    }
}

efetuarDesconto();

// subir para o github