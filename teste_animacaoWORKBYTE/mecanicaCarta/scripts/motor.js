$(document).ready(function () {
    //JOGO DE CARTAS, COM ESCOLHAS. CADA ESCOLHE ALTERA O STATUS DO JOGADOR


    //VARIÁVEIS GLOBAIS
    const TIPO_EVENTO = [evento_bonus, evento_contratacao, evento_debuff,prologo];
    const STATUSES = {
        "1": 50,
        "2": 100,
        "3": 50,
        "4": 50
    }
    var last_btn_clicked = 0;
    var player_dias = 0;
    var player_horas = 0;
    var accept = 0;
    var decline = 0;

    //INICIA O CÓDIGO
    function mainCode() {
        $("#texto-carta").text("");
        atualizarStatus();
        atualizarScore();

      atribuirInformacoesEvento()

        atribuirInformacoesEvento(sortearEvento());
    }

    //ATUALIZA SCORE
    function atualizarScore() {
        player_horas += 6;
        if (player_horas > 18) {
            player_horas = 6;
            player_dias++;
        }
        $("#pontuacao-conteudo").html(
            "<label>DIAS: <label>" + player_dias + "</label> / HORAS: <label>"
            + player_horas + "</label></label>"
        );

    }

    //ATUALIZA STATUS
    function atualizarStatus() {
        let i = 1;

        if (last_btn_clicked === "btn-1") {
            STATUSES[accept[0]] += 20;
            STATUSES[accept[1]] -= 20;
        } else if(last_btn_clicked === "btn-2"){
            STATUSES[decline[0]] += 20;
            STATUSES[decline[1]] -= 20;
        }

        for (let atr in STATUSES){
            if (STATUSES[atr] <= 0) {
                // alert("tu perdeu");
                location.reload();
            }else if (STATUSES[atr] > 100) {
                STATUSES[atr] = 100;
            }
            console.log('atr: '+atr)
            $(`#st-${i}`).css({
                "background": `radial-gradient(circle, rgba(179, 0, 183, 1) ${STATUSES[atr]}%, gray 0%)`,
                "backgroundSize": "1% 200%"
            });
            i++;
        }
        console.log("AA " + STATUSES[1]);
        console.log("BB " + STATUSES[2]);
        console.log("CC " + STATUSES[3]);
        console.log("DD " + STATUSES[4]);
        accept = 0;
        decline = 0;
    }

    //SORTEIA UM EVENTO PARA EXIBIR NA TELA
    function sortearEvento() {
        tipo = 0;
        let evento_escolhido = TIPO_EVENTO[tipo = [Math.floor(Math.random() * 3)]]; //ex: evento_bonus
        return evento_escolhido[Math.floor(Math.random() * evento_escolhido.length)]; //ex: b1
    }

    //ATRIBUI INFORMAÇÕES NA TELA COM BASE NO SORTEIO DE EVENTO
    function atribuirInformacoesEvento(n) {
        limparEstilos();
        accept = n.btn_accept;
        decline = n.btn_decline;
        console.log(accept)
        $("#btn-1").hover(
            function() {
              $("#st-1 , #st-2 , #st-3 , #st-4").css("opacity", "0.4");
              $("#st-" + accept[0] + ", #st-" + accept[1]).css("opacity", "1");
              $("#st-" + accept[0] + ", #st-" + accept[1]).css("border", "2px solid aqua");
              $("#st-" + accept[0] + ", #st-" + accept[1]).stop(true, true).animate({
                bottom: "5px"
              }, 200); // 2000ms = 2s
            },
            function() {
              $("#st-1 , #st-2 , #st-3 , #st-4").css("opacity", "1");
              $("#st-" + accept[0] + ", #st-" + accept[1]).css("border", "none");
              $("#st-" + accept[0] + ", #st-" + accept[1]).stop(true, true).animate({
                bottom: "0px"
              }, 200); // 2000ms = 2s
            }
          );
        console.log(decline)
        $("#btn-2").hover(
            function() {
              $("#st-1 , #st-2 , #st-3 , #st-4").css("opacity", "0.4");
              $("#st-" + decline[0] + ", #st-" + decline[1]).css("opacity", "1");
              $("#st-" + decline[0] + ", #st-" + decline[1]).css("border", "2px solid aqua");
              $("#st-" + decline[0] + ", #st-" + decline[1]).stop(true, true).animate({
                bottom: "5px"
              }, 200); // 2000ms = 2s
            },
            function() {
              $("#st-1 , #st-2 , #st-3 , #st-4").css("opacity", "1");
              $("#st-" + decline[0] + ", #st-" + decline[1]).css("border", "none");
              $("#st-" + decline[0] + ", #st-" + decline[1]).stop(true, true).animate({
                bottom: "0px"
              }, 200); // 2000ms = 2s
            }
          );
        $("#descricao-conteudo").text(n.descricao);
        $("#btn-1").hover(
            function () {
                $("#descricao-conteudo").text(n.btn_accept_text);
                // code to run on mouseover
            },
            function () {
                $("#descricao-conteudo").text("");
                // code to run on mouseout
            }
        );
        $("#btn-2").hover(
            function () {
                $("#descricao-conteudo").text(n.btn_decline_text);
                // code to run on mouseover
            },
            function () {
                $("#descricao-conteudo").text("");
                // code to run on mouseout
            }
        );

        if (tipo == 1) {
            gerarFuncionario();
        }
            
    };

    // function gerarFuncionario(){

    //     if (tipo == 1) {
    //         mOrF = "";
    //         random = [Math.floor(Math.random() * 2) + 1];
    //         if (random == 1) {
    //             mOrF = "f";
    //         } else {
    //             mOrF = "m";
    //         }

    //         h = [Math.floor(Math.random() * 4) + 1];
    //         b = [Math.floor(Math.random() * 4) + 1];
    //         c = [Math.floor(Math.random() * 4) + 1];
    //         vh = [Math.floor(Math.random() * 2) + 1];
    //         vb = [Math.floor(Math.random() * 2) + 1];
        
    //         $("#c_body").html("")
       

    //         console.log("vb:" + vb)

    //         $("#c_body").css({
    //             "background-image": "url('../resources/images/functionary/body/b" + mOrF + b + 'v' + vb + ".png')",
    //             "background-repeat": "no-repeat"

    //         });

    //         $("#c_hair").css({
    //             "background-image": "url('../resources/images/functionary/hair/h" + mOrF + h + 'v' + vh + ".png')",
    //             "background-repeat": "no-repeat"
    //           });
              
    //           fetch('../resources/images/functionary/hair/back/')
    //             .then(response => {
    //               if (response.ok) {
    //                 return response.text();
    //               } else {
    //                 throw new Error('Failed to retrieve file list');
    //               }
    //             })
    //             .then(fileList => {
    //               const fileNamesString = fileList.split('\n').filter(Boolean).join(',');
    //               const fileExists = fileNamesString.includes('hb' + mOrF + h + 'v' + vh + '.png');
              
    //               $("#c_hair_back").css({
    //                 "background-image": fileExists ? "url('../resources/images/functionary/hair/back/hb" + mOrF + h + 'v' + vh + ".png')" : "",
    //                 "background-repeat": "no-repeat",
    //                 "top": vh == 1 ? "29%" : "24%"
    //               });
    //             })
    //             .catch(error => {
    //               console.error(error);
    //             });
              
              
    //           $("#c_clothes").css({
    //             "background-image": "url('../resources/images/functionary/clothes/c" + mOrF + c + 'v' + vb + ".png')",
    //             "background-repeat": "no-repeat"
    //           });
              
              
    //           if (mOrF == "m") {
    //             $("#c_clothes").css({
    //               "background-image": "url('../resources/images/functionary/clothes/c" + mOrF + c + 'v' + vb + ".png')",
    //               "background-repeat": "no-repeat",
    //               "left": "18.2%",
    //               "background-position-x": "center",
    //               "background-position-y": "bottom",
    //               "background-size": vb == 1 ? "275px" : "",
    //               "bottom": vb == 1 ? "0.1%" : "0.0%"
    //             });
              
    //             $("#c_body").css({
    //               "background-image": "url('../resources/images/functionary/body/b" + mOrF + b + 'v' + vb + ".png')",
    //               "background-repeat": "no-repeat",
    //               "background-position-y": "1px",
    //               "background-size": vb == 1 ? "255px" : "",
    //               "bottom": vb == 1 ? "-1.1%" : "2.8%"
    //             });
    //           } else {
    //             $("#c_hair").css({
    //               "top": vb == 1 ? "14.95%" : "",
    //               "left": vb == 1 ? "27.50%" : ""
    //             });
              
    //             $("#c_clothes").css({
    //               "background-image": "url('../resources/images/functionary/clothes/c" + mOrF + c + 'v' + vb + ".png')",
    //               "background-repeat": "no-repeat",
    //               "bottom": vb == 1 ? "3.25%" : "0%",
    //               "left": "18.45%",
    //               "background-position-x": "center",
    //               "background-position-y": "bottom",
    //               "background-size": vb == 1 ? "92px" : ""
    //             });
    //           }

    //     }
    // }

    // function limparEstilos() {
    //   $("#c_body").css({
    //     "background-image": "",
    //     "background-repeat": "",
    //     "background-position-y": "",
    //     "background-size": "",
    //     "bottom": ""
    //   });
    
    //   $("#c_hair").css({
    //     "background-image": "",
    //     "background-repeat": "",
    //     "top": "",
    //     "left": ""
    //   });
    
    //   $("#c_hair_back").css({
    //     "background-image": "",
    //     "background-repeat": "",
    //     "top": ""
    //   });
    
    //   $("#c_clothes").css({
    //     "background-image": "",
    //     "background-repeat": "",
    //     "left": "",
    //     "background-position-x": "",
    //     "background-position-y": "",
    //     "background-size": "",
    //     "bottom": ""
    //   });
    // }

    //INICIO DO CÓDIGO
    $("#btn-1, #btn-2").click(function (event) {
        last_btn_clicked = event.target.id;
        $("#st-1 , #st-2 , #st-3 , #st-4").css("opacity", "1");
        $("#st-1 , #st-2 , #st-3 , #st-4").css("border", "none");
        $("#st-" + accept[0] + ", #st-" + accept[1]).animate({
            bottom: "0px"
          }, 200); // 2000ms = 2s
          $("#st-" + decline[0] + ", #st-" + decline[1]).animate({
            bottom: "0px"
          }, 200); // 2000ms = 2s
        mainCode();
    });

    mainCode();
});





