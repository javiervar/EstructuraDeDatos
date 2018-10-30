

class Nodo {
    constructor(data) {
        this.data = data;
        this.next = undefined;
        
    }

}

class ListaEnlazada{

	constructor(){
		this.lista=[]
		this.index=0;
		this.raiz=0;
		this.fin=0;
		this.lista[this.index]=new Nodo("raiz");
	}

	Insertar(element){

		var nuevoNodo = new Nodo(element);

		this.index+=1;
		this.fin=this.index;
		this.lista[this.index]=nuevoNodo;
		this.lista[this.index-1].next=Object.assign({}, nuevoNodo);

	}


}

//------------------------AQUI EMPIEZA EL MENU----------------------------

//SE IMPORTA EL MODULO READLINE DE NODEJS PARA LEER  DESDE LA CONSOLA
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


var menuRecursivo = function(lista) {
    //SE PREGUNTA LA OPCION A ELEGIR
    readline.question('"Elige una opcion:\n1:push\n6:exit\n:', function(opc) {
        //OPCION 3 CONDICION PARA SALIR DEL MENU
        if (opc == 6) {
            //SE CIERRA EL READLINE
            return readline.close();
        }

        //OPCION 2 MANDA A LLAMAR LA FUNCION RECURSIVA PARA ANADIR ELEMENTOS A LA lista
        if (opc == 1) {
            //SE LLAMA A LA FUNCION DE ANADIR PASANDOLE COMO PARAMETRO LA lista CREADA
            addRecursivo(lista);
           
        } 

        //SE VUELVE A LLAMAR EL MENU RECURSIVO PASANDO COMO PARAMETRO EL OBJETO lista
        menuRecursivo(lista);
    });
};

//FUNCION RECURSIVA PARA PEDIR LA INSERCION DE ELEMENTOS 
var addRecursivo = function(lista) {
    //SE PREGUNTA EL ELEMENTO QUE SE DESEA ANADIR A LA COLA
    readline.question('"Inserta el elemento o escribe "menu" para volver al menu principal\n: ', function(item) {
        //CONDICION PARA SALIR DEL MENU ESCRIBIENDO 'exit' EN LA CONSOLA
        if (item == 'menu') {
            menuRecursivo(lista)
        } else {
            lista.Insertar(item)//SE ANADE EL ELEMENTO LLAMANDO EL METODO PUSH DEL OBJETO

            console.log(lista.lista)
            addRecursivo(lista)//SE VUELVE A LLAMAR LA MISMA FUNCION
        }
      

    });
};


var lista=new ListaEnlazada();
menuRecursivo(lista);



