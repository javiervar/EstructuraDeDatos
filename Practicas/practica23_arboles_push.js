//SE IMPORTA EL MODULO READLINE DE NODEJS PARA LEER  DESDE LA CONSOLA
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


class Nodo {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}


class Arbol {

    constructor() {
        this.root = new Nodo("A");
    }

    Insertar(element, opc) {

        var newNodo = new Nodo(element);
        this.InsertarNodo(this.root,newNodo);
        
    }


    InsertarNodo(node, newNode, opc) {

        if(node.left!=null&&node.right!=null){
            this.InsertarNodo(node.left,newNode);
        }else if(node.left==null&&node.right!=null){
            node.left=newNode;
        }else{
            node.right=newNode;
        }

        /*
        if (opc == 1) {
            // if left is null insert node here 
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.MenuInserta(node.left,nuevoNodo)

            }
        } else {
            // if right is null insert node here 
            if (node.right === null) {
                node.right = newNode;
            } else {

                this.MenuInserta(node.right,nuevoNodo)

            }
        }

        */


    }


    PeekAll() {
        console.log(JSON.stringify(this.root))
    }



}

//------------------------AQUI EMPIEZA EL MENU----------------------------




var menuRecursivo = function(arbol) {
    //SE PREGUNTA LA OPCION A ELEGIR
    readline.question('"Elige una opcion:\n1:add derecha\n2:add izquierda\n3:PeekAll\n6:exit\n:', function(opc) {
        //OPCION 3 CONDICION PARA SALIR DEL MENU
        if (opc == 6) {
            //SE CIERRA EL READLINE
            return readline.close();
        }

        //OPCION 2 MANDA A LLAMAR LA FUNCION RECURSIVA PARA ANADIR ELEMENTOS A LA lista
        if (opc == 1) {
            //SE LLAMA A LA FUNCION DE ANADIR PASANDOLE COMO PARAMETRO LA lista CREADA
            menuAdd(arbol);
        } else if (opc == 2) {
            menuAddIzquierda(arbol)
        } else if (opc = 3) {
            arbol.PeekAll();
        }
        //SE VUELVE A LLAMAR EL MENU RECURSIVO PASANDO COMO PARAMETRO EL OBJETO lista
        menuRecursivo(arbol);
    });
};

//FUNCION RECURSIVA PARA PEDIR LA INSERCION DE ELEMENTOS 
var menuAdd = function(arbol) {
    //SE PREGUNTA EL ELEMENTO QUE SE DESEA ANADIR A LA COLA
    readline.question('"Inserta el elemento o escribe "menu" para volver al menu principal\n: ', function(item) {
        //CONDICION PARA SALIR DEL MENU ESCRIBIENDO 'exit' EN LA CONSOLA
        if (item == 'menu') {
            menuRecursivo(arbol)
        } else {
            arbol.Insertar(item, 1) //SE ANADE EL ELEMENTO LLAMANDO EL METODO PUSH DEL OBJETO

            //console.log(lista.lista)
            menuRecursivo(arbol) //SE VUELVE A LLAMAR LA MISMA FUNCION
        }


    });
};




var arbol = new Arbol();

menuRecursivo(arbol)