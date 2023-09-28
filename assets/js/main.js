let button = document.querySelector('.button')
button.addEventListener('click' , function(){
button.style.color = 'blue';
button.style.width = '300px';
button.style.height = '50px';
button.style.fontSize = '18px';
button.style.background = 'red';
})
let button2 = document.querySelector('.button2')
button2.addEventListener('dblclick', function(){
button2.style.background = 'green';
button2.style.width = '100px';
button2.style.height = '40px';
})
let button3 = document.querySelector('.button3')
button3.addEventListener('contextmenu', function(){
    button3.style.background = 'aqua';
    button3.style.border = '2px';
    button3.style.color = 'white';
    button3.style.fontSize = '2px';
})
let box = document.querySelector('.box')
box.addEventListener('mouseover', function(){
console.log('Наведение курсора')
box.style.background = 'violet'
})
function rand(max){
    return Math.floor(Math.random() * max);
}
let box2 = document.querySelector('.box2')
box2.addEventListener('mousemove', function(){
    console.log(rand(255))
box2.style.background = `rgb(${rand(255)}, ${rand(255)}, ${rand(255)})`
})

