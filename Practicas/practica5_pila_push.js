//SE CREA LA CLASE PILA CON SUS RESPECTIVOS ATRIBUTOS
function Pila(size) {
	//TAMANO DE LA PILA
  this.size = size;
  //ARRAY DE ELEMENTOS
  this.item=[];
  //BANDERA PARA SABER CUANDO ESTA VACIA LA PILA
  this.empty=true;
  //INDICE ACTUAL
  this.index=0;
}

//SE AGREGA EL METODO PUSH A LA CLASE PILA EL CUAL RECIBE COMO PARAMETRO EL ELEMENTO QUE SE DESEA AGREGAR A LA PILA
Pila.prototype.push = function(item) {
	//CONDICION PARA SABER SI LA PILA ESTA LLENA
  	if(this.index!=this.size){
  		this.item[this.index]=item;//SE AGREGA EL ELEMENTO EN EL INDICE CORRESPONDIENTE
  		this.index+=1;//SE SUMA 1 AL INDICE
  		this.empty=false;//SE CAMBIA LA BANDERA EMPTY A FALSE YA QUE LA PILA YA NO ESTA VACIA
	}else{
		//SI LA PILA ESTA LLENA SE DEVUELVE UN TRUE
		return true;
	}
};



//SE IMPORTA EL MODULO READLINE DE NODEJS PARA LEER  DESDE LA CONSOLA
const readline = require('readline').createInterface({
  	input: process.stdin,
  	output: process.stdout
})

//SE PREGUNTA EL TAMANO DE LA PILA Y SE ALMACENA EL VALOR EN LA VARIABLE SIZE
readline.question("Inserta el tamano de la pila\n", (size) => {
	//SE CREA UN OBJETO DE LA CLASE PILA DEL TAMANO INGRESADO
	var nuevaPila=new Pila(size);

	//SE LLAMA UNA FUNCION RECURSIVA PARA ANADIR ELEMENTOS Y SE LE PASA COMO PARAMETRO EL OBJETO 'nuevaPila'
	addRecursivo(nuevaPila);
	
});


//FUNCION RECURSIVA PARA PEDIR LA INSERCION DE ELEMENTOS 
var addRecursivo= function (nuevaPila) {
	//SE PREGUNTA EL ELEMENTO QUE SE DESEA ANADIR A LA PILA
  readline.question('"Inserta el elemento\n: ', function (item) {
  	//SI AL ANADIR EL ITEM RETORNA VALOR DE VERDADERO MANDA EL MENSAJE DE PILA LLENA
    if(nuevaPila.push(item)){
    	console.log("Pila llena")
    	readline.close(); //SE CIERRA EL READLINE
    }else{
    	//SI NO SE VUELVE A LLAMAR LA FUNCION PASANDOLE EL OBJETO COMO PARAMETRO
    	addRecursivo(nuevaPila);
    } 
  });
};