// // Eventos Gerais
// // Variáveis Globais
// const TIPO_EVENTO = [evento_bonus, evento_contratacao, evento_debuff];
// const STATUSES = {
//     "1": 50,
//     "2": 100,
//     "3": 50,
//     "4": 50
// }
// var tipo = -1;
// var accept = 0;
// var decline = 0;
// var numEvento = -1;
// var diasJogado = 0;
// var horasJogado = 6;
// // ~~~~~~~~~~~~~~~~

// ///Funções
// function gerarEvento(btn_clicado) {
//     let eventoEscolhido = TIPO_EVENTO[Math.floor(Math.random() * TIPO_EVENTO.length)];
//     let eventoAtributos = eventoEscolhido;
//     alert(eventoAtributos.descricao);
//     let numEvento = Math.floor(Math.random() * 2);
//     document.getElementById('descricao-conteudo').textContent = eventoEscolhido.descricao;
//     if (btn_clicado == 1) {
//         STATUSES[eventoEscolhido.btn_accept[0]] += 20;
//         STATUSES[eventoEscolhido.btn_accept[1]] -= 20;
//     } else {
//         STATUSES[eventoEscolhido.btn_decline[0]] += 20;
//         STATUSES[eventoEscolhido.btn_decline[1]] -= 20;
//     }
//     atualizarStatus();
// }
// function atualizarPontuacao() {
//     if(horasJogado >18){
//         diasJogado+=1;
//         horasJogado =6;
//     }
//     document.getElementById('pontuacao-conteudo').textContent = `Dias: ${diasJogado} | Horas: ${horasJogado}`
//     horasJogado+=6;
// }
// function atualizarStatus() {
//     for (let i = 1; i <= 4; i++) {
//         const percentage = STATUSES[i];
//         document.getElementById(`st-${i}`).style.background = `radial-gradient(circle, rgba(179, 0, 183, 1) ${percentage}%, rgb(184, 184, 184) 0%)`;
//         document.getElementById(`st-${i}`).style.backgroundSize = `1% 200%`;
//     }
// }

