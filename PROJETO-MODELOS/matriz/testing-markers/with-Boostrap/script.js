var count = 1
var doors_line_1 = [];
var doors_line_2 = [];
var doors_line_3 = [];
var doors_line_4 = [];

createDoors()

function createDoors(){
    for(let i=0; i<4; i++){
        doors_line_1.push(0);
        doors_line_2.push(0);
        doors_line_3.push(0);
        doors_line_4.push(0);
    }
}
function addMarkerInList(integerX,integerY){
    switch (integerY) {
        case 1:
            doors_line_1[--integerX]++
            break;
        case 2:
            doors_line_2[--integerX]++
            break;
        case 3:
            doors_line_3[--integerX]++
            break;
        case 4:
            doors_line_4[--integerX]++
            break;
    }
    // positionMarker()
}

// function positionMarker(){
//     var position_left = 0;
//     for (var i = 0; i < 4 ; i++){
//         if (doors_line_1[i] > 0) {
//             position_left += 20;
//             document.getElementById(`marker_place-1-${++i}`).style.left = "20px";
//             alert('ok')
//         }
//     }
// }

function addMarker(){
    const x = document.getElementById('x').value;
    const y = document.getElementById('y').value;

    const decimalX = x - Math.floor(x);
    const decimalY = y - Math.floor(y);

    const integerX = x - decimalX;
    const integerY = y - decimalY;
    
    const marker_place = document.createElement('div');
    const marker = document.createElement('div');
    
    marker.className = "marker";
    marker.textContent = `R${count}`;
    marker_place.className = "marker-place";
    marker_place.id = `marker_place-${integerX}-${integerY}`;

    //////////////////////////////////////////////////
    // Aplicar na matriz crítica
    // marker_place.style.left = `${decimalX*100}%`;
    // marker_place.style.bottom = `${decimalY*100}%`;

    marker_place.style.left = "50%";
    marker_place.style.bottom = "50%";
    marker_place.appendChild(marker);

    addMarkerInList(integerX,integerY);
    document.getElementById('risk-cell-'+integerX+'-'+integerY).appendChild(marker_place); //Só considera o valor inteiro na hora do append, (a parte com virgula será utilizada na outra matriz)
    count++;
}
