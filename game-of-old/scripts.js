function clicar(i){
    var jogada = document.getElementById(i).innerHTML
    if(jogada == ""){
        jogada = 'x'
        document.getElementById(i).innerHTML = jogada

        var possui_espaco = false
        for(var j=1; j<=9; j++){
            var espaco = document.getElementById(j).innerHTML
            if (espaco == ""){
                possui_espaco = true
            }
        }
        if (possui_espaco == true){
            jogada_bot()
        }
    }
}
function jogada_bot(){
    var jogada_feita = false
    while (jogada_feita == false){
        var jogada_bot = Math.floor(Math.random() * 8) + 1
        var escolha_bot = document.getElementById(jogada_bot).innerHTML
        if(escolha_bot == ""){
            document.getElementById(jogada_bot).innerHTML = 'O'
            jogada_feita = true
        }
    }
}