// // ~~~~~~~~~~~~~~~~
// // Dinâmica da Carta
// // Variáveis Globais

// // Contador que servirá para dar Ids novos às cartas
// var contador = 0;

// // Palavras testes para frente da carta
// var palavras = ['banana','abacate','uva','paralelepipedo','mandioca','macaxeira','aipim'];

// // Cores testes para frente da carta
// var coresFundo = ['red','yellow','purple','orange','blue'];

// // Descrições testes para verso da carta
// var descricoes = ['Predo','Fernando','Leandro','Paluski','Ruan'];

// // Define por padrao que a carta está virada para frente
// var frenteOuVerso = true;

// // Armazena os elementos
// var frenteCarta = document.getElementById('frente-carta');
// var passarCarta1 = document.getElementById('btn-1');
// var passarCarta2 = document.getElementById('btn-2');

// // Ativa a mecanica de passar a carta para baixo
// function gerarNovaCarta() {
//     const cartaAtual = document.getElementById(`carta${contador-1}`);
//     cartaAtual.style.zIndex = 1;
    
//     passarCarta1.disabled = true;
//     passarCarta2.disabled = true;
    
//     frenteCarta.classList.add('sobe');
//     frenteCarta.addEventListener('animationend', function(){
//         frenteCarta.classList.remove('sobe');
//         passarCarta1.disabled = false;
//         passarCarta2.disabled = false;
//     })
//     setTimeout(function() {
//         cartaAtual.classList.add('final');
//     }, 0);
//     cartaAtual.addEventListener("animationend", function() { 
//         cartaAtual.remove();
//     })
//     gerarCarta();
// }

