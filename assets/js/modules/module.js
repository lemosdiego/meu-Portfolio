
export function coresFerramentas(){
    let barra = document.getElementById("card1");
barra.style.width = "80%";
barra.style.background = "#dd4b25";

let barra1 = document.getElementById("card2");
barra1.style.width = "70%";
barra1.style.background = "#254bdd";

let barra2 = document.getElementById("card3");
barra2.style.width = "60%";
barra2.style.background = "#efd81d";

let barra3 = document.getElementById("card4");
barra3.style.width = "60%";
barra3.style.background = "#e84d31";

let barra4 = document.getElementById("card5");
barra4.style.width = "60%";
barra4.style.background = "#842791";

let barra6 = document.getElementById("card6");
barra6.style.width = "50%";
barra6.style.background = "#087a9f";

let barra7 = document.getElementById("card7");
barra7.style.width = "50%";
barra7.style.background = "#d6002f";

let barra8 = document.getElementById("card8");
barra8.style.width = "50%";
barra8.style.background = "#2f74c0";

let barra9 = document.getElementById("card9");
barra9.style.color = "#3a719c";
barra9.style.width = "40%";
barra9.style.background = "#3a719c";

let barra10 = document.getElementById("card10");
barra10.style.color = "#7377ad";
barra10.style.width = "40%";
barra10.style.background = "#7377ad";
}

export function header(){
    let tituloElemento = document.getElementById("titulo");
let subtituloElement = document.getElementById("subtitulo");
let titulo = "Olá, Me chamo Washington";
let subtitulo =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
let tempo = 50;

function textoAnimado(texto, elemento) {
  let i = 0;
  let intervalo = setInterval(function () {
    elemento.innerHTML += texto.charAt(i);
    i++;
    if (i > texto.length) {
      clearInterval(intervalo);
      if (elemento === tituloElemento) {
        textoAnimado(subtitulo, subtituloElement);
        subtituloElement.style.display = "block";
      }
    }
  }, tempo);
}
textoAnimado(titulo, tituloElemento);
}

export   function leiaMais() {
    let reticencias = document.getElementById("pontos");
    let texto = document.getElementById("mais");
    let botaoLeiaMais = document.getElementById("leiamais");
    let imagem = document.querySelector(".perfil-img");
  
    if (reticencias.style.display === "none") {
      reticencias.style.display = "inline";
      texto.style.display = "none";
      botaoLeiaMais.innerHTML = "Leia Mais";
      imagem.style.display = "block";
    } else {
      reticencias.style.display = "none";
      texto.style.display = "inline";
      botaoLeiaMais.innerHTML = "Leia Menos";
      imagem.style.display = "none";
    }
  }

