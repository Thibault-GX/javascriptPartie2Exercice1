//Définit l'image lorsque la souris survole l'élément
function pictureChange() {
  this.src='img/image1_2.jpg';
}
//Définit l'image lorsque la souris ne survole pas l'élément
function resetPictureChange(element) {
  element.setAttribute('src','img/image1.jpg');
}

document.getElementById('image1').addEventListener('mouseover',pictureChange)
