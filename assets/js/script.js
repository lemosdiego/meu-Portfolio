//home
let tituloElemento = document.getElementById("titulo");
let subtituloElement = document.getElementById("subtitulo");
let titulo = "Olá, Me chamo Washington";
let subtitulo =
  "Tenho 29 anos, sou um estudante apaixonado por tecnologia, faço Engenharia de Software e Desenvolvimento Web. Natural do Recife, atualmente resido em São Paulo. Estou determinado a conquistar um estágio na área e transformar minha vida como programador. Quero aproveitar ao máximo cada oportunidade para aprender e crescer, aplicando o que aprendo no mundo real. Vamos juntos nessa jornada de aprendizado e desenvolvimento!";
let tempo = 20;

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

let abrirMenu = document.querySelector(".abrir");
let fecharMenu = document.querySelector(".fecharburguer");
let menuBurguer = document.getElementById("burguer");

function abrirMenuHamburguer() {
  abrirMenu.style.display = "none";
  fecharMenu.style.display = "block";
  menuBurguer.style.display = "flex";
}
function fecharMenuHamburguer() {
  abrirMenu.style.display = "block";
  fecharMenu.style.display = "none";
  menuBurguer.style.display = "none";
}
function fecharMenuBurguerGeral() {
  menuBurguer.style.display = "none";
  abrirMenu.style.display = "block";
  fecharMenu.style.display = "none";
}
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
  let container = document.querySelector(".conteudo");
  container.scrollLeft -= 300;
}

function moverDireita() {
  let buttonEsquerdo = document.querySelector(".esquerda");
  let container = document.querySelector(".conteudo");
  container.scrollLeft += 300;
  buttonEsquerdo.style.display = "block";
}

let esquerda = document.getElementById("mover-esquerda");
let direita = document.getElementById("mover-direita");

esquerda.addEventListener("click", moverEsquerda);
direita.addEventListener("click", moverDireita);
//Cards
//modal0
let titleCard0 = "Previsão do tempo"
let descriptionCard0 = "Busque o clima da sua cidade"
let linkCard0 = "https://github.com/lemosdiego/previsao-do-tempo.git"
//modal1
let titleCard1 = "Fynd my beer";
let descriptionCard1 =
  "Em andamento...Tem como objetivo me fornecer na tela uma lista de cervejarias a partir da localização do usuário.";
let linkCard1 = "https://github.com/lemosdiego/find-my-beer.git";

//modal2
let titleCard2 = "Formulário de Cadastro";
let descriptionCard2 =
  "Em andamento...Tem como objetivo um formulário de cadastro de usuário no banco de dados.";
let linkCard2 = "https://github.com/lemosdiego/Formulario.git";
//modal3
let titleCard3 = "Calculadora";
let descriptionCard3 =
  "Calculadora feita com base nos aprendizados de JavaScript.";
let linkCard3 = "https://github.com/lemosdiego";
//modal4
let titleCard4 = "Lista de tarefas";
let descriptionCard4 =
  "Atividade feita com base nos aprendizados de JavaScript";
("Lista de tarefas básica, feita no inicio do aprendizado tecnologias usadas HTML5 CSS3 JavaScript.");
let linkCard4 = "https://github.com/lemosdiego";
//modal5
let titleCard5 = "Calculadora de IMC";
let descriptionCard5 =
  "Atividade feita com base nos aprendizados de JavaScript.";
let linkCard5 = "https://github.com/lemosdiego/IMC-project.git";
//modal6
let titleCard6 = "Blog Angular";
let descriptionCard6 =
  "Atividade feita com base nos aprendizados do curso de Angular.";
let linkCard6 = "https://github.com/lemosdiego/blog-project.git";
//modal7
let titleCard7 = "Quizz Angular";
let descriptionCard7 =
  "Atividade realizada com base nos estudos do curso de Angular.";
let linkCard7 = "https://github.com/lemosdiego/quizz_angular.git";
//modal8
let titleCard8 = "Portfolio Antigo";
let descriptionCard8 =
  "Projeto responsivo criado utilizando Next.JS e biblioteca Material UI.";
let linkCard8 = "https://github.com/lemosdiego/portifolio2.git";
//-------------------------------------------------------------------------------------------------------------------\\
function abrirInformacoes(title, description, link) {
  let body = document.querySelector("body");
  const aparecer = document.getElementById("janela-modal");
  aparecer.style.display = "flex";
  aparecer.querySelector(".modal-title").innerHTML = title;
  aparecer.querySelector(".modal-description").innerHTML = description;
  aparecer.querySelector(".modal-link").href = link;
  body.style.overflow = "hidden";
}
function fecharInformacao() {
  let body = document.querySelector("body");
  const desaparecer = document.getElementById("janela-modal");
  desaparecer.style.display = "none";
  body.style.overflow = "auto";
}
function fecharInformacaoGeral() {
  let body = document.querySelector("body");
  const desaparecerGeral = document.querySelector(".janela-modal");
  desaparecerGeral.style.display = "none";
  body.style.overflow = "auto";
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
barra6.style.width = "30%";
barra6.style.background = "#087a9f";

let barra7 = document.getElementById("card7");
barra7.style.width = "30%";
barra7.style.background = "#d6002f";

let barra8 = document.getElementById("card8");
barra8.style.width = "40%";
barra8.style.background = "#2f74c0";

let barra9 = document.getElementById("card9");
barra9.style.color = "#3a719c";
barra9.style.width = "30%";
barra9.style.background = "#3a719c";

let barra10 = document.getElementById("card10");
barra10.style.color = "#7377ad";
barra10.style.width = "30%";
barra10.style.background = "#7377ad";

let barra11 = document.getElementById("card11")
barra11.style.color = "#6dd144"
barra11.style.width = "50%"
barra11.style.background = "#6dd144"

//footer
