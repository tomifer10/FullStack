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

//Ejercicio 2

const sumando = (t,l)=> t+l;

console.log (sumando (4,2))

const restando=(t,l)=> t-l;

console.log (restando (4,2))