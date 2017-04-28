var cont1= document.getElementById("Enviar");
var pasw1= document.getElementById("pasw1");
var pasw2= document.getElementById("psw2");

cont1.addEventListener("click",function(){
	if (pasw1.value==pasw2.value){
		alert("Correcto");
	}else{
		alert("Las contraseñas deben de ser iguales");
	}
})
