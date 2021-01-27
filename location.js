var nome = ''; //nome = 0

if(typeof localStorage.nome == 'undefined'){ // se tipo do local for igual a undefined
     localStorage.nome = prompt("Digite seu nome?"); //o site vai perguntar seu nome para jogar dentro da variavel nome

}
nome = localStorage.nome; //nome vai vai receber localstorage.nome
document.getElementById('nome').innerHTML = nome; //e escrevemos na tela para o usuario