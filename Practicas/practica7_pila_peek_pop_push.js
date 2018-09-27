const readline = require('readline').createInterface({
  	input: process.stdin,
  	output: process.stdout
})

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
		//SE MANDA UN MENSAJE DONDE DECIMOS QUE YA NO HAY ESPACIO EN LA PILA
		console.log("no se puede agregar mas");
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
		console.log("Ya no hay elementos")
	}
  	
};

Pila.prototype.peek = function() {
	readline.question("Selecciona\n1:Peek\n2:PeekAll\n3:Peek Element\n\n", (opc) => {
	if(opc==1){
		console.log(this.item[this.index-1]);
		readline.close()
	}else if(opc==2){
		console.log(this.item);
		readline.close()
	}else{
		

		readline.question("Que elemento deseas buscar?", (name) => {
  			console.log(name)
  				var encontrado=false;
				for(var x in this.item){
					if(this.item[x]===name){
						encontrado=true;
						console.log({element:this.item[x],index:x})
					}
				}
				if(!encontrado)
					console.log("no existe el elemento "+name);
  				readline.close()
		})
		
	}
})
  	
};


//SE CREA UN OBJETO DE LA FUNCION PILA DE UN TAMANO DE 5
var nuevaPila=new Pila(5);

//AQUI SE ANADE A LA PILA 5 ELEMENTOS
nuevaPila.push("a");
nuevaPila.push("b");
nuevaPila.push("c");
nuevaPila.push("1");
nuevaPila.push("2");

nuevaPila.peek()







