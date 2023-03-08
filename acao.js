// --------------- FECHAR E ABRIR QUESTIONÁRIO ---------------// 
var adicionar= document.querySelector("#adccandidato");
var questionario= document.querySelector(".questionario");

function mostrar(){
    questionario.style.display= "block";
}
adicionar.addEventListener("click",mostrar);

var fechar= document.querySelector("#fecharquestionario");

function ocultar(){
    questionario.style.display= "none";
}
fechar.addEventListener("click",ocultar);

// ----------------------------------------------------//



// --------------- ADICIONAR CANDIDATO-----------------// 

var adcCandidato= document.querySelector("#adicionar");



function teste(){
    var sp1= document.createElement("div");
    sp1.className ="candidato";

    var sp2= document.querySelector(".candidato");
    var divPai= sp2.parentNode;

    divPai.insertBefore(sp1,sp2);

    questionario.style.display= "none";
}
adcCandidato.addEventListener("click", teste);

// ----------------------------------------------------//