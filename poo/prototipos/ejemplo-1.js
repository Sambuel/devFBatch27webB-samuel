//DEFINICION : JS ES UN LEGUNAJE MULTIPARADIGMA , 
//PRINCIPALMENTE ORIENTADO A OBJETOS Y BASADO EN PROTOTIPOS  

function Animal (params) {
    this.nombre = "jaguar";
    this.color = "amarillo"; 
};
// UN OBJETO ES UNA INSTANCIA DE UNA PROTOTIPO
const primerAnimal = new Animal()
console.log(primerAnimal); 



// A PARTIR DEL PROTOTIPO DE ARRIBA CREAR LO SIGUIENTES OBJETOS : JUGAR , JIRAFA , CONEJO 
// VERIFICAR QUE FUNCIONE EL CODIGO 
function Animal2 (){
    this.nombre = "jirafita";
    this.color = "amarillo";
};
 
const segundoAnimal = new Animal2()
console.log(segundoAnimal);

function Animal3 (){
    this.nombre = "conejito";
    this.color = "negro";
};
 
const tercerAnimal = new Animal3()
console.log(tercerAnimal);
