const button = document.querySelector('.btn-random')

button.addEventListener('click',changeColor)

function changeColor(){
    const background = document.querySelector('.background')
    const arrayColor = ['red','blue','green','yellow','pink','gray']
    let random = arrayColor[randomColor(arrayColor)]
    background.style.backgroundColor= random
}

function randomColor(array){
    return Math.floor(Math.random()*array.length)
}