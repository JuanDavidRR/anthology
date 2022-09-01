let isMenuOpen = false

const btnOpen = document.getElementById('btnOpen')
btnOpen.addEventListener('click', ()=>handleBtnOpen())
btnClose.addEventListener('click', ()=>handleBtnOpen())
const menu = document.getElementById('menu-display')

const handleBtnOpen = () =>{
    isMenuOpen = !isMenuOpen
    if(!isMenuOpen){
        menu.classList.remove('active')
    }
    else{
        menu.classList.add('active')
    }
}


const search = document.querySelector('#search')
const searchIcon = document.querySelector('#search #searchIcon')

search.addEventListener('mouseover', ()=> searchIcon.classList.replace('fa-magnifying-glass','fa-xmark'))
search.addEventListener('mouseout', ()=> searchIcon.classList.replace('fa-xmark','fa-magnifying-glass'))
searchIcon.style.transition = '0.4s'

