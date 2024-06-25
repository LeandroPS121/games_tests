function gerarCarta() {
    var novaCarta = document.createElement('div');
    novaCarta.classList.add("carta");
    novaCarta.style.zIndex = 0;
    novaCarta.textContent = palavras[Math.floor(Math.random()*6)];
    novaCarta.style.background = coresFundo[Math.floor(Math.random()*5)];
    novaCarta.id = `carta${contador}`;

    contador++;
    conteudo.append(novaCarta);
}

var contador = 0;
var palavras = ['banana','abacate','uva','paralelepipedo','mandioca','macaxeira','aipim'];
var coresFundo = ['red','yellow','purple','orange','blue'];

const passarCarta = document.getElementById('passarCarta');
const conteudo = document.getElementById('conteudo');

passarCarta.addEventListener('click', function() {
    const cartaAtual = document.getElementById(`carta${contador-1}`);

    cartaAtual.style.zIndex = 1;
    
    passarCarta.disabled = true;
    
    conteudo.classList.add('sobe');

    conteudo.addEventListener('animationend', function(){
        conteudo.classList.remove('sobe');
        passarCarta.disabled = false;
     })
    setTimeout(function() {
        cartaAtual.classList.add('final');
    }, 0);
    gerarCarta();
});

function virarCarta() {
        var carta = document.getElementById('carta');
        carta.classList.toggle('flip');
    }

window.onload = function() {
    gerarCarta();
};