// Menu mobile  
let btnmenu = document.getElementById('abrir_menu')
let abrirmenu = document.getElementById('menu_mobile')
let overlay = document.getElementById('overflow_menu')

btnmenu.addEventListener('click', ()=>{
    abrirmenu.classList.add('abrir_menujs')
}) 

abrirmenu.addEventListener('click', ()=>{
    abrirmenu.classList.remove('abrir_menujs')
}) 

overlay.addEventListener('click', ()=>{
    abrirmenu.classList.remove('abrir_menujs')
}) 

// rolagem menu

window.addEventListener("scroll", function(){
    let header = document.getElementById('inicio')
    header.classList.toggle('rolagem', window.scrollY > 0)

})

// Modo noturno

let trilho = document.getElementById('trilho')
let indicador1= document.getElementById('indicador1')
let indicador2= document.getElementById('indicador2')
let body = document.querySelector('body')
let header = document.getElementById('inicio')

trilho.addEventListener('click' , ()=> {
    trilho.classList.toggle('light')
    indicador1.classList.toggle('light')
    indicador2.classList.toggle('light')
    body.classList.toggle('light')
    header.classList.toggle('light')
})



