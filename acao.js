// --------------- FECHAR E ABRIR QUESTIONÁRIO ---------------// 
var btnform= document.querySelector("#adccandidato");
var questionario= document.querySelector(".questionario");

function mostrar(){
    questionario.style.display= "block";
}
btnform.addEventListener("click",mostrar);


// --------------- TESTA SE P FORMULÁRIO FOI PREENCHIDO -----------------// 

var btnadicionar= document.querySelector("#adicionar");
var rep= document.querySelectorAll(".input");
var br1= document.querySelectorAll(".br");
var vezes=0; 

function teste(){ 

    if(rep[0].value != "" && rep[1].value != "" && rep[2].value != ""){

    // --------------- ADICIONAR UMA DIV DEPOIS DO PREENCHIMENTO DO FORMULÁRIO-----------------// 
    
        let sp1= document.createElement('div');
        sp1.className= "info";

        let sp2= document.querySelector("#candidato");
        var divPai= sp2.parentNode;

        (divPai.insertBefore(sp1,sp2)).style.display="block";
    
        
        questionario.style.display= "none";

            for(var i=0; i < 3; i++){

                br1[i].style.display= "block";

            }

            for(var i=0; i < 3; i++){

                rep[i].value= "";

            }
        
            ocultar();
            vezes=0;
            
    }else if(vezes == 0){

    // --------------- ADICIONAR UMA MENSAGEM PARA PREENCHER OS CAMPOS-----------------//
        
        var titulo= document.querySelectorAll(".titulo");
        

            if(rep[0].value == ""){

                let t1= document.createElement('p');
                t1.className="alerta";
                t1.innerText= "Inserir nome do representante"

                var divPai2= titulo[1].parentNode;

                divPai2.insertBefore(t1,titulo[1]);

                br1[0].style.display= "none";

            }

        
            if(rep[1].value == ""){

                let t3= document.createElement('p');
                t3.className="alerta";
                t3.innerText= "Inserir nome do vice-representante"

                var divPai3= titulo[2].parentNode;

                divPai3.insertBefore(t3,titulo[2]);

                br1[1].style.display= "none";   
            
            }

            if(rep[2].value == ""){

                let t4= document.createElement('p');
                t4.className="alerta";
                t4.innerText= "Inserir número"

                var titulo2= document.querySelector("#adicionar");
                var divPai4= titulo2.parentNode;

                divPai4.insertBefore(t4,titulo2);

                br1[2].style.display= "none";
                
            }
            
            vezes++; 
    }

    

}
btnadicionar.addEventListener("click", teste);


// --------------------------------------- FECHAR QUESTIONÁRIO ---------------------------------------  //

var fechar= document.querySelector("#fecharquestionario");

function ocultar(){
    questionario.style.display= "none";
    var alertas= document.querySelectorAll(".alerta");

    for(var i=0; i < alertas.length; i++){
        alertas[i].remove();
    }

    for(var i=0; i < 3; i++){
        br1[i].style.display= "block";
    }

}
fechar.addEventListener("click",ocultar);

// function removerAlertas(){

//     for(var i=0; i < alertas.length; i++){
//         alertas[i].remove();
//     }

// }
// btnadicionar.addEventListener("click", removerAlertas);














// else{

//     var alerta1= document.createElement("p");
//     alerta1.className= "alerta";
    
//     if(rep.value == ''){
//         var al2=document.querySelector('.titulo');
//         alerta1.innerText= "Inserir nome do representante"
//         var divPai1 = al2.parentNode; 
//         divPai1.insertBefore(alerta1, al2);
//     }
// }
// ----------------------------------------------------//
