print("ni")

function enviarFormulario() {

	window.open("index.html"); 
	
	} 
	let porcentajes = document.getElementById("porcentajes")
	let cargado= document.getElementById("cargado")
  let cantidad=0;
  
	let tiempo= setInterval(() => {
	  cantidad +=2
	cargado.style.width= "cantidad"
  
  if (cantidad ==100) {
   
	setInterval(tiempo)
  }
	}, 200);


function audiobienvenida(e) {
	if (audiobienvenida == "si") {

		window.open("realidad.html"); 
		
	}
	
}
	
// var nombre =document.getElementById('nombre');
// var contraseña =document.getElementById('contraseña ');


// function enviarFormulario(){
// 	console.log('enviando formulario...');
// 	var mensajesError=[];

// 	if (nombre.value===null || nombre.value==='') {
// mensajesError.push('Ingresa tu nombre ');

// 	}
// 	if (contraseña.value===null || nombre.value==='') {
// mensajesError.push('Ingresa tu contraseña ');

// }
// error.innerHTML=mensajesError.join(',');

// return false;

// }
