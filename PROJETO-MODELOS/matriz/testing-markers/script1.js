function createDiv(){
  let number = document.getElementById('text-test').value
  if(number != "" && (number>0 && number<10)){
    const div = document.createElement('div')
    div.className = "grid-item"
    div.textContent = 'R1'
    document.getElementById("risk-cell"+number).appendChild(div)
  }
}