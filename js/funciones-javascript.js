function suma1(a, b) {
    console.log(a + b);
}
   
// 5
suma1(2, 3);

//Funcion anonima
const sumaa = function(a, b) {
    console.log(a + b);
};
  
// 5
sumaa(2, 3);

//Funcion metodo
const a = {
    f: function() {
        console.log('Hola');
    }
};
    
// invocación utilizando la notación punto
    a.f();
    
// invocación utilizando la notación con corchetes
    a['f']();


//Funcion autoejecutable    
(function saludar() {
    console.log('Hola');
})();

// función normal
function calculo(altura) {
    return 5 * altura / 2;
};
console.log(calculo(2))    

    // función de flecha
    const calculo2= (altura) => {
    return 5 * altura / 2;
};
console.log(calculo2(5))
    
    // forma simplificada de la función de flecha
    const calculo3 = altura => 5 * altura / 2;

   console.log(calculo3(4))

//Ejercicio 1
 const sumar = (x,y)=> {
     return x+y
 };
 const restar = (x,y)=> {
    return x-y
};
const multiplicar = (x,y)=> {
    return x*y
};
const dividir = (x,y)=> {
    return x/y
};

console.log (sumar (1,2))
console.log (restar (1,2))

//Ejercicio 2 y 3

const sumando = (t,l,callback)=> callback (t+l);

const restando=(t,l,callback)=> callback(t-l);

const multiplicando =(t,l)=> t*l;

console.log (multiplicando(4,2))

const callback =(resultado) => {
    console.log(resultado);
}

sumando(4,5,callback);
restando(8,4,callback);

// Ejercicio 4: adaptar el ejercicio anterior para integrar el callback en la invocación de las
// cuatro funciones, en lugar de creándola como una función de callback por separado.
// Utilizar la herramienta de depuración de Chrome para comprobar cómo se ejecuta el
// programa.
// 177