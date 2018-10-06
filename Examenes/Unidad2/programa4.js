//SE DEFINE LA CLASE 'COLA' CON SUS RESPECTIVOS ATRUBUTOS
function Cola(size) {
    //TAMANO DE LA COLA
    this.size = size;
    //ARREGLO DE ELEMENTOS
    this.item = [];
    //SE INICIALIZA EL INDEX EN UNO 
    this.index = 1;
    //ATRIBUTO PARA SABER SI ESTA LLENA LA COLA
    this.full = false;
    //SE INICIALIZA LOS ITEMS EN 0 DEPENDIENDO DEL TAMANO INGRESADO
    for (var x = 0; x < size; x++) {
        this.item[x] = 0;
    }
}


//SE LE AGREGA UN METODO ADD A LA CLASE COLA 
Cola.prototype.add = function(item) {
    //BUSCAR INDICE MAS CERCANO VACIO

    //SI EL ELEMENTO INGRESADO ES '0' SE MANDA UN MENSAJE DICIENDO QUE NO SE PUEDE INGRESAR EL 0
    if (item == 0) {
        console.log("No se pueden agregar 0");
        //SI LA COLA NO ESTA LLENA SE AGREGA EL ELEMENTO
    } else if (!this.full) {
        //INDICE DESOCUPADO MAS PROXIMO
        var index=0
        //SE BUSCA EL INDICE VACIO QUE ESTE AL FINAL DE LA COLA
        for(var indice in this.item){
            if(this.item[indice]==0){
                index=indice;
            }
        }
        //SE AGREGA EL ELEMENTO EN EL INDICE CORRESPONDIENTE
        this.item[index] = item+this.index;
        //SE SUMA UNO AL INDICE
        this.index +=1;
        
        //SE BUSCA SI AUN EXISTE ESPACIO DENTRO DE LA COLA
        var flagHayEspacio=false;
        for(var indice in this.item){
            if(this.item[indice]==0){
                flagHayEspacio=true;
                break;
            }
        }
        //SI NO EXISTE ESPACIO SE CAMBIA LA VARIABLE FULL A VERDADERA
        if(!flagHayEspacio)
            this.full=true;


        //SI LA COLA ESTA SE IMPRIME EL SIGUIENTE MENSAJE
    } else {
        console.log("LO SENTIMOS SOLO SE PUEDEN ATENDER  5 CLIENTES POR CAJA")
    }
}

//A LA CLASE POP SE LA AGREGA EL METODO POP
Cola.prototype.pop = function() {

    //SE BUSCAN DATOS EN LA COLA PARA COMPROVAR QUE NO ESTE VACIA
    var flagContieneDatos=false;
    //SE ITERAN TODOS LOS ITEMS
    for(var x of this.item){
        //SI UN ITEM NO ES IGUAL A 0 SIGNIFICA QUE NO ESTA VACIA POR LO TANTO CAMBIAMOS EL FLAG A TRUE
        if(x!=0){
            flagContieneDatos=true;
            break
        }
    }

    //CONDICION PARA VALIDAR SI LA COLA TIENE DATOS
    if (flagContieneDatos) {
        //CICLO FOR PARA RECORRER LOS CEROS
        for (var x = this.size - 1; x >= 0; x--) {
            //SI EL INDICE ES 0 SE CAMBIA EL VALOR DE ESA POSICION A 0
            if (x == 0){
                this.item[x] = 0;
                this.full = false
            }
            else{
                this.item[x] = this.item[x - 1];//SI EL INDICE ES DIFERENTE DE 0 SE  COLOCA EN LA POSICION ACTUAL EL VALOR DE LA POSICION ANTERIOR
            }
        }


    } else {
        //SE REGRESA NO HAY CLIENTES SI LA COLA ESTA VACIA
        console.log("NO HAY CLIENTES FORMADOS PARA ATENDER");
    }
}

//SE AGREGA EL METODO PEEKALL A LA CLASE COLA
Cola.prototype.peekAll = function() {
    //SE BUSCAN DATOS EN LA COLA PARA COMPROVAR QUE NO ESTE VACIA
    var flagContieneDatos=false;
    //SE ITERAN TODOS LOS ITEMS
    for(var x of this.item){
        //SI UN ITEM NO ES IGUAL A 0 SIGNIFICA QUE NO ESTA VACIA POR LO TANTO CAMBIAMOS EL FLAG A TRUE
        if(x!=0){
            flagContieneDatos=true;
            break
        }
    }

    if(flagContieneDatos){
        console.log(this.item);
    }else{
        console.log("NO HAY CLIENTES FORMADOS PARA ATENDER");
    }

    
}


//AUI EMPIEZA TODO EL MENU

//SE IMPORTA EL MODULO READLINE DE NODEJS PARA LEER  DESDE LA CONSOLA
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})



//FUNCION RECURSIVA PARA PODER ELEGIR SI VA AGREGAR O QUITAR DE LA COLA
var menuRecursivo = function(cola) {
    console.log("\n\n--------------------------------------");
    console.log("               CLIENTES");
    console.log("--------------------------------------");
    cola.peekAll()
    console.log("--------------------------------------");
    //SE PREGUNTA LA OPCION A ELEGIR
    readline.question('"Elige una opcion:\n1:Nuevo cliente\n2:Atender cliente\n3:Cerrar caja\n:', function(opc) {
        //OPCION 3 CONDICION PARA SALIR DEL MENU
        if (opc == 3){
        	//SE CIERRA EL READLINE
            return readline.close();
        }

        //OPCION 2 MANDA A LLAMAR LA FUNCION RECURSIVA PARA ANADIR ELEMENTOS A LA COLA
        if (opc == 1) {
        	//SE LLAMA A LA FUNCION DE ANADIR 
            cola.add("Cliente")
            //OPCION 2 PARA LLAMAR EL METODO  POP Y REMOVER EL PRIMER ELEMENTO QUE ENTRO A LA COLA
        } else if (opc == 2) {
        	//SE LLAMA AL METODO POP DEL OBJETO COLA
            cola.pop();
           
        }

        //SE VUELVE A LLAMAR EL MENU RECURSIVO PASANDO COMO PARAMETRO EL OBJETO COLA
        menuRecursivo(cola);
    });
};


var cola = new Cola(5);
menuRecursivo(cola);

