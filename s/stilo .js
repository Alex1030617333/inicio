



let mostraleectura1 =document.getElementById("navegador");
mostraleectura1.style.display="none";

function btn2() {
    if (mostraleectura1.style.display =="none") {
     
        mostraleectura1.style.display="block" 
        document.getElementById("btn1").textContent="ocultar"

    } else {
        document.getElementById("btn1").textContent="leer mas..."
        mostraleectura1.style.display="none"
        
    }
 } 



 

// este es para ocultar 





/* 

let text = document.getElementById("parafor");

let ingre= text.innerHTML;

 text.innerHTML="";

let speed=400;
 let i =0 ;
 setTimeout(() => {
 function typewriter() {
    if (i< ingre.length ) {
        text.innerHTML +=ingre.charAt(i);
        i++;
       
 setTimeout(typewriter, speed);

     }
 }
 setTimeout(typewriter, speed); 
}, 7000);
    
let titulo=document.getElementById("titulo");
setInterval(() => {
  titulo.style.color="yellow";
  
}, 6000);













let term =document.getElementById("terminos");
let mos = document.getElementById("mostrarterminos");
function terminos() {
  


    if (term.checked) {
        
    document.getElementById("mostrarterminos").innerHTML="Gracias aceptaste los terminos"
    mos.style.background="rgb(174, 174, 94)"

    }else{
        document.getElementById("mostrarterminos").innerHTML= "Debes aceptar los terminos"
        mos.style.background="red"
    }
    setTimeout(() => {
        mos.style.display="none"  
        
    }, 3000);
  
    e.prevenDefault()
  
} */




/* try {
  if (isNaN()) {
    
  } else {
    
  }
} catch (err) {
  console.error()
}
 */



// ``` function captura() {
//     function Nombrescom(nombre) {
//         this.nombre=nombre;
      
//     }
//    let nombre= document.getElementById("nombre").value;
//    document.getElementById("nombre").value="";
  

//    nuevonombrescom = new Nombrescom(nombre)
   
//    agregar()
// }
// let nuevo = [];
// function agregar() {
//     nuevo.push(nuevonombrescom);
//     document.getElementById("tabla").innerHTML += `<tbody>
//     <td>${nuevonombrescom.nombre}</td>
  
//  </tbody>`
//  boton()
// }
  
//   let ter =document.getElementById("terminos");
//   let co = document.getElementById("formulario");
// function boton(e) {

//     if (ter.checked) {
//         document.getElementById("formulario").textContent="terminos aceptados "
//         co.style.background="rgb(174, 174, 94)"
       
        
//     } else {
//         document.getElementById("formulario").textContent="acepte los terminos "
//         co.style.background="red"
   
//     }

//     setTimeout(() => {
//         co.style.display="none"  
//     }, 5000);

//     e.prevenDefault()
// }  
 