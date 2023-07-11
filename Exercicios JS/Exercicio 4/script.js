function TurnOnOff(){
var Image = document.getElementById('Image');

if(Image.src.match('apagada.jpg')){

    Image.src ='Images/acesa.jpg';

} else{
   Image.src ='Images/apagada.jpg';


}


}