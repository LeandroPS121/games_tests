var count = 1;

var cell_list1 = [0,0,0,0];
var cell_list2 = [0,0,0,0];
var cell_list3 = [0,0,0,0];
var cell_list4 = [0,0,0,0];

// var cell_positionList1 = [50,50,50,50];
// var cell_positionList2 = [50,50,50,50];
// var cell_positionList3 = [50,50,50,50];
// var cell_positionList4 = [50,50,50,50];

function addMarker(){
    const x = document.getElementById('x').value;
    const y = document.getElementById('y').value;

    const decimalX = x - Math.floor(x);
    const decimalY = y - Math.floor(y);

    const integerX = x - decimalX;
    const integerY = y - decimalY;
    
    const marker_place = document.createElement('div');
    const marker = document.createElement('div');
    // const div_container = document.createElement('div');
    
    marker.className = "marker";
    marker.textContent = `R${count}`;
    marker_place.className = "marker-place";
    // div_container.className = "container-div d-flex align-items-center justify-content-around border border-primary";

            //////////////////////////////////////////////////
            // Aplicar na matriz crítica
            // marker_place.style.left = `${decimalX*100}%`;
            // marker_place.style.bottom = `${decimalY*100}%`;

            // marker_place.style.left = "50%";
            // marker_place.style.bottom = "50%";

    // div_container.appendChild(marker_place);
    marker_place.appendChild(marker);

    div_content = verifyRepeatMarker(integerX,integerY,marker_place);

    document.getElementById('risk-cell-'+integerX+'-'+integerY).appendChild(div_content); //Só considera o valor inteiro na hora do append, (a parte com virgula será utilizada na outra matriz)
    count++;
        // addMarkerInCellList(integerX,integerY);
}

function addMarkerInCellList(x,y){
    switch (x){
        case 1:
            cell_list1[y-1]++;
            break;
        case 2:
            cell_list2[y-1]++;
            break;
        case 3:
            cell_list3[y-1]++;
            break;
        case 4:
            cell_list4[y-1]++;
            break;
    }
}
function verifyRepeatMarker(x,y,mk_place){
    switch (x){
        case 1:
            if(cell_list1[y-1] == 0){
                const div_container = document.createElement('div');
                div_container.className = "container-div d-flex align-items-center justify-content-around border border-primary";
                div_container.id = `container_div-${x}-${y}`;
                return div_container.appendChild(mk_place);
            } else{
                return div_container.appendChild(mk_place)
            }
            
        case 2:
            if(cell_list2[y-1] == 0){
                const div_container = document.createElement('div');
                div_container.className = "container-div d-flex align-items-center justify-content-around border border-primary";
                div_container.id = `container_div-${x}-${y}`;
                return div_container.appendChild(mk_place);
            } else{
                return div_container.appendChild(mk_place)
            }
            
        case 3:
            if(cell_list3[y-1] == 0){
                const div_container = document.createElement('div');
                div_container.className = "container-div d-flex align-items-center justify-content-around border border-primary";
                div_container.id = `container_div-${x}-${y}`;
                return div_container.appendChild(mk_place);
            } else{
                return div_container.appendChild(mk_place)
            }
            
        case 4:
            if(cell_list4[y-1] == 0){
                const div_container = document.createElement('div');
                div_container.className = "container-div d-flex align-items-center justify-content-around border border-primary";
                div_container.id = `container_div-${x}-${y}`;
                return div_container.appendChild(mk_place);
            } else{
                return div_container.appendChild(mk_place)
            }
            
    }
}