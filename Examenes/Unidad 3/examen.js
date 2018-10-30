class Nodo {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.back=null;
        
    }

}

class ListaEnlazadaDoble{

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

		nuevoNodo.back=Object.assign({}, this.lista[this.index-1]);
		this.lista[this.index]=nuevoNodo;

		this.lista[this.index-1].next=Object.assign({}, nuevoNodo);

		console.log("Se inserto elemento "+element)
		
	}

	LeerTodo(){
		console.log(this.lista)
	}

	LeerIzquierda(){
		console.log("-- Leer por izquierda--")
		var clone=this.lista.slice(0)
		for(var nodo of clone){
			console.log(nodo.data)
		}
	}

	LeerDerecha(){
		console.log("--Leer por derecha--")
		var clone=this.lista.slice(0)
		for(var nodo of clone.reverse())
			console.log(nodo.data)
	}

	LeerFinalDerecho(){
		console.log("final lado derecho")
		console.log(this.lista[this.fin].data)
	}

	LeerFinalIzquierdo(){
		console.log("final lado izquierdo")
		console.log(this.lista[this.raiz].data)
	}

	LeerRaiz(){
		console.log("--Leer Raiz--")
		console.log(this.lista[this.raiz]);
	}

	Buscar(elemento){
		var existe=false;
		var index=-1;
		for(var i in this.lista){
			if(this.lista[i].data==elemento){
				index=i;
				existe=true;
				break
			}
		}
		if(existe){
			console.log("Se econtro elemento",this.lista[index])
		}else{
			console.log("El elemento "+elemento+" no existe!")
		}
	}



	Eliminar(elemento){
		var existe=false;
		var index=-1;
		for(var i in this.lista){
			if(this.lista[i].data==elemento){
				index=i;
				existe=true;
				break
			}
		}

		if(existe){
			if(index==this.raiz){
				this.raiz+=1
				if(this.lista.length-1>index){
					this.lista[index+1].back=null;
				}
				
			}else if(this.index>index){
				
				var nodoSiguiente=this.lista[parseInt(index)+1];
				nodoSiguiente.back=Object.assign({}, this.lista[index-1]);
				this.lista[index-1].next=Object.assign({}, nodoSiguiente);

			}else{
				this.lista[index-1].next=null;
			}
			
			//ELIMINAMOS EL NODO ENCONTRADO
			this.lista.splice(index,1);
			this.index=this.index-1;
			this.fin=this.index;

			console.log("Se elimino el elemento "+elemento)

		}else{
			console.log("El elemento a eliminar no existe!")
		}
	}


}

//-------------------------------------DATOS
var lista=new ListaEnlazadaDoble();

lista.Insertar(1)
lista.Insertar(2)
lista.Insertar(3)
lista.Insertar(4)
lista.Insertar(5)
lista.Insertar(6)
lista.Insertar(7)
lista.Insertar(8)
lista.Insertar(9)

lista.LeerIzquierda();
lista.LeerDerecha();

lista.Insertar(10)
lista.Insertar(11)
lista.Insertar(13)

lista.Eliminar(8)
lista.Eliminar(1)

lista.LeerRaiz();

lista.Buscar(0)
lista.Buscar(7)
lista.Buscar(8)
lista.Buscar(1)

lista.LeerFinalDerecho();
lista.LeerFinalIzquierdo();
