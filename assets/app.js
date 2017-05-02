var captcha= document.getElementById("captcha");
var verificar= document.getElementById("verificar");
var nuevo = document.getElementById("nuevo");
var check = document.getElementById("check");

  captcha.value = nuevoCapt();
  captcha.style.color= color();

check.addEventListener("click", function(){

 if (captcha.value == verificar.value) {
 	alert("Correcto...¡¡¡¡")
 }else{
 	alert("El codigo ingresado es incorrecto")
 }

});

nuevo.addEventListener("click", function(e){
  e.preventDefault();
  captcha.value = nuevoCapt();
  captcha.style.color= color();
})

function nuevoCapt(){
	var num="0123456789";
    var texto="abcdefghijklmnñoqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
	var vacio="";

	for(var i=0;i<4;i++){
		var uno= Math.floor(Math.random() * num.length);
		var dos= Math.floor(Math.random() * texto.length);
    	vacio += num.substr(uno,1)+texto.substr(dos,1);
	}
	return vacio;
}

function color(){
	return 'rgb'+ '('+Math.floor(Math.random() * 255)+ ','+Math.floor(Math.random() * 255)+','+Math.floor(Math.random() * 255)+')';
}
