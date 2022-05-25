//Ejercicio 1
let number =[23,10,5,13,17,11]
let Ord = number.length;

for (let i=0; i< Ord; i++){
    console.log(number[i]);
}

for (let numero of number) {
    console.log(numero) 
} 

//Ejercicio 2
let colors =["rojo","negro","blanco"]

for (let colores of colors) {
    console.log(colores)
}


//ejercicio3
let colores2=[]
for (let color of colors) {
    colores2.push(color);
}

//Ejercicio 4
let elementos1 = ["rio","mar","oceano"]
let elementos2 = ["tierra","rio","mar"]
let contador=0;

for (let elementos of elementos1) {
    for (const elementos3 of elementos2) {
         if (elementos1 == elementos2) {
       contador++;
   }
}
}

console.log(contador);

//ejercicio 5
let tierra = ["mar","rio","agua","arena"]
let tierra2 = tierra.slice (1,4)

console.log(tierra2);

