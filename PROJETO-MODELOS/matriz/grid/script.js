function createDiv(){
    const div = document.createElement('div')
    div.className = "grid-item"
    div.textContent = 'R1'
    
    document.getElementById("grid-cont").appendChild(div)
}