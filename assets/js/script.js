//home
let tituloElemento = document.getElementById("titulo");
let subtituloElement = document.getElementById("subtitulo");
let titulo = "Olá, Me chamo Washington";
let subtitulo =
  "Tenho 29 anos, sou um estudante apaixonado por tecnologia, faço Engenharia de Software e Desenvolvimento Web. Natural do Recife, atualmente resido em São Paulo. Estou determinado a conquistar um estágio na área e transformar minha vida como programador. Quero aproveitar ao máximo cada oportunidade para aprender e crescer, aplicando o que aprendo no mundo real. Vamos juntos nessa jornada de aprendizado e desenvolvimento!";
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

//perfil
function leiaMais() {
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

//Projetos

function moverEsquerda() {
  let container = document.querySelector(".container-card");
  container.scrollLeft -= 300;
}

function moverDireita() {
  let buttonEsquerdo = document.querySelector(".esquerda");
  let container = document.querySelector(".container-card");
  container.scrollLeft += 300;
  buttonEsquerdo.style.display = "block";
}

let esquerda = document.getElementById("mover-esquerda");
let direita = document.getElementById("mover-direita");

esquerda.addEventListener("click", moverEsquerda);
direita.addEventListener("click", moverDireita);

function aparecerInformacoes() {
  let aparecer = document.querySelector(".informacoes");
  aparecer.style.display = "block";
  console.log("apareceu");
}
function desaparecerInformacoes() {
  let desaparecer = document.querySelector(".informacoes");
  desaparecer.style.display = "none";
}

//ferramentas

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

//footer
