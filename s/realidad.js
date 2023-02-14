

/* 
let mostraleectura1 =document.getElementById("opcion1");
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
 */

 let text = document.getElementById("realidad");

 let ingre= text.innerHTML;
 
  text.innerHTML="";
 
 let speed=500;
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
 }, 700);
     
 let titulo=document.getElementById("realidad");
 setInterval(() => {
   titulo.style.fontSize="20px"
   
 }, 6000);
 


setTimeout(() => {
document.getElementById("realidad").innerText="!  APLICACION DE LA REALIDAD VIRTUAL ¡";  
}, 19000);

