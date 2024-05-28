var count = 0;
var marker_list1 = [0,0,0,0,0];
var marker_list2 = [0,0,0,0,0];
var marker_list3 = [0,0,0,0,0];
var marker_list4 = [0,0,0,0,0];
var marker_list5 = [0,0,0,0,0];
var marker_list6 = [0,0,0,0,0];
var marker_list7 = [0,0,0,0,0];
var marker_list8 = [0,0,0,0,0];

// var data = {
//     'n': ['A','B','C'],
//     'x':[1,2,3],
//     'y':[1,2,3]
// };

//var dataCpm={{cpm|safe}};
//var dataRm={{rm|safe}};
//var dataRit={{rit|safe}};

function forData()
{
    for (let i = 0; i < data.n.length; i++){
        const marker = document.createElement('button');
        marker.className = 'm-2 marker';
        marker.textContent = data.n[i];
        addMarker(data.x[i],data.y[i],marker);
    }
}

function addMarkerInList(x,y)
{
    var intX = Math.floor(x);
    var decimalX = x-intX;

    var intY = Math.floor(y);
    var decimalY = y-intY;
    switch (x) {
        case 1:
            marker_list1[y] += 1;
        break;
        case 2:
            marker_list2[y] += 1;
        break;
        case 3:
            marker_list3[y] += 1;
        break;
        case 4:
            marker_list4[y] += 1;
        break;
        case 5:
            marker_list5[y] += 1;
        break;
        case 6:
            marker_list6[y] += 1;
        break;
        case 7:
            marker_list7[y] += 1;
        break;
        case 8:
            marker_list8[y] += 1;
        break;
    }
}

function addMarker(x,y,marker)
{
    count++;
    console.log("X = " + x + "  | Y = " + y);
    y -= 1;
    switch (x){
        case 1:
            marker_list1[y]++;
            if(marker_list1[y]<=9){
                document.getElementById(`risk-cell-${x}-${y+1}`).appendChild(marker);
            }
            break;
        case 2:
            marker_list2[y]++;
            if(marker_list2[y]<=9){
                document.getElementById(`risk-cell-${x}-${y+1}`).appendChild(marker);
            }
            break;
        case 3:
            marker_list3[y]++;
            if(marker_list3[y]<=9){
                document.getElementById(`risk-cell-${x}-${y+1}`).appendChild(marker);
            }
            break;
        case 4:
            marker_list4[y]++;
            if(marker_list4[y]<=9){
                document.getElementById(`risk-cell-${x}-${y+1}`).appendChild(marker);
            }
            break;
    }
    addMarkerInList(x,y);
    marker.setAttribute("data-title", count);
}

function hideTooltip(risk)
{
  risk.removeAttribute("data-bs-toggle");
  risk.removeAttribute("data-bs-title");
}