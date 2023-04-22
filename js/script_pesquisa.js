import {send} from "./script_base.js";

let lista_conteudo = document.querySelectorAll(".evento");

let barra_pesquisa = document.querySelector("#busca");
barra_pesquisa.addEventListener("search", () => {
    lista_conteudo.forEach(conteudo =>{
        let titulo = conteudo.children[0].children[1].children[0].textContent.toUpperCase();
        if(titulo.includes(barra_pesquisa.value.toUpperCase())){
            conteudo.style.display = "block";
        }else{
            conteudo.style.display = "none";
        }
    });
});

const btns = document.querySelectorAll(".inscrever");

btns.forEach(btn =>{
  btn.addEventListener("click", event => {
    let confirmar = confirm("Deseja se inscrever no evento?")
    if(confirmar){
      alert("Você foi inscrito no evento.")
    }
    else{
      alert("Você não foi inscrito.")
    }
  })
})

document.querySelector("#enviarEmail").addEventListener("click", e =>{
  send(document.querySelector("#email"))
});