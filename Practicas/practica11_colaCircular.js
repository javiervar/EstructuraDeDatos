class ColaCircular {
    constructor(size) {
        this.size = size;
        this.item = [];
        this.front = this.size - 1;
        this.rear = 0;
        this.empty=true;
        this.full = false;
        for (var x = 0; x < this.size; x++) {
            this.item[x] = undefined;
        }

    }

    Push(element) {
        var index = -1;
        for (var x = 0; x < this.size; x++) {
            if (this.item[x] === undefined) {
                index = x;
            }
        }
        if (index != -1) {
            this.item[index] = element
            this.rear = index;
            this.empty=false;

        } else {
            this.full = true;
            console.log('Cola llena')
        }

        console.log("========PUSH============")
        console.log('rear:' + this.rear)
        console.log('front:' + this.front)
        console.log(this.item)
        console.log("=======================")

    }

    Pop() {
        if(this.empty){
            console.log("COLA LLENA")
            return;
        }
        

        this.item[this.front] = undefined;
        this.full = false;
        var flagVacio=true
        for (var x = 0; x < this.size; x++) {
            if (this.item[x] !== undefined) {
                flagVacio=false;
            }
        }

        if(flagVacio){
            this.empty=true;
            this.front = this.size-1;
            console.log(this.item)
            return;
        }

        if (this.front == 0) {
          console.log("Es cero")
           this.front = this.size-1;
           
        } else {

             this.front -= 1;
        }
        
        console.log("=========POP===========")
        console.log('rear:' + this.rear)
        console.log('front:' + this.front)
        console.log(this.item)
        console.log("======================")


    }

    get Item() {
        return this.item
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
    readline.question('"Elige una opcion:\n1:push\n2:pop\n3:exit\n:', function(opc) {
        //OPCION 3 CONDICION PARA SALIR DEL MENU
        if (opc == 3) {
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
            cola.Pop();
            //SE IMPRIME EL ARREGLO DE ITEMS DENTRO DE LA COLA

        }

        //SE VUELVE A LLAMAR EL MENU RECURSIVO PASANDO COMO PARAMETRO EL OBJETO COLA
        menuRecursivo(cola);
    });
};


//FUNCION RECURSIVA PARA PEDIR LA INSERCION DE ELEMENTOS 
var addRecursivo = function(cola) {
    //SE PREGUNTA EL ELEMENTO QUE SE DESEA ANADIR A LA COLA
    readline.question('"Inserta el elemento o escribe "menu" para volver al menu\n: ', function(item) {
        //CONDICION PARA SALIR DEL MENU ESCRIBIENDO 'exit' EN LA CONSOLA
        if (item == 'menu') {
            menuRecursivo(cola)
        } else {
            cola.Push(item)

            addRecursivo(cola)
        }
        //SI AL ANADIR EL ITEM RETORNA VALOR DE VERDADERO MANDA EL MENSAJE DE COLA LLENA

    });
};