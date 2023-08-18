//funciones anonimas AUTOEJECUTABLES//IIFE
(function (){
    return console.log("soy una funcion anonima autoejecutable....");
})();

//FUNCION ANONIMA DE FLECHA
(() => {
    return console.log("soy una funcion auto ejecutable de flecha....");
})();

//FUNCION ANONIMA EJEMPLO
(function (a,b) {
    return console.log( a + b );
})(10,1);

//TRANSFORMAR LA IFI ANTERIOR EN UNA FUNCION FLECHA
((a,b) => {
    return console.log(a + b );
})(10,10)

//SIMPLICAR LO MAS QUE SE PUEDE LA FUNCION DE ARRIBA 
const multi = (a,b) => a * b ;
console.log(multi(5,5));