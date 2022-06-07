const objeto1 = {
    gestor:"Banco Republica",
    cliente: "Tomas",
    mensaje: "Buenas tardes",
    transferencia: "Transferencia Realizada"
}
console.log(objeto1.cliente);

console.log(objeto1.mensaje);
const objeto2 = {
    gestor:"Gestor Alberto Crespo",
    cliente: "Pablo",
    mensaje() {
        console.log("Hola cliente " + this.cliente)
    },
    trasferencia() {
        console.log("Su tranferencia ha sido realizada por el gestor " + this.gestor)
    }
    }

const objeto3 = {
    gestor:"Gestor Luis Rodriguez",
    cliente: "Laura",
    mensaje() {
        console.log( "Buenas tardes" + this.cliente);
    },
    transferencia() {
        console.log("La transferencia de " + this.gestor +  " se ha completado");
    }
}

arrayObj1=Object.keys(objeto1)
    console.log(arrayObj1);

arrayObj2=Object.keys(objeto2)
    console.log(arrayObj2);

arrayObj3=Object.keys(objeto3)
    console.log(arrayObj3);
   
    lon1 =arrayObj1.length;
    console.log(typeof(objeto2[arrayObj2[3]]));
    for (let i = 0; i < lon1; i++) {
    console.log(objeto1[arrayObj1[i]]);
}
lon2 =arrayObj2.length;
    for (let i = 0; i < lon2; i++) {
    console.log(objeto2[arrayObj2[i]]);
}
lon3 =arrayObj3.length;
for (let i = 0; i < lon3; i++) {
    console.log(objeto3[arrayObj3[i]]);}

    JSON.stringify ({arrayObj1})
    JSON.stringify ({arrayObj2})
    JSON.stringify ({arrayObj3})


function consultarDatabase(callback) {
    setTimeout(() => {
        callback("Consulta Completada");
    }, 2000);
}
this.consulta
    console.log("Consultando al servidor");
    consultarDatabase(function(consulta) {
    console.log(consulta);
});

function consultarGestor(callback){
    setInterval(()=>{
        console.log(gestor);  
    },5000 );
}

