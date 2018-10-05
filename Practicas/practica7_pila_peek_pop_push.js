
//SE DECLARA LA CLASE PILA CON SUS RESPECTIVOS ATRIBUTOS 
function Pila(size) {
  this.size = size;
  this.item=[];
  this.empty=true;
  this.index=0;
}
//A LA CLASE PILA SE LE ANADE LA FUNCION PUSH CON EL PARAMETRO QUE SE DECEA GUARDAR
Pila.prototype.push = function(item) {
	//AQUI SE CONDICIONA PARA QUE NO SE PUEDA SEGUIR ANADIENDO SI EL INDEX SE PASA DEL TAMANO DE LA PILA
  	if(this.index!=this.size){
  		//SE ALMACENA EL VALOR DENTRO DEL ARREGLO ITEM EN EL INDICE QUE SIGUE
  		this.item[this.index]=item;
  		//SE LE SUMA UN AL INDICE PARA QUE EL SIGUIENTE ELEMENTO SE GUARDE EN EL SIGUIENTE ESPACIO
  		this.index+=1;
  		//PONEMOS EN FALSE LA VARIABLE EMPTY PARA PODER SABER QUE EL ARREGLO YA NO ESTA VACIO
  		this.empty=false;
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
//SE AGREGA EL METODO PEEK A LA CLASE PILA
Pila.prototype.peek = function() {
	console.log(this.item[this.index-1]);//SE IMPRIME EL ULTIMO ELEMENTO
}

//SE AGREGA EL METODO PEEKALL A LA CLASE PILA
Pila.prototype.peekAll = function() {
	console.log(this.item);//SE IMPRIMEN TODOS LOS ELEMENTOS
}

//SE AGREGA EL METODO PEEK ELEMENT A LA CLASE
Pila.prototype.peekElement = function(name) {
	var encontrado=false;//BANDERA PARA SABER SI SE ENCONTRO EL ELEMENTO
	for(var x in this.item){//CICLO PARA BUSCAR EL ELEMENTO
		if(this.item[x]===name){//SI EL ELEMENTO FUE ENCONTRADO SE CAMBIA LA BANDERA A VERDADERO Y SE IMPRIME EL ELEMENTO Y SU INDICE
			encontrado=true;
			console.log({element:this.item[x],index:x})
		}
	}
	if(!encontrado)//SI EL ELEMENTO NO FUE ENCONTRADO SE IMPRIME LO SIGUIENTE
		console.log("no existe el elemento "+name);
}

//SE AGREGA EL METODO PEEK A LA CLASE PILA
const peekMenu = function(nuevaPila) {
	//SE PREGUNTA QUE SE DESEA OPCION DESEA ELEGIR
	readline.question("Selecciona\n1:Peek\n2:PeekAll\n3:Peek Element\n4:menu\n", (opc) => {
	if(opc==1){
		nuevaPila.peek();//SE LLAMA AL METODO PEEK DEL OBJETO
		peekMenu(nuevaPila)//SE VUELVE A LLAMAR AL MENU PEEK
	}else if(opc==2){
		nuevaPila.peekAll()//SE LLAMA AL METODO PEEK ALL DEL OBJETO
		peekMenu(nuevaPila)// SE VUELVE A LLAMAR AL MENU PEEK
	}else if(opc==4){
		menuRecursivo(nuevaPila);//SE REGRESA AL MENU PRINCIPAL
	}else{
		//SE PREGUNTA QUE ELEMENTO DESEA BUSCAR
		readline.question("Que elemento deseas buscar?", (name) => {
  			console.log(name)
  			//SE LLAMA AL METODO PEEK ELEMENT DEL OBJETO Y SE LE PASA COMO PARAMETRO EL NOMBRE DEL ELEMENTO A BUSCAR
  			nuevaPila.peekElement(name)
			peekMenu(nuevaPila);//SE VUELVE A LLAMAR AL MENU DE PEEK
  				
		})
		
	}
})
  	
};

//AQUI EMPIEZA EL MENU

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
    readline.question('"Elige una opcion:\n1:push\n2:pop\n3:peek\n4:exit\n:', function(opc) {
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
        }else if(opc==3){
        	peekMenu(nuevaPila);//SE LLAMA AL MENU DE PEEK
        }
      

        //SE VUELVE A LLAMAR EL MENU RECURSIVO PASANDO COMO PARAMETRO EL OBJETO PILA
        menuRecursivo(nuevaPila);
    });
};









