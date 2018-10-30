

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

	PeekAll(){
		for(var l of this.lista){
			console.log(l.data)
		}	
	}

	Buscar(element){
		var index=0;
		var encontrado=false;
		for(var l of this.lista){
			if(l.data==element){
				encontrado=true
				break;
			}
			index+=1;
		}


		if(encontrado){
			console.log(this.lista[index]);
		}else{
			console.log("NO SE ENCONTRO EL ELEMENTO '"+element+"'");
		}
		

	}

	Eliminar(element){
		var index=0;
		for(var l of this.lista){
			if(l.data==element){
				break;
			}
			index+=1;
		}

		console.log(index);

		this.lista.splice(index,1);

		this.lista[index-1].next=Object.assign({}, this.lista[index]);
		this.index-=1;
	
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
    readline.question('"Elige una opcion:\n1:push\n2:Peek All\n3:Buscar\n6:exit\n:', function(opc) {
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
        else if(opc==2){
        	lista.PeekAll();
        }
        else if(opc==3){
        	busquedaRecursiva(lista)
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

            //console.log(lista.lista)
            addRecursivo(lista)//SE VUELVE A LLAMAR LA MISMA FUNCION
        }
      

    });
};

//FUNCION RECURSIVA PARA BUSCAR ELEMENTOS 
var busquedaRecursiva = function(lista) {
    //SE PREGUNTA EL ELEMENTO QUE SE DESEA ANADIR A LA COLA
    readline.question('"Inserta el elemento a buscar o escribe "menu" para volver al menu principal\n: ', function(item) {
        //CONDICION PARA SALIR DEL MENU ESCRIBIENDO 'exit' EN LA CONSOLA
        if (item == 'menu') {
            menuRecursivo(lista)
        } else {
            lista.Buscar(item)//SE ANADE EL ELEMENTO LLAMANDO EL METODO PUSH DEL OBJETO
            busquedaRecursiva(lista)//SE VUELVE A LLAMAR LA MISMA FUNCION
        }
      

    });
};

var lista=new ListaEnlazada();

menuRecursivo(lista);

