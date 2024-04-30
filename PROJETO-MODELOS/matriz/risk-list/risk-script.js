function selClick(i){
    for(var j=1; j<=16; j++){
        document.getElementById('rs-'+j).style.backgroundColor = 'white'
    }
    let id_sel = 'rs-'+i
    document.getElementById(id_sel).style.backgroundColor = 'black'
}