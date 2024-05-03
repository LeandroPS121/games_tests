function selClick(i){
    for(var j=1; j<=16; j++){
        document.getElementById('rs-'+j).style.backgroundColor = 'white'
        if(j<14){
            document.getElementById('r'+j).style.display = 'none'
        }
    }
    let id_sel = 'rs-'+i
    let risk = 'r'+i
    let risk_name = document.getElementById('rd-'+i).innerHTML
    document.getElementById(id_sel).style.backgroundColor = 'black'
    document.getElementById('risk-name').innerHTML = risk_name
    document.getElementById(risk).style.display = 'block'
}