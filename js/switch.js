const a = 4;
switch (a) {
    case 1:
        console.log('El valor de a es 1');
    break;
    case 2:
        console.log('El valor de a es 2');
    break;
    case 3,4:
        console.log('El valor de a es 3 ó 4');
    break;
    default:
        console.log('El valor de a es desconocido');
}
   //FOR
for (let i = 0; i < 5; i++) {
    console.log(i);
    }

   //ejercicio 8
for (let i = 1; i<=50;i++){
    console.log (i);
}  

const array = ['En', 'un', 'lugar', 'de', 'la', 'mancha'];
const len = array.length; //Valor 6
// recorre un array mediante un for clásico
for (let i = 0; i < len; i++) {
// En, un, lugar, de, la, mancha (en distintas líneas)
console.log(array[i]);
}

// En es igual a array [0]
// un es igual a array [1]
//etc

//Ejercicio 9 tabla multiplicar
for (let i = 0; i<11; i++ ) {
    //Table del 5x1 al 5x10
 document.write ("5x"+ i + "=" + 5*i + "<br>")
}

//Ejercicio 10
let palabra= prompt ( "Escriba aqui","Escriba su nombre")
for (let i=0; i<11; i++) {
    document.write (palabra + "<br>")
}

//Ejercicio 11
let numero= prompt ("Escriba aqui", "Numero del 1 al 10")
for (let i=numero; i>=0; i--) {
  document.write (i+",") 
 } if (i==0) {
     document.write (i);
 }      
  

