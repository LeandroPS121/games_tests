var marker_list1 = [0,0,0,0];
var marker_list2 = [0,0,0,0];
var marker_list3 = [0,0,0,0];
var marker_list4 = [0,0,0,0];

function addMarker()
{
    document.getElementById('espa').setAttribute("data-bs-toggle","tooltip");
    document.getElementById('espa').setAttribute("data-bs-title","Default tooltip");

    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;

    const marker = document.createElement('button');
    marker.className = 'm-2 marker';
    //acessar o mtx/rm para pegar os riscos
    marker.textContent = 'ok';
    marker.title = 'Teste';
    addMarkerInList(Number(x),Number(y),marker);
}

function addMarkerInList(x,y,marker){
    switch (x){
        case 1:
            marker_list1[y-1]++;
            if(marker_list1[y-1]<=9){
                document.getElementById(`risk-cell-${x}-${y}`).appendChild(marker);
            }
            break;
        case 2:
            marker_list2[y-1]++;
            if(marker_list2[y-1]<=9){
                document.getElementById(`risk-cell-${x}-${y}`).appendChild(marker);
            }
            break;
        case 3:
            marker_list3[y-1]++;
            if(marker_list3[y-1]<=9){
                document.getElementById(`risk-cell-${x}-${y}`).appendChild(marker);
            }
            break;
        case 4:
            marker_list4[y-1]++;
            if(marker_list4[y-1]<=9){
                document.getElementById(`risk-cell-${x}-${y}`).appendChild(marker);
            }
            break;
    }
}

function hideTooltip(risk)
{
  risk.removeAttribute("data-bs-toggle");
  risk.removeAttribute("data-bs-title");
}