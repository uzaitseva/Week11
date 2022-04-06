const myBotton =document.querySelector('button');
const image =document.querySelector ('img');
const images = ["pic1.jpg", "pic2.webp", "pic3.jpg", "pic4.jpg"];


myBotton.addEventListener('click', changeImage);

function changeImage(){
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex)
    image.src="images/"+ images [randomIndex];
    
}