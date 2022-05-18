// kebap-case (no permitido en JavaScript)
//const last-name = 'Doe';
// snake_case (recomendado en otros lenguajes como Python)
const last_name = 'last_name';
// PascalCase (recomendado en JavaScript para las clases)
const LastName = 'LastName';
// camelCase (recomendado en JavaScript para las variables y funciones)
const lastName = 'lastName';
document.write(LastName);
const person = 'John Doe', carName = 'Volvo', price = 200;
// equivalente a poner const con cada uno
let x; //creando la variable
x= 5; //asignando valor del tipo numero entero y valor 5
x= "texto" // Asignando valor, de tipo String y valor Texto
let variable4;
// undefined
console.log(variable4);
// error

const str2 = 'hola';
// 3
console.log(str2.indexOf('a'));
// 1
console.log(str2.indexOf('ol'));
// -1
console.log(str2.indexOf('r'));
const str3 = 'hola';
// 'lo'
console.log(str3.substring(1, 3));
// 'ola'
console.log(str3.substring(1));

const semana= new Array('lunes','martes','miercoles','jueves','viernes','sabado','domingo')
console.log (semana[2]);
semana.length = 4;
console.log (semana)

// Array dimension
const array9 = new Array('Carmen', 'Juan');
array9[3] = 'Alejandro';
// [ 'Carmen', 'Juan', <1 empty item>, 'Alejandro' ]
console.log(array9);

const date1 = new Date();
// Sun Apr 22 2018 12:37:06 GMT+0200 (Hora de verano romance)
console.log(date1);
