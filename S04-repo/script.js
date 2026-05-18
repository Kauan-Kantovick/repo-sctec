/*const carrinho = [
    { nome: "Camiseta", preco: 49.90 },
    { nome: "Calça", preco: 89.90 },
    { nome: "Tênis", preco: 199.90 },
    { nome: "Boné", preco: 29.90 },
    { nome: "Meia", preco: 15.90 }
]

// Calcular média de notas
const soma = preco.reduce((acumulador, valor) =>{
    return acumulador + valor
}, 0)

const total = soma;

console.log(`Total: ${total}`)
*/

// const carrinho = [
//     { nome: "Camiseta", preco: 49.90 },
//     { nome: "Calça", preco: 89.90 },
//     { nome: "Tênis", preco: 199.90 },
//     { nome: "Boné", preco: 29.90 },
//     { nome: "Meia", preco: 15.90 }
// ]

// const total = carrinho.reduce((acumulador, produto) => {
//     return acumulador + produto.preco;
// }, 0);

// console.log("Total do carrinho: R$", total.toFixed(2));

const prompt = require('prompt-sync')();

let valOpt = ""

// function menu () {
//     do {
//         let menuopt1 = "1 - Registrar atividade"
//         let menuopt2 = "2 - Ver historico"
//         let menuopt3 = "3 - Ver resumo"
//         let menuopt4 = "4 - Sair"       
//         console.log(menuopt1,menuopt2,menuopt3,menuopt4)
//             if(valOpt === "1") {
//         valOpt = prompt("Escolha uma opção: ")
//     } while (valOpt !== "0")
//         console.log("Programa encerrado")
// }
// menu()

//Quinta-feira

// function registrarAtividade() {
//     const prompt = require('prompt-sync')();
//     const exercicio = prompt("1- corrida, 2- caminhada, 3- ciclismo, 4- remo, 5- natação: ");
//     const distancia = prompt("Digite a distância percorrida (em km): ");
//     const tempoMinutos = prompt("Digite a duração da atividade (em minutos): ");

// };