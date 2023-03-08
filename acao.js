// --------------- FECHAR E ABRIR QUESTIONÁRIO ---------------// 
var btnform= document.querySelector("#adccandidato");
var questionario= document.querySelector(".questionario");

function mostrar(){
    questionario.style.display= "block";
}
btnform.addEventListener("click",mostrar);

var fechar= document.querySelector("#fecharquestionario");

function ocultar(){
    questionario.style.display= "none";
}
fechar.addEventListener("click",ocultar);

// ----------------------------------------------------//

var btnadicionar= document.querySelector("#adicionar");

var rep= document.getElementById("#rep");
var vicrep= document.querySelector("#vicerep");
var numero= document.querySelector("#num");

// function testeForm(){
//     if(rep.value != ''){
//         alert("Enviado");
//     }else{
//         alert("Preencha o campo vazio!");
//     }
// }


// --------------- ADICIONAR CANDIDATO-----------------// 

// var adcCandidato= document.querySelector("#adicionar");

function teste(){
    var sp1= document.createElement("div");
    sp1.className ="candidato";

    var sp2= document.querySelector(".candidato");
    var divPai= sp2.parentNode;

    divPai.insertBefore(sp1,sp2);

    questionario.style.display= "none";

    console.log(rep.value);
    console.log(vicrep.innerText);
    console.log(numero.value);
    
    
}
btnadicionar.addEventListener("click", teste);















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