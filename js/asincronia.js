
//setTimeout y setInterval son las funciones asíncronas de JavaScript más simples.

setTimeout(() => {
    console.log('Esta instrucción se ejecuta después de 5 segundos');
}, 5000);

    setInterval(() => {
    console.log('Esta instrucción se ejecuta cada 5 segundos');
}, 5000);

//Estas funciones setTimeout y setInterval pueden también anidarse.

setTimeout(() => {
    console.log('Hola');
    setTimeout(() => {
        console.log('Adiós');
        }, 500);
    }, 1000)
    setTimeout(() => {
        console.log('Buenas tardes');
    }, 100)
         console.log('Buenos días');

//Ejercicio 5 adaptar las cinco funciones del Ejercicio 4 para que las cuatro funciones
// invoquen el callback una vez han transcurrido 1 segundo (para la función sumar), 2
// segundos (para la función restar), 3 segundos (para la función multiplicar) y 4 segundos
// para dividir (para la función dividir). Añadir un console.log en la última línea del código
// del programa. Utilizar la herramienta de depuración de Chrome para comprobar cómo se
// ejecuta el programa.

const sumar2 =(x,y,callback) => setTimeout(() => callback(x+y),100); 
const restar2 =(x,y,callback) => setTimeout(()=> callback(x-y),2000);
const multiplicar2 =(x,y,callback) => setTimeout (()=> callback(x*y),3000);
const dividir2 =(x,y,callback) =>setTimeout(()=> callback(x/y),4000);

sumar2(4,2,(resultado)=> {
    
    console.log(resultado);
});

restar2(3,1,(resultado) => {
    console.log(resultado);
});

multiplicar2(5,7,(resultado) =>{
    console.log(resultado);
});
dividir2(6,8,(resultado)=> {
    console.log(resultado);
});


//Consulta asincrona

const consultarDatabase = (callback) => {
    setTimeout(() => {
    callback("Consulta realizada");
    }, 2000);
    }
console.log("Primera consulta al servidor");
consultarDatabase(function(consulta) {
console.log(consulta);
});
console.log("Segunda consulta al servidor");
consultarDatabase(function(consulta) {
console.log(consulta);
});
console.log("Más tareas a realizar...");

//This y Arguments

const hacerAlgo = (c, d) => {
    // apunta al objeto global
 console.log(this);
    // la variables se convierten en globales
    this.a = c;
    this.b = d;
    // a
    console.log(a);
    // b
    console.log(b);
}
const resultado = hacerAlgo('a', 'b');
// a
console.log(a);
// b
console.log(b);

