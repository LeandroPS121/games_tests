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

            var v1 = document.getElementById('1').innerHTML
            var v2 = document.getElementById('2').innerHTML
            var v3 = document.getElementById('3').innerHTML
            var v4 = document.getElementById('4').innerHTML
            var v5 = document.getElementById('5').innerHTML
            var v6 = document.getElementById('6').innerHTML
            var v7 = document.getElementById('7').innerHTML
            var v8 = document.getElementById('8').innerHTML
            var v9 = document.getElementById('9').innerHTML

            if( ((v1 == v2 && v2 == v3) && v1 != "")||
                ((v4 == v5 && v5 == v6) && v4 != "")||
                ((v7 == v8 && v8 == v9) && v7 != "")||
                ((v1 == v4 && v4 == v7) && v1 != "")||
                ((v2 == v5 && v5 == v8) && v2 != "")||
                ((v3 == v6 && v6 == v9) && v3 != "")||
                ((v1 == v5 && v5 == v9) && v1 != "")||
                ((v3 == v5 && v5 == v7) && v3 != "")) {
                    window.alert('alguem ganhou')
                    break;
                }

        if (possui_espaco == true){
            jogada_bot()
        }
        
    }
}
}
function jogada_bot(v1,v2,v3,v4,v5,v6,v7,v8,v9){
    var jogada_feita = false
    while (jogada_feita == false){
        var jogada_bot = Math.floor(Math.random() * 8) + 1
        var escolha_bot = document.getElementById(jogada_bot).innerHTML
        if(escolha_bot == ""){
            document.getElementById(jogada_bot).innerHTML = 'O'
            jogada_feita = true

            espaco[jogada_bot] = 'O'
            v1 = document.getElementById('1').innerHTML
            v2 = document.getElementById('2').innerHTML
            v3 = document.getElementById('3').innerHTML
            v4 = document.getElementById('4').innerHTML
            v5 = document.getElementById('5').innerHTML
            v6 = document.getElementById('6').innerHTML
            v7 = document.getElementById('7').innerHTML
            v8 = document.getElementById('8').innerHTML
            v9 = document.getElementById('9').innerHTML

            if( ((v1 == v2 && v2 == v3) && v1 != "")||
                ((v4 == v5 && v5 == v6) && v4 != "")||
                ((v7 == v8 && v8 == v9) && v7 != "")||
                ((v1 == v4 && v4 == v7) && v1 != "")||
                ((v2 == v5 && v5 == v8) && v2 != "")||
                ((v3 == v6 && v6 == v9) && v3 != "")||
                ((v1 == v5 && v5 == v9) && v1 != "")||
                ((v3 == v5 && v5 == v7) && v3 != "")) {
                    window.alert('alguem ganhou')
                    break;
                }
        }
    }
}