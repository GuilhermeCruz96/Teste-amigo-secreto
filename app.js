//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

// Buscar informações contidas no HTML pelo ID
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let listaHTML = document.getElementById('listaAmigos');
    let nome = inputAmigo.value.trim();

//Informar caso não seja digitado nenhum nome
    if (nome == ''){
        alert('Nome inválido. Por favor, digite um nome válido!');
        return;
    }

//Adicionar nomes à lista e separa-los por virgula
    amigos.push(nome);
    listaHTML.textContent = amigos.join(', ');
    inputAmigo.value = '';
    inputAmigo.focus();
}
//Realizar o sorteio do amigo secreto
function sortearAmigo(){
    let resultado = document.getElementById('resultado');

//Numero minimo de amigos para realizar o sorteio
    if (amigos.length < 3) {
        alert('Você precisa adicionar pelo menos 3 amigos para realizar o sorteio!');
        return;
    }
//Realizar a seleção aleatoria do nome sorteado
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    resultado.textContent = ('O amigo secreto sorteado é: ' + amigoSorteado + '!');
}