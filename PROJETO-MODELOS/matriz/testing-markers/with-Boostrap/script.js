var count = 0;
var marker_list1 = [0,0,0,0,0];
var marker_list2 = [0,0,0,0,0];
var marker_list3 = [0,0,0,0,0];
var marker_list4 = [0,0,0,0,0];
var marker_list5 = [0,0,0,0,0];
var marker_list6 = [0,0,0,0,0];
var marker_list7 = [0,0,0,0,0];
var marker_list8 = [0,0,0,0,0];

var data = {
    'n': ['A','B','C'],
    'x':[1,8,3],
    'y':[1,5,4]
};

function forData()
{
    for (let i = 0; i < data.x.length; i++){
        const marker = document.createElement('button');
        const marker_content = document.createElement('div');

        marker_content.className = 'marker-content';
        marker.className = 'm-2 marker';
        marker.textContent = data.n[i];
        addMarker(data.x[i],data.y[i],marker,marker_content);
    }
}

function addMarker(x,y,marker,marker_content)
{
    var p = 8/5;
    var switchX = Number(Math.floor(x));
    var posX = (x-switchX) * p;

    var switchY = Number(Math.floor(y));
    var posY = y-switchY;
    marker_content.appendChild(marker);

    // marker_content.style.left = `${decimalY*100}px`;
    // marker_content.style.bottom = `${decimalX*100}px`;

    count++;
    console.log("X = " + x + "  | Y = " + y);
    switchY -= 1;
    switch (switchX){
        case 1:

            // function distance(x,y,newMarker)
            // {
            //     reference = document.getElementById(`critical-cell-${intX}-${intY}`);
            //     if (reference.hasChildNodes())
            //         {
            //             reference.appendChild(newMarker);
            //         }
            // }

         /*

            Para calcular o x e y da matriz de processo,
            é necessário converter cada ponto para equivaler
            ao número de divs existentes na matriz. Temos 8
            divs em x e y, enquanto que o valor máximo que
            podemos definir de acordo com o BIA é 5. Apesar
            disso, nosso valor mínimo é 1. Precisamos de uma
            tratativa que compreende o valor máximo sendo 5,
            mas para que não afete o posicionamento correto
            na matriz, não tenha valores menores que 1.

            Sugiro que multipliquemos o valor lido, e quando
            (leitura > 1), então (recebe decimal) && (adiciona 1);

            8/5 = 1,6;

            p (1,6) = cada ponto a ser posicionado na matriz conforme a leitura.

         */

            marker_list1[switchY]++;
            if(marker_list1[switchY]<=9){
                document.getElementById(`critical-cell-${switchX}-${switchY+1}`).appendChild(marker_content);
            }
            break;
        case 2:
            marker_list2[switchY]++;
            if(marker_list2[switchY]<=9){
                document.getElementById(`critical-cell-${switchX}-${switchY+1}`).appendChild(marker_content);
            }
            break;
        case 3:
            marker_list3[switchY]++;
            if(marker_list3[switchY]<=9){
                document.getElementById(`critical-cell-${switchX}-${switchY+1}`).appendChild(marker_content);
            }
            break;
        case 4:
            marker_list4[switchY]++;
            if(marker_list4[switchY]<=9){
                document.getElementById(`critical-cell-${switchX}-${switchY+1}`).appendChild(marker_content);
            }
            break;
        case 5:
            marker_list5[switchY]++;
            if(marker_list1[switchY]<=9){
                document.getElementById(`critical-cell-${switchX}-${switchY+1}`).appendChild(marker_content);
            }
            break;
        case 6:
            marker_list6[switchY]++;
            if(marker_list2[switchY]<=9){
                document.getElementById(`critical-cell-${switchX}-${switchY+1}`).appendChild(marker_content);
            }
            break;
        case 7:
            marker_list7[switchY]++;
            if(marker_list3[switchY]<=9){
                document.getElementById(`critical-cell-${switchX}-${switchY+1}`).appendChild(marker_content);
            }
            break;
        case 8:
            marker_list8[switchY]++;
            if(marker_list4[switchY]<=9){
                document.getElementById(`critical-cell-${switchX}-${switchY+1}`).appendChild(marker_content);
            }
            break;
    }
    marker.setAttribute("data-title", count);
}

function hideTooltip(risk)
{
  risk.removeAttribute("data-bs-toggle");
  risk.removeAttribute("data-bs-title");
}