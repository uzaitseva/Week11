const myBotton =document.querySelector('button');
const myBox=document.querySelector ('.box');
const colors=["yellow","red", "blue", "green"];


myBotton.addEventListener('click', changeColor);

function changeColor() {
let randomIndex =Math.floor(Math.random() * colors.length);
console.log(randomIndex)
myBox.style.backgroundColor=colors[randomIndex];


}