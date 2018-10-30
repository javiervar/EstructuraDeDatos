//CLASE COLA CIRUCLAR CON SUS ATRIBUTOS
class ColaCircular {
    //METODO CONSTRUCTOR DE LA CLASE COLACIRCULAR
    constructor(size) {
        this.size = size;//SE INICIALIZA EL TAMANO DE LA COLA CIRCULAR
        this.item = [];//ARREGLO VACIO
        this.front = this.size - 1;//SE INICIALIZA EL FRONT IGUAL AL TAMANO DE LA COLA
        this.rear = 0;//SE INICIALIZA EL REAR IGUAL A 0
        this.empty = true;//SE INICIALIZA EMPTY EN TRUE
        this.full = false;//SE INICIALIZA FULL EN FALSE
        //SE PONE UNDEFINED EN TODAS LAS POSICIONES VACIAS DEL ARREGLO
        for (var x = 0; x < this.size; x++) {
            this.item[x] = undefined;
        }

    }

    //METODO PEEK PARA OBTENER EL ULTIMO ELEMENTO INGRESADO A LA COLA
    Peek(){

        //SE ITERAN TODOS LOS ELEMENTOS DE LA COLA PARA SABER SI ESTA VACIA
        var flagVacio = true;
        for (var x = 0; x < this.size; x++) {
            //SI EXISTE UN ELEMENTO QUE NO SEA UNDEFINED SI EXISTE ALGUNO CAMBIO LA BANDERA A FALSE
            if (this.item[x] !== undefined) {
                flagVacio = false;
            }
        }

        //SI LA BANDERA ES VERDADERA SE IMPRIME COLA VACIA
        if (flagVacio) {
            console.log("COLA VACIA")
        } else {//EN CASO CONTRARIO SE DEVUELVE EL ULTIMO VALOR AGREGADO
            console.log(this.item[this.rear])
        }

    }
    //METODO PARA OBTENER EL PROXIMO ELEMENTO A SALIR
    PeekNext() {
        //SE ITERAN TODOS LOS ELEMENTOS DE LA COLA PARA SABER SI ESTA VACIA
        var flagVacio = true;
        for (var x = 0; x < this.size; x++) {
            //SI EXISTE UN ELEMENTO QUE NO SEA UNDEFINED SI EXISTE ALGUNO CAMBIO LA BANDERA A FALSE
            if (this.item[x] !== undefined) {
                flagVacio = false;
            }
        }

        //SI LA BANDERA ES VERDADERA SE IMPRIME COLA VACIA
        if (flagVacio) {
            console.log("COLA VACIA")
        } else {//EN CASO CONTRARIO SE DEVUELVE EL ELEMENTO QUE ESTA PRIMERO
            console.log(this.item[this.front])
        }

    }

    //METODO PARA OBTENER TODOS LOS ELEMENTOS DE LA COLA
    PeekALL() {
        //SE ITERAN TODOS LOS ELEMENTOS DE LA COLA PARA SABER SI ESTA VACIA
        var flagVacio = true;
        for (var x = 0; x < this.size; x++) {
            //SI EXISTE UN ELEMENTO QUE NO SEA UNDEFINED SI EXISTE ALGUNO CAMBIO LA BANDERA A FALSE
            if (this.item[x] !== undefined) {
                flagVacio = false;
            }
        }

        //SI LA BANDERA ES VERDADER SE IMPRIME COLA VACIA
        if (flagVacio) {
            console.log("COLA VACIA")
        } else {//EN CASO CONTRARIO SE IMPRIMEN TODOS LOS ELEMENTOS DE LA COLA
            console.log(this.item)
        }

    }

    //METODO PARA OBTENER UN ELEMENTO EN ESPECIFICO DENTRO DE LA COLA CIRCULAR
    PeekElement(elemento) {
        var flag = true;
        //CICLO PARA ENCONTRAR EL ELEMENTO A BUSCAR DENTRO DE LOS ELEMENTOS DE LA COLA
        for (var x in this.item) {
            //SE COMPARA EL ELEMENTO ACTUAL DEL FOR CON ELE ELEMENTO A BUSCAR
            //SI SON IGUALES SE IMPRIME EL INDICE Y EL ELEMENTO BUSCADO Y LA BANDERA CAMBIA A FALSO
            if (this.item[x] == elemento) {
                console.log({ index: x, elemento: elemento });
                flag = false;
            }
        }
        //SI LA BANDERA ES VERDADERA SE IMPRIME MENSAJE DE QUE NO EXISTE EL ELEMENTO
        if (flag) {
            console.log("NO EXISTE ELEMENTO BUSCADO")
        }
    }

   
    //METODO PUSH PARA AGREGAR UN ELEMENTO A LA COLA CIRCULAR
    Push(element) {

        //SE BUSCA EL INDICE DEL ULTIMO LUGAR VACIO
        var index = -1;
        for (var x = 0; x < this.size; x++) {
            if (this.item[x] === undefined) {//SE VA CAMBIANDO EL VALOR DEL INDEX HASTA QUE LA CONDICION NO SE CUMPLA O SALGA DEL CICLO
                index = x;
            }
        }
        //SI EL INDICE ES DIFERENTE A -1 SIGNIFICA QUE AUN HAY ESPACIO EN LA COLA
        if (index != -1) {
            //SE AGREGA EL ELEMENTO EN EL INDICE ENCONTRADO
            this.item[index] = element
            //SE CAMBIA EL ATRIBUTO REAR POR EL INDICE DONDE SE ANADIO EL ULTIMO ELEMENTO
            this.rear = index;
            //CAMBIAMOS EL ATRIBUTO EMPTY A FALSE YA QUE YA NO ESTA VACIA LA COLA
            this.empty = false;

        } else {//EN CASO DE QUE NO SE ENCONTRARA LUGAR MANDA MENSAJE DE COLA LLENA Y SE CAMBIA EL ATRIBUTO FULL A VERDADERO
            this.full = true;
            console.log('COLA LLENA')
        }

        //SE VA IMPRIMIENDO LAS VARIABLES PARA IR VISUALIZANDO LAS ACCIONES
        console.log("========PUSH============")
        console.log('rear:' + this.rear)
        console.log('front:' + this.front)
        console.log(this.item)
        console.log("=======================")

    }

   

}

