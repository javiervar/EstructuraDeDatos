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

//A LA CLASE PILA SE ANADE LA FUNCION POP PARA SACAR EL ULTIMO ELEMENTO ANADIDO A LA PILA
Pila.prototype.pop = function() {
	//VALIDAMOS SI LA PILA NO ESTA VACIA
	if(!this.empty){
		//A LA VARIABLE I LA INICIALIZAMOS CON EL TAMANO ACTUAL DE LA PILA PARA SABER CUAL ES EL ULTIMO ELEMENTO
		var i=this.item.length-1;
		//CON LA FUNCION SPLICE ELIMINAMOS DEL ARREGLO EL INDICE INDICADO 
		this.item.splice(i,1);
		//SE LE RESTA UNO AL INDICE YA QUE AHORA CONTIENE UNO MENOS
		this.index-=1;
		//SI EL INDICE ES 0
		if(this.index==0){
			//VOLVEMOS VERDADERA LA VARIABLE EMPTY
			this.empty=true;
		}
	}else{
		//SE IMPRIME QUE NO HAY ELEMENTOS
		console.log("Ya no hay elementos")
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
	menuRecursivo(nuevaPila);
	
});


//FUNCION RECURSIVA PARA PEDIR LA INSERCION DE ELEMENTOS 
var addRecursivo= function (nuevaPila) {
	//SE PREGUNTA EL ELEMENTO QUE SE DESEA ANADIR A LA PILA
  readline.question('"Inserta el elemento\n: ', function (item) {
  	//SI AL ANADIR EL ITEM RETORNA VALOR DE VERDADERO MANDA EL MENSAJE DE PILA LLENA
    if(nuevaPila.push(item)){
    	console.log("Pila llena")
    	menuRecursivo(nuevaPila)//SE VUELVE A LLAMAR AL MENU
    }else{
    	//SI NO SE VUELVE A LLAMAR LA FUNCION PASANDOLE EL OBJETO COMO PARAMETRO
    	addRecursivo(nuevaPila);
    } 
  });
};


//FUNCION RECURSIVA PARA PODER ELEGIR SI VA AGREGAR O QUITAR DE LA PILA
var menuRecursivo = function(nuevaPila) {
    //SE PREGUNTA LA OPCION A ELEGIR
    readline.question('"Elige una opcion:\n1:push\n2:pop\n4:exit\n:', function(opc) {
        //OPCION 3 CONDICION PARA SALIR DEL MENU
        if (opc == 4){
        	//SE CIERRA EL READLINE
            return readline.close();
        }

        //OPCION 2 MANDA A LLAMAR LA FUNCION RECURSIVA PARA ANADIR ELEMENTOS A LA PILA
        if (opc == 1) {
        	//SE LLAMA A LA FUNCION DE ANADIR PASANDOLE COMO PARAMETRO LA PILA CREADA
            addRecursivo(nuevaPila);
            //OPCION 2 PARA LLAMAR EL METODO  POP Y REMOVER EL PRIMER ELEMENTO QUE ENTRO A LA PILA
        } else if (opc == 2) {
        	//SE LLAMA AL METODO POP DEL OBJETO PILA
           nuevaPila.pop()
            //SE IMPRIME EL ARREGLO DE ITEMS DENTRO DE LA PILA
            console.log(nuevaPila.item)
        }
      

        //SE VUELVE A LLAMAR EL MENU RECURSIVO PASANDO COMO PARAMETRO EL OBJETO PILA
        menuRecursivo(nuevaPila);
    });
};




