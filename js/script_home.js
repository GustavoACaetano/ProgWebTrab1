import {send} from "./script_base.js";

let slideIndex = 1;
mostraSlides(slideIndex);

// Controle de passar e voltar slides
function passaSlides(n) {
  mostraSlides(slideIndex += n);
}

// Thumbnail image controls
function slideAtual(n) {
  mostraSlides(slideIndex = n);
}

function mostraSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


const mySlides = document.querySelectorAll(".mySlides");

mySlides.forEach(slide =>{
  slide.addEventListener("mouseover", event =>{
      slide.children[2].style.display = "block";
      slide.children[2].style.opacity = "1";
  });

  slide.addEventListener("mouseout", event => {
    slide.children[2].style.display = "none";
  });
})

const btns = document.querySelectorAll(".inscrever");

btns.forEach(btn =>{
  btn.addEventListener("click", event => {
    let confirmar = confirm("Deseja se inscrever no evento?")
    // Mensagem, função a ser executada no retorno, título e os "Labels"

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

