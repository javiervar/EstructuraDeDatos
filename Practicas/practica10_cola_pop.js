//SE DEFINE LA CLASE 'COLA' CON SUS RESPECTIVOS ATRUBUTOS
function Cola(size) {
    //TAMANO DE LA COLA
    this.size = size;
    //ARREGLO DE ELEMENTOS
    this.item = [];
    //SE INICIALIZA EL INDEX CON EL TAMANO DE LA COLA MENOS UNO  
    this.index = size - 1;
    //ATRIBUTO PARA SABER SI ESTA LLENA LA COLA
    this.full = false;
    //SE INICIALIZA LOS ITEMS EN 0 DEPENDIENDO DEL TAMANO INGRESADO
    for (var x = 0; x < size; x++) {
        this.item[x] = 0;
    }
}

//SE LE AGREGA UN METODO ADD A LA CLASE COLA 
Cola.prototype.add = function(item) {
    //SI EL ELEMENTO INGRESADO ES '0' SE MANDA UN MENSAJE DICIENDO QUE NO SE PUEDE INGRESAR EL 0
    if (item == 0) {
        console.log("No se pueden agregar 0");
        //SI LA COLA NO ESTA LLENA SE AGREGA EL ELEMENTO
    } else if (!this.full) {
        //SE AGREGA EL ELEMENTO EN EL INDICE CORRESPONDIENTE
        this.item[this.index] = item;
        //SE RESTA UNO AL INDICE
        this.index = parseInt(this.index) - 1;
        //SI EL INDICE ES MENOR QUE 0 CAMBIAMOS EL ATRIBUTO 'FULL' A VERDADERO
        if (this.index < 0) {
            this.full = true
        }
        //SI LA COLA ESTA LLENA RETORNAMOS UN TRUE
    } else {
        return true
    }
}

//A LA CLASE POP SE LA AGREGA EL METODO POP
Cola.prototype.pop = function() {

    //CONDICION PARA VALIDAR SI LA COLA TIENE DATOS
    if (this.index!=this.size-1) {
        //BANDERA DE VACIO
        var vacio = true
        //CICLO FOR PARA RECORRER LOS CEROS
        for (var x = this.size - 1; x >= 0; x--) {
            //SI EL INDICE ES 0 SE CAMBIA EL VALOR DE ESA POSICION A 0
            if (x == 0)
                this.item[x] = 0;
            else
                this.item[x] = this.item[x - 1];//SI EL INDICE ES DIFERENTE DE 0 SE  COLOCA EN LA POSICION ACTUAL EL VALOR DE LA POSICION ANTERIOR
            //SI HAY ALGUN ELEMENTO DENTRO DE LA COLA LA BANDERA DE VACIO CAMBIA A VERDADERO
            if (this.item[x] != 0)
                vacio = false
        }

        //SI LA BANDERA VACIO ES VERDADERA EL INDEX REGRESA A SER DEL TAMANO DE LA COLA ORIGINAL Y LA BANDERA FULL CAMBIA A FALSE
        if (vacio){
        	this.index=this.size-1;
            this.full = false
        }

    } else {
        //SE REGRESA COLA VACIA SI EL INDEX ES IGUAL AL TAMANO
        console.log("Cola vacia");
    }
}


//AUI EMPIEZA TODO EL MENU

//SE IMPORTA EL MODULO READLINE DE NODEJS PARA LEER  DESDE LA CONSOLA
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

//SE PREGUNTA EL TAMANO DE LA COLA Y SE ALMACENA EL VALOR EN LA VARIABLE SIZE
readline.question("Inserta el tamano de la cola\n", (size) => {
    //SE CREA UN OBJETO DE LA CLASE COLA DEL TAMANO INGRESADO
    var cola = new Cola(size);
    //SE IMPRIME LA COLA VACIA
    console.log("Tu cola", cola.item)
    //SE LLAMA UNA FUNCION RECURSIVA PARA ANADIR ELEMENTOS Y SE LE PASA COMO PARAMETRO EL OBJETO 'COLA'
    menuRecursivo(cola);

});

//FUNCION RECURSIVA PARA PODER ELEGIR SI VA AGREGAR O QUITAR DE LA COLA
var menuRecursivo = function(cola) {
    //SE PREGUNTA LA OPCION A ELEGIR
    readline.question('"Elige una opcion:\n1:push\n2:pop\n3:exit\n:', function(opc) {
        //OPCION 3 CONDICION PARA SALIR DEL MENU
        if (opc == 3){
        	//SE CIERRA EL READLINE
            return readline.close();
        }

        //OPCION 2 MANDA A LLAMAR LA FUNCION RECURSIVA PARA ANADIR ELEMENTOS A LA COLA
        if (opc == 1) {
        	//SE LLAMA A LA FUNCION DE ANADIR PASANDOLE COMO PARAMETRO LA COLA CREADA
            addRecursivo(cola);
            //OPCION 2 PARA LLAMAR EL METODO  POP Y REMOVER EL PRIMER ELEMENTO QUE ENTRO A LA COLA
        } else if (opc == 2) {
        	//SE LLAMA AL METODO POP DEL OBJETO COLA
            cola.pop();
            //SE IMPRIME EL ARREGLO DE ITEMS DENTRO DE LA COLA
            console.log(cola.item)
        }

        //SE VUELVE A LLAMAR EL MENU RECURSIVO PASANDO COMO PARAMETRO EL OBJETO COLA
        menuRecursivo(cola);
    });
};



//FUNCION RECURSIVA PARA PEDIR LA INSERCION DE ELEMENTOS 
var addRecursivo = function(cola) {
    //SE PREGUNTA EL ELEMENTO QUE SE DESEA ANADIR A LA COLA
    readline.question('"Inserta el elemento\n: ', function(item) {
        //CONDICION PARA SALIR DEL MENU ESCRIBIENDO 'exit' EN LA CONSOLA
        if (item == 'exit')
            menuRecursivo(cola)

        //SI AL ANADIR EL ITEM RETORNA VALOR DE VERDADERO MANDA EL MENSAJE DE COLA LLENA
        if (cola.add(item)) {
            console.log("cola llena")
            menuRecursivo(cola)
            //SI NO SE VUELVE A LLAMAR LA FUNCION PASANDOLE EL OBJETO COMO PARAMETRO
        } else {
        	console.log(cola.item)
            addRecursivo(cola);//LA FUNCION SE LLAMA A SI MISMA PARA VOLVER A PREGUNTAR
        }
    });
};