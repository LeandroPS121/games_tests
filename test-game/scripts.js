function get_coin(){
    var coin = parseInt(document.getElementById('coin_count').innerHTML)
    var mult = parseInt(document.getElementById('coin_mult').innerHTML)

    document.getElementById('coin_count').innerHTML = coin+1*mult
}
function upg_coin_mult(){
    var lista_precos_mult = [0,200,1250,5000,35000]
    var mult = parseInt(document.getElementById('coin_mult').innerHTML)
    var upg_cost = parseInt(document.getElementById('upg_mult_cost').innerHTML)
    var coin = parseInt(document.getElementById('coin_count').innerHTML)

    if(coin < upg_cost){
        window.alert('moedas insuficientes')
    } else{
        document.getElementById('coin_count').innerHTML = coin - upg_cost

        if(mult < 5){
            document.getElementById('upg_mult_cost').innerHTML = lista_precos_mult[mult]
        } else{
            document.getElementById('upg_mult_cost').innerHTML = upg_cost*10
        }
        document.getElementById('coin_mult').innerHTML = ++mult
    }
}
function upg_func(){
    var lista_funcionarios = ['','Jornalista (+3/s)','Eletricista (+5/s)','Pedreiro (+15/s)','Programador(+40/s)','Coming Soon']
    var lista_precos = [0,75,500,3000,15000]
    var func_count = parseInt(document.getElementById('manager_count').innerHTML)
    var func_cost = parseInt(document.getElementById('upg_func_cost').innerHTML)
    var coin = parseInt(document.getElementById('coin_count').innerHTML)

    if(coin >= func_cost){
        if (func_count >=5){
            document.getElementById('funcionario').innerHTML = lista_funcionarios[5]
            document.getElementById('manager_count').innerHTML = 5
            document.getElementById('coin_count').innerHTML = coin
        } else{
            coin = coin - func_cost
            ++func_count
            document.getElementById('funcionario').innerHTML = lista_funcionarios[func_count]
            document.getElementById('manager_count').innerHTML = func_count
            document.getElementById('upg_func_cost').innerHTML = lista_precos[func_count]
        }
    }else{
        window.alert('moedas insuficientes')
    }
}

function contador_segundo(){
    var coin = parseInt(document.getElementById('coin_count').innerHTML)
    var func = parseInt(document.getElementById('manager_count').innerHTML)

    if(func == 1){
        document.getElementById('coin_count').innerHTML = coin + 1
    }
    if(func == 2){
        document.getElementById('coin_count').innerHTML = coin + 1 + 3
    }
    if(func == 3){
        document.getElementById('coin_count').innerHTML = coin + 1 + 3 + 5
    }
    if(func == 4){
        document.getElementById('coin_count').innerHTML = coin + 1 + 3 + 5 + 15
    }
    if(func == 5){
        document.getElementById('coin_count').innerHTML = coin + 1 + 3 + 5 + 15 + 40
    }
}
setInterval(contador_segundo, 1000);