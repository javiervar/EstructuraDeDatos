class BiCola {

    //METODO CONSTRUCTOR DE LA CLASE BI COLA
    constructor(size) {
        this.size = size; //SE INICIALIZA EL TAMANO DE LA BI COLA
        this.item = []; //ARREGLO VACIO
        this.frontL = this.size - 1; //SE INICIALIZA EL FRONT IGUAL AL TAMANO DE LA COLA
        this.frontR = 0; //EL FRON 2 INICIA AL FINAL EN EL 0
        this.rearL = 0; //SE INICIALIZA EL REAR IGUAL A 0
        this.rearR = 0;
        this.empty = true; //SE INICIALIZA EMPTY EN TRUE
        this.full = false; //SE INICIALIZA FULL EN FALSE
        //SE PONE UNDEFINED EN TODAS LAS POSICIONES VACIAS DEL ARREGLO
        for (var x = 0; x < this.size; x++) {
            this.item[x] = 0;
        }

    }

    //METODO PUSH PARA AGREGAR UN ELEMENTO A LA COLA CIRCULAR
    PushRigth(element) {
        this.empty = false;


        var index = -1;
        for (var x = this.size; x >= 0; x--) {
            if (this.item[x] === 0) {
                index = x;
            }
        }
        if (index != -1) {
            this.item[index] = element;
            this.rearR = index;
            //SE VA IMPRIMIENDO LAS VARIABLES PARA IR VISUALIZANDO LAS ACCIONES
            console.log("========PUSH RIGHT============")
            console.log('rear:' + this.rearR)
            console.log('front:' + this.frontR)
            console.log(this.item)
            console.log("=======================")
        } else {
            console.log("COLA LLENA")
            this.full = true;
        }



    }

    //METODO PUSH PARA AGREGAR UN ELEMENTO A LA COLA CIRCULAR
    PushLeft(element) {

        this.empty = false;

        //SE BUSCA EL INDICE DEL ULTIMO LUGAR VACIO
        var index = -1;
        for (var x = 0; x < this.size; x++) {
            if (this.item[x] === 0) {
                index = x;
            }
        }


        if (index != -1) {
            this.item[index] = element;
            this.rearL = index;
            //SE VA IMPRIMIENDO LAS VARIABLES PARA IR VISUALIZANDO LAS ACCIONES
            console.log("========PUSH LEFT============")
            console.log('rear:' + this.rearL)
            console.log('front:' + this.frontL)
            console.log(this.item)
            console.log("=======================")
        } else {
            console.log("COLA LLENA")
            this.full = true;
        }

    }

    PeekAll(){
        
    }

     //METODO POP PARA SACAR EL PROXIMO ELEMENTO A SALIR
    PopRigth() {
        //REVISAMOS QUE LA COLA NO ESTE VACIA EN CASI DE QUE SI MANDAMOS MENSAJE 
        if (this.empty) {
            console.log("COLA VACIA")
            return;
        }

        //COLOCAMOS UN UNDEFINED EN LA POSICION DONDE ESTA EL FRONT INDICANDO QUE ESE LUGAR AHORA ESTA VACIO
        this.item[this.frontR] = 0;
        //CAMBIAMOS EL ATRIBUTO FULL A FALSO
        this.full = false;

        //SE VA IMPRIMIENDO LAS VARIABLES PARA IR VISUALIZANDO LAS ACCIONES
        console.log("=========POP===========")
        console.log('rear:' + this.rear)
        console.log('front:' + this.front)
        console.log(this.item)
        console.log("======================")


    }
}



//------------------------AQUI EMPIEZA EL MENU----------------------------

//SE IMPORTA EL MODULO READLINE DE NODEJS PARA LEER  DESDE LA CONSOLA
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


var menuRecursivo = function(bicola) {
    //SE PREGUNTA LA OPCION A ELEGIR
    readline.question('"Elige una opcion:\n1:push por la derecha\n2:push por la izquierda\n6:exit\n:', function(opc) {
        //OPCION 3 CONDICION PARA SALIR DEL MENU
        if (opc == 6) {
            //SE CIERRA EL READLINE
            return readline.close();
        }

        //OPCION 2 MANDA A LLAMAR LA FUNCION RECURSIVA PARA ANADIR ELEMENTOS A LA lista
        if (opc == 1) {
            //SE LLAMA A LA FUNCION DE ANADIR PASANDOLE COMO PARAMETRO LA lista CREADA
            addRigthRecursivo(bicola);
           
        } 
        //OPCION 2 MANDA A LLAMAR LA FUNCION RECURSIVA PARA ANADIR ELEMENTOS A LA lista
        else if (opc == 2) {
            //SE LLAMA A LA FUNCION DE ANADIR PASANDOLE COMO PARAMETRO LA lista CREADA
            addLeftRecursivo(bicola);
           
        } 
       

        //SE VUELVE A LLAMAR EL MENU RECURSIVO PASANDO COMO PARAMETRO EL OBJETO lista
        menuRecursivo(bicola);
    });
};

//FUNCION RECURSIVA PARA PEDIR LA INSERCION DE ELEMENTOS POR LA DERECHA
var addRigthRecursivo = function(bicola) {
    //SE PREGUNTA EL ELEMENTO QUE SE DESEA ANADIR A LA COLA
    readline.question('"Inserta el elemento por la derecha o escribe "menu" para volver al menu principal\n: ', function(item) {
        //CONDICION PARA SALIR DEL MENU ESCRIBIENDO 'exit' EN LA CONSOLA
        if (item == 'menu') {
            menuRecursivo(bicola)
        } else {
            bicola.PushRigth(item)//SE ANADE EL ELEMENTO LLAMANDO EL METODO PUSH DEL OBJETO

            //console.log(lista.lista)
            addRigthRecursivo(bicola)//SE VUELVE A LLAMAR LA MISMA FUNCION
        }
      
    });
};



//FUNCION RECURSIVA PARA PEDIR LA INSERCION DE ELEMENTOS POR LA izquierda
var addLeftRecursivo = function(bicola) {
    //SE PREGUNTA EL ELEMENTO QUE SE DESEA ANADIR A LA COLA
    readline.question('"Inserta el elemento por la izquierda o escribe "menu" para volver al menu principal\n: ', function(item) {
        //CONDICION PARA SALIR DEL MENU ESCRIBIENDO 'exit' EN LA CONSOLA
        if (item == 'menu') {
            menuRecursivo(bicola)
        } else {
            bicola.PushLeft(item)//SE ANADE EL ELEMENTO LLAMANDO EL METODO PUSH DEL OBJETO

            //console.log(lista.lista)
            addLeftRecursivo(bicola)//SE VUELVE A LLAMAR LA MISMA FUNCION
        }
      
    });
};



var bicola = new BiCola(10);
menuRecursivo(bicola);

