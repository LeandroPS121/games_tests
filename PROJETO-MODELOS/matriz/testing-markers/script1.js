function addDiv(){
  var x = document.getElementById('x').value;
  var y = document.getElementById('y').value;
  var intPartX = Math.floor(x);
  var intPartY = Math.floor(y);
  var decPartX = x - intPartX;
  var decPartY = y - intPartY;

  if((x>=1 && x<=3)&&(y>=1 && y<=3)){
    const div = document.createElement('div');
    div.className="risk-markers";
    div.style.left = `${decPartX*94}%`;
    div.style.bottom = `${decPartY*94}%`;
    alert((decPartX*100)+'%');
    div.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="8"/>
    </svg>`;
    document.getElementById('risk-cell-'+intPartX+'-'+intPartY).appendChild(div);
  }
}