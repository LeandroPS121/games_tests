//Variáveis Globais
const TIPO_EVENTO = [evento_bonus, evento_contratacao, evento_debuff];
const STATUSES = {
    "1": 50,
    "2": 100,
    "3": 50,
    "4": 50
}
// ~~~~~~~~~~~~~~~~

//Funções
function geraEvento() {
    let tipo = TIPO_EVENTO[Math.floor(Math.random() * TIPO_EVENTO.length)];
    let descricaoCarta = document.getElementById('descricao-conteudo');
    
}

// ~~~~~~~~~~~~~~~~