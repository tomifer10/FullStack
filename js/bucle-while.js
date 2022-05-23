let contador1 = 1;
while (contador1 <=10) {
    contador1++;
    console.log (contador1)
}


let contador2 = 1;
do { contador2++;
} while (contador2 <=10);
console.log (contador2)

//Try-catch

// Ejercicio pagina 204
const a= "en un lugaro";
const b= "en algun sitio";
const ultimoa = a.length-1;
const ultimob= b.length-1;

if (a.charAt (0) == b.charAt(0)) {
    document.write ("los dos strings tienen la primera letra igual <br>")
} else { 
    document.write ("la primera letra es diferente")
}

if (a.charAt (0)== b.charAt (0)&& a.charAt (ultimoa)== b.charAt (ultimob)) {
    document.write ("la primera y la ultima letra son iguales")
    
} else {
    document.write ("no son iguales")
}

//Ejercicio 3
let ejercicio3= "abc te sabor a limon abc";
//let existeABC= (ejercicio3.lastIndexOf("abc"))

if ((ejercicio3.indexOf("abc")!= -1) && (ejercicio3.length -3)) {
    console.log ("Existe abc dentro del string")
} else {
    console.log (" existe dentro del string")
}



//ejercicio 7

let ej7= "hola buenas"

console.log (ej7.slice (0,-1))

