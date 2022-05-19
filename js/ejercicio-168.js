let a=1 , b=2 , c=3, d=4
let hora=10 

if (a+b > c+d) {
    document.write ('a+b es mayor que c+d')
}
else {
    document.write ("c+d es mayor que a+b <br>")
}

if ((hora >= 9 )&&(hora <= 14)) {
    document.write ("Estoy en Sant Boi<br>");
    
} else if ((hora >=15)&&(hora <= 20)) {
    document.write ("Estoy en Castelldefels"); 
    
}
else {
    document.write ("Estoy en casa <br>");
}

let ang1=60 , ang2=100 , ang3=20
let triangulo= ang1 + ang2 + ang3

if (triangulo == 180) {
    document.write ("Los angulos forman 180 grados del triangulo <br>")
}
else {
    document.write ("No es un triangulo")
}

let a1=1, b2=2, c3=3
if ((a1>b2)&&(a1>c)){
    document.write ("A es mayor")
}
else if ((b2>a1)&&(b2>c3)) {
    document.write ("B es mayor")
}
else {
    document.write ("C es mayor")
}
