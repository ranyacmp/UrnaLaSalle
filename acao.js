// --------------- DADOS ---------------// 
var nomeRepresentante= [];
var nomeViceRepresentante=[];
var numeros= [];
var fotosUrl= [];


// --------------- FECHAR E ABRIR QUESTIONÁRIO ---------------// 
var btnform= document.querySelector("#adccandidato");
var questionario= document.querySelector(".questionario");

function mostrar(){
    questionario.style.display= "block";
}
btnform.addEventListener("click",mostrar);


// --------------- TESTA SE O FORMULÁRIO FOI PREENCHIDO -----------------// 

var btnadicionar= document.querySelector("#adicionar");
var rep= document.querySelectorAll(".input");
var br1= document.querySelectorAll(".br");
var vezes=0; 

function insertAfter(newElement, reference) {
    reference.parentNode.insertBefore(newElement, reference.nextSibling);
}
var n =1;
var p=0;
function teste(){ 

    if(rep[0].value != "" && rep[1].value != "" && rep[2].value != ""){

    // --------------- ADICIONAR UMA DIV DEPOIS DO PREENCHIMENTO DO FORMULÁRIO-----------------// 
    
        // --- inserindo div antes do adicionar aluno --- //
        let sp1= document.createElement('div');
        sp1.className= "info";

        let sp2= document.querySelector("#candidato");
        var divPai= sp2.parentNode;

        (divPai.insertBefore(sp1,sp2)).style.display="block";

        // --------------------------------------------- //

        var divs= document.querySelectorAll(".info");

        // ---inserindo numero digitado na div --- //

        let num1= document.createElement("p");
        num1.classList.add("numero");
        num1.innerText= rep[2].value;
        (divs[n].appendChild(num1)).style.display="block";
        numeros.push(rep[2].value);

         // ---inserindo foto escolhida / tirada na div --- //

         let fotosCand= document.createElement('img');
        fotosCand.classList.add("imagem");
        fotosCand.src= fotosUrl[p];
        (divs[n].appendChild(fotosCand)).style.display="block";
        


        // ---inserindo nome representante digitado na div --- //

        let reps1= document.createElement("p");
        reps1.classList.add("representante");
        reps1.innerText= rep[0].value; 
        (divs[n].appendChild(reps1)).style.display="block";
        nomeRepresentante.push(rep[0].value);

        // ---inserindo nome vice representante digitado na div --- //

        let vicereps1= document.createElement("p");
        vicereps1.classList.add("vice-representante");
        vicereps1.innerText= rep[1].value; 
        (divs[n].appendChild(vicereps1)).style.display="block";
        nomeViceRepresentante.push(rep[1].value);
      
            ocultar();
            vezes=0;
            n++;
            p++;
        

            // console.log(`Representante  : ${nomeRepresentante} `);
            // console.log(`Vice Representante  : ${nomeViceRepresentante} `);
            // console.log(`Numero: ${numeros} `);
            // console.log(`Url foto  : ${fotosUrl} `);
            
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
    // ------------------------------------------------------------------------------- //    
    }

    

}
btnadicionar.addEventListener("click", teste);


// --------------------------------------- FECHAR QUESTIONÁRIO ---------------------------------------  //

var fechar= document.querySelector("#fecharquestionario");
const img = document.createElement('img');

function ocultar(){
    questionario.style.display= "none";
    var alertas= document.querySelectorAll(".alerta");

    for(var i=0; i < alertas.length; i++){
        alertas[i].remove();
    }

    for(var i=0; i < 3; i++){
        br1[i].style.display= "block";
    }

    for(var i=0; i < 3; i++){

        rep[i].value= "";

    }

    document.querySelector(".fotocandidato").style.display='flex';
    img.style.display='none';

}
fechar.addEventListener("click",ocultar);

// -----------------------------------------------------------------------------------------------------  //

var inputFile = document.querySelector("#img1");

inputFile.addEventListener("change", function(e) {
    let inputTarget= e.target; 
    let file = inputTarget.files[0];

    if(file){
        let reader= new FileReader(); 

        reader.addEventListener('load', function(e){

            const readerTarget= e.target; 
            img.src=readerTarget.result;
            img.classList.add('fotocandidato');

            questionario.appendChild(img);

            fotosUrl.push(readerTarget.result);
        });
        reader.readAsDataURL(file);

        document.querySelector(".fotocandidato").style.display='none';

    }else{
        alert("Imagem não selecionada!");
    }
});