// Contador que servirá para dar Ids novos às cartas
var contador = 0;

// Palavras testes para frente da carta
var palavras = ['banana','abacate','uva','paralelepipedo','mandioca','macaxeira','aipim'];

// Cores testes para frente da carta
var coresFundo = ['red','yellow','purple','orange','blue'];

// Descrições testes para verso da carta
var descricoes = ['Predo','Fernando','Leandro','Paluski','Ruan'];

var frenteOuVerso = true;

var frenteCarta = document.getElementById('frente-carta');
// Armazena os elementos
var passarCarta1 = document.getElementById('btn-1');
var passarCarta2 = document.getElementById('btn-2');

// Ativa a mecanica de passar a carta para baixo
function gerarNovaCarta() {
    const cartaAtual = document.getElementById(`carta${contador-1}`);
    cartaAtual.style.zIndex = 1;
    
    passarCarta1.disabled = true;
    passarCarta2.disabled = true;
    
    frenteCarta.classList.add('sobe');
    frenteCarta.addEventListener('animationend', function(){
        frenteCarta.classList.remove('sobe');
        passarCarta1.disabled = false;
        passarCarta2.disabled = false;
    })
    setTimeout(function() {
        cartaAtual.classList.add('final');
    }, 0);
    cartaAtual.addEventListener("animationend", function() { 
        cartaAtual.remove();
    })
    gerarCarta();
}

// Gera uma nova carta puxando informações para frente e verso
function gerarCarta() {
    let novaCarta = document.createElement('div');
    let cabecaBoneco = document.createElement('div');
    let corpoBoneco = document.createElement('div');
    let roupaBoneco = document.createElement('div');
    cabecaBoneco.classList.add('frente-carta-cabeca-boneco')
    roupaBoneco.classList.add('frente-carta-roupa-boneco')
    corpoBoneco.classList.add('frente-carta-corpo-boneco')
    if (frenteOuVerso) {
        let versoCarta = document.getElementById('verso-carta');
        versoCarta.textContent = descricoes[Math.floor(Math.random()*descricoes.length)]
    }

    // Adiciona informações na nova carta
    novaCarta.classList.add("carta");
    novaCarta.style.zIndex = 0;
    novaCarta.textContent = palavras[Math.floor(Math.random()*6)];
    // novaCarta.style.background = coresFundo[Math.floor(Math.random()*5)];
    novaCarta.id = `carta${contador}`;
    
    contador++;

    novaCarta.appendChild(cabecaBoneco)
    novaCarta.appendChild(roupaBoneco)
    novaCarta.appendChild(corpoBoneco)
    frenteCarta.append(novaCarta);
}

// Manda a carta do topo para o final do baralho
function virarCarta() {
    var carta = document.getElementById('carta');
    carta.classList.toggle('flip');
    if (frenteOuVerso) {
        frenteOuVerso = false;
        passarCarta1.disabled = true;
        passarCarta2.disabled = true;
    } else{
        frenteOuVerso = true;
        passarCarta1.disabled = false;
        passarCarta2.disabled = false;
    }
}

// Gera uma carta ao carregar a página
window.onload = function() {
    gerarCarta();
};