//AUI EMPIEZA TODO EL MENU

//SE IMPORTA EL MODULO READLINE DE NODEJS PARA LEER  DESDE LA CONSOLA
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

//SE PREGUNTA EL TAMANO DE LA COLA Y SE ALMACENA EL VALOR EN LA VARIABLE SIZE
readline.question("Inserta el tamano de la cola circular\n", (size) => {
    //SE CREA UN OBJETO DE LA CLASE COLA DEL TAMANO INGRESADO
    const cola = new ColaCircular(size);
    //SE IMPRIME LA COLA VACIA
    console.log("Tu cola", cola.item)
    //SE LLAMA UNA FUNCION RECURSIVA PARA ANADIR ELEMENTOS Y SE LE PASA COMO PARAMETRO EL OBJETO 'COLA'
    menuRecursivo(cola);

});

//FUNCION RECURSIVA PARA PODER ELEGIR SI VA AGREGAR O QUITAR DE LA COLA
var menuRecursivo = function(cola) {
    //SE PREGUNTA LA OPCION A ELEGIR
    readline.question('"Elige una opcion:\n1:push\n3:peek\n4:peek next\n5:peek element\n6:exit\n:', function(opc) {
        //OPCION 3 CONDICION PARA SALIR DEL MENU
        if (opc == 6) {
            //SE CIERRA EL READLINE
            return readline.close();
        }

        //OPCION 2 MANDA A LLAMAR LA FUNCION RECURSIVA PARA ANADIR ELEMENTOS A LA COLA
        if (opc == 1) {
            //SE LLAMA A LA FUNCION DE ANADIR PASANDOLE COMO PARAMETRO LA COLA CREADA
            addRecursivo(cola);
        }//OPCION 3 PARA LLAMAR EL METODO PEEK 
        else if (opc == 3) {
            //SE LLAMA AL METODO PEEK DEL OBJETO COLA
            cola.Peek();

        }//OPCION 4 PARA LLAMAR EL METODO PEEK NEXT
        else if (opc == 4) {
            //SE LLAMA AL METODO PEEK NEXT DEL OBJETO COLA
            cola.PeekNext();

        }
        else if (opc == 5) {
            //PASAMOS AL MENU PARA BUSCAR ELEMENTO DENTRO DE LA COLA
            peekElementRecursivo(cola);

        }

        //SE VUELVE A LLAMAR EL MENU RECURSIVO PASANDO COMO PARAMETRO EL OBJETO COLA
        menuRecursivo(cola);
    });
};

//FUNCION PARA PEDIR ELEMENTO A BUSCAR
var peekElementRecursivo=function(cola){
    readline.question('Que elemento deseas buscar?\n: ', function(item) {
        cola.PeekElement(item);//SE LLAMA AL METODO DE PEEK ELEMENT DE LA COLA PASANDOLE COMO PARAMETRO EL ELEMENTO QUE SE DESEA BUSCAR
        menuRecursivo(cola);//SE REGRESA AL MENU 
    });
}


//FUNCION RECURSIVA PARA PEDIR LA INSERCION DE ELEMENTOS 
var addRecursivo = function(cola) {
    //SE PREGUNTA EL ELEMENTO QUE SE DESEA ANADIR A LA COLA
    readline.question('"Inserta el elemento o escribe "menu" para volver al menu PRINCIPAL\n: ', function(item) {
        //CONDICION PARA SALIR DEL MENU ESCRIBIENDO 'exit' EN LA CONSOLA
        if (item == 'menu') {
            menuRecursivo(cola)
        } else {
            cola.Push(item)//SE ANADE EL ELEMENTO LLAMANDO EL METODO PUSH DEL OBJETO
            addRecursivo(cola)//SE VUELVE A LLAMAR LA MISMA FUNCION
        }
      

    });
};