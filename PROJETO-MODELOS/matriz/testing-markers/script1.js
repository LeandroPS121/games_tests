function createParagraph(){
  let text = document.getElementById('text-test').value
  if(text != "" && (text>0 && text<10)){
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.style.position = 'relative'
    div.style.width = '10px'
    div.style.height = '10px'
    div.style.borderRadius = '50px'
    div.style.backgroundColor = 'blue'
    document.getElementById("risk-cell"+text).appendChild(div)
  }
}