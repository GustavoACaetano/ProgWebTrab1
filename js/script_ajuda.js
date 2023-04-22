import {send} from "./script_base.js";

var perguntas = document.querySelectorAll(".pergunta")
var conteudos = document.querySelectorAll(".conteudo")

// Transformando em Array para utilizar a função indexOf()
perguntas = Array.from(perguntas) 
conteudos = Array.from(conteudos)

perguntas.forEach(pergunta =>{
    pergunta.addEventListener("click", e =>{ // Captura o clique na div da pergunta
        conteudoIndex = perguntas.indexOf(pergunta) + 1; // Armazena o index da resposta da pergunta clicada
        let divConteudo = document.querySelector(`#conteudo${conteudoIndex}`) // Seleciona a div da resposta da pergunta clicada
        conteudos.forEach(cont => { // For each pra passar por cada resposta
            if(cont.id != `conteudo${conteudoIndex}`){ // Confere se a resposta é diferente da resposta que deve ser mostrada 
                cont.style.display = "none"; // Se a resposta não deve ser mostrada, o display é none
            }
        })

        if (divConteudo.style.display == "none") {
            divConteudo.style.display = "block"
            if(conteudoIndex == 1){
                pergunta.style.borderRadius = "10px 10px 1px 1px"
                document.querySelector(".seg").style.borderRadius = "1px 1px 10px 10px"
            }else{
                pergunta.style.borderRadius = "1px 1px 1px 1px"
            }
        } else {
            divConteudo.style.display = "none"
            if(conteudoIndex == 1){
                pergunta.style.borderRadius = "10px 10px 1px 1px"
            }else{
                pergunta.style.borderRadius = "1px 1px 10px 10px"
            }
        }

    })
})

document.querySelector("#enviarEmail").addEventListener("click", e =>{
    send(document.querySelector("#email"))
  });