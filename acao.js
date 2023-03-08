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

// -----------------------------------------------------------//