// // Gera uma nova carta puxando informações para frente e verso
// function gerarCarta() {
//     atualizarPontuacao();
//     let novaCarta = document.createElement('div');
//     let cabecaBoneco = document.createElement('div');
//     let corpoBoneco = document.createElement('div');
//     let roupaBoneco = document.createElement('div');
//     cabecaBoneco.classList.add('frente-carta-cabeca-boneco')
//     roupaBoneco.classList.add('frente-carta-roupa-boneco')
//     corpoBoneco.classList.add('frente-carta-corpo-boneco')
//     if (frenteOuVerso) {
//         let versoCarta = document.getElementById('verso-carta');
//         versoCarta.textContent = descricoes[Math.floor(Math.random()*descricoes.length)]
//     }

//     // Adiciona informações na nova carta
//     novaCarta.classList.add("carta");
//     novaCarta.style.zIndex = 0;
//     novaCarta.textContent = palavras[Math.floor(Math.random()*6)];
//     // novaCarta.style.background = coresFundo[Math.floor(Math.random()*5)];
//     novaCarta.id = `carta${contador}`;
    
//     contador++;

//     novaCarta.appendChild(cabecaBoneco)
//     novaCarta.appendChild(roupaBoneco)
//     novaCarta.appendChild(corpoBoneco)
//     frenteCarta.append(novaCarta);
// }

// // Manda a carta do topo para o final do baralho
// function virarCarta() {
//     var carta = document.getElementById('carta');
//     carta.classList.toggle('flip');
//     if (frenteOuVerso) {
//         frenteOuVerso = false;
//         passarCarta1.disabled = true;
//         passarCarta2.disabled = true;
//     } else{
//         frenteOuVerso = true;
//         passarCarta1.disabled = false;
//         passarCarta2.disabled = false;
//     }
// }

// // Gera uma carta ao carregar a página
// window.onload = function() {
//     gerarCarta();
// };