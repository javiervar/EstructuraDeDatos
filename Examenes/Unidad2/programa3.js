//SE DECLARA LA CLASE PILA CON SUS RESPECTIVOS ATRIBUTOS 
function Pila(size) {
    this.size = size;
    this.item = [];
    this.empty = true;
    this.index = 0;
}
//A LA CLASE PILA SE LE ANADE LA FUNCION PUSH CON EL PARAMETRO QUE SE DECEA GUARDAR
Pila.prototype.push = function(item) {
    //AQUI SE CONDICIONA PARA QUE NO SE PUEDA SEGUIR ANADIENDO SI EL INDEX SE PASA DEL TAMANO DE LA PILA
    if (this.index != this.size) {
        //SE ALMACENA EL VALOR DENTRO DEL ARREGLO ITEM EN EL INDICE QUE SIGUE
        this.item[this.index] = item;
        //SE LE SUMA UN AL INDICE PARA QUE EL SIGUIENTE ELEMENTO SE GUARDE EN EL SIGUIENTE ESPACIO
        this.index += 1;
        //PONEMOS EN FALSE LA VARIABLE EMPTY PARA PODER SABER QUE EL ARREGLO YA NO ESTA VACIO
        this.empty = false;
    } else {
        //SE IMPRIME EL SIGUIENTE MENSAJE SI LA PILA SE LLENA
        console.log("SE ALCANZO EL LIMITE DE MIGRACIONES...")
    }
};

//SE AGREGA EL METODO PEEKALL A LA CLASE PILA
Pila.prototype.peekAll = function() {
	//SE IMPRIME MIGRACION POR MIGRACION EMPEZANDO POR LA ULTIMA
	for(var i=this.item.length-1;i>=0; i--){
		console.log("###########################################\n")
    	console.log(this.item[i],"\n");
    	console.log("###########################################\n")
    }
}







//AQUI EMPIEZA EL MENU

//SE IMPORTA EL MODULO READLINE DE NODEJS PARA LEER  DESDE LA CONSOLA
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

//DATOS DEL PROGRAMA AL INICIAR
console.log("\n\n-----------------------------------------");
console.log("       		gat");
console.log("-----------------------------------------");
console.log("     best control version than git");
console.log("-----------------------------------------\n\n");

//SE PREGUNTA EL TAMANO DE LA PILA Y SE ALMACENA EL VALOR EN LA VARIABLE SIZE
readline.question("Cual sera el numero de migraciones maximas?\n", (size) => {
    //SE CREA UN OBJETO DE LA CLASE PILA DEL TAMANO INGRESADO
    var nuevaPila = new Pila(size);

    //SE LLAMA UNA FUNCION RECURSIVA PARA ANADIR ELEMENTOS Y SE LE PASA COMO PARAMETRO EL OBJETO 'nuevaPila'
    menuRecursivo(nuevaPila);

});

//FUNCION PARA PEDIR EL COMMIT
var addCommit = function(nuevaPila) {
    //SE PREGUNTA EL ELEMENTO QUE SE DESEA ANADIR A LA PILA
    readline.question('Ingresa comentario de la migracion\n: ', function(item) {
        //SE LLAMA EL METODO PUSH DE LA PILA PARA ANADIR LA MIGRACION
        nuevaPila.push(item);
        //REGRESAMOS AL MENU Y LE PASAMOS EL OBJETO NUEVAPILA
        menuRecursivo(nuevaPila) 
        
    });
};


//FUNCION RECURSIVA PARA PODER ELEGIR SI VA AGREGAR O QUITAR DE LA PILA
var menuRecursivo = function(nuevaPila) {
	//COMENTARIOS DEL MENU Y LAS OPCIONES
	console.log("\n-----------------------------------------");
    console.log("     	COMANDOS");
    console.log("-----------------------------------------");
    console.log("Opciones:");
    console.log("  push   | Agregar una migracion");
    console.log("  pull   | Obtener las migracion");
    console.log("-----------------------------------------\n");


    //SE PREGUNTA LA OPCION A ELEGIR
    readline.question('\n:', function(opc) {
    	//SI TECLEA PUSH MANDA A LLAMAR LA FUNCION ADDCOMMIT PARA ANADIR LA NUEVA MIGRACION
    	if(opc==="push"){
    		addCommit(nuevaPila);
    	}else if(opc=="pull"){//SI TECLEA PULL IMPRIME LAS MIGRACIONES
    		nuevaPila.peekAll();
    		menuRecursivo(nuevaPila)
    	}else{//SI ESCRIBE CUALQUIER OTRA COSA MANDA EL SIGUIENTE MENSAJE
    		console.log("POR FAVOR ELEGIR UN COMANDO CORRECTO\n")
    		menuRecursivo(nuevaPila)
    	}
       
    });
};