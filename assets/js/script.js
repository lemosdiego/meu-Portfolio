/*
function abrirMenu(){
    let menu = document.getElementById('menu-navegacao');
    
    if (menu.classList.contains('container-menu-principal')) {
        menu.classList.remove('container-menu-principal') 
    } else{
        menu.classList.add('container-menu-principal')
    }
}
*/


//home
let tituloElemento = document.getElementById("titulo")
let subtituloElement = document.getElementById("subtitulo")
let titulo = "Olá, Me chamo Washington"
let subtitulo = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
let tempo = 50


function textoAnimado(texto, elemento){
   let i = 0
   let intervalo = setInterval(function(){
    elemento.innerHTML += texto.charAt(i)
    i++
    if(i > texto.length) {
        clearInterval(intervalo)
        if (elemento === tituloElemento){
            textoAnimado(subtitulo, subtituloElement)
            subtituloElement.style.display = 'block'
        }
    }
   }, tempo)
}
textoAnimado(titulo, tituloElemento)



//Projetos

function moverEsquerda(){
    let container = document.querySelector('.container-card')
    container.scrollLeft -= 300
}

function moverDireita(){
    let container = document.querySelector('.container-card')
    container.scrollLeft += 300
}

let esquerda = document.getElementById('mover-esquerda')
let direita = document.getElementById('mover-direita')

esquerda.addEventListener('click', moverEsquerda)
direita.addEventListener('click', moverDireita)



//ferramentas
const progresso = ['HTML 80%', 'CSS 70%', 'JavaScript 60%', 'Git 60%', 'Github 60%', 'React 50%', 'Angular 50%', 'TypeScript 40%', 'Python 40%', 'Php 40%']

let barra = document.getElementById('card1')
barra.style.color = '#fff'
barra.style.width = '80%'

let barra1 = document.getElementById('card2')
barra1.style.color = '#fff'
barra1.style.width = '70%'

let barra2 = document.getElementById('card3')
barra2.style.color = '#fff'
barra2.style.width = '60%'

let barra3 = document.getElementById('card4')
barra3.style.color = '#fff'
barra3.style.width = '60%'

let barra4 = document.getElementById('card5')
barra4.style.color = '#fff'
barra4.style.width = '60%'

let barra6 = document.getElementById('card6')
barra6.style.color = '#fff'
barra6.style.width = '50%'

let barra7 = document.getElementById('card7')
barra7.style.color = '#fff'
barra7.style.width = '50%'

let barra8 = document.getElementById('card8')
barra8.style.color = '#fff'
barra8.style.width = '40%'

let barra9 = document.getElementById('card9')
barra9.style.color = '#fff'
barra9.style.width = '40%'

let barra10 = document.getElementById('card10')
barra10.style.color = '#fff'
barra10.style.width = '40%'
