import sys
from pprint import pprint


class Nodo:

    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


class Arbol:

    def __init__(self):
        self.raiz = Nodo("raiz")

    def Insertar(self, element):
        nuevoNodo = Nodo(element)
        self.InsertaNodo(self.raiz, nuevoNodo)

    def InsertaNodo(self, nodo, nuevoNodo):
        print("=================================")
        print("\nHacia que lado?\n")
        opc = input("1:Izquierda\n2:Derecha\n:")
        print("================================")
    	if opc == 1:
    		if nodo.left == None:
    			nodo.left = nuevoNodo
    		else:
    			self.InsertaNodo(nodo.left, nuevoNodo)
    	else:
    		if nodo.right == None:
    			nodo.right = nuevoNodo
    		else:
    			self.InsertaNodo(nodo.right, nuevoNodo)

    def InOrder(self):
        print("\t IN ORDER")
        self.ImprimirInOrder(self.raiz)

    def PreOrder(self):
        print("\t PRE ORDER")
        self.ImprimirPreOrder(self.raiz)

    def PostOrder(self):
        print("\t POST ORDER")
        self.ImprimirPostOrder(self.raiz)
        

    def ImprimirInOrder(self,nodo):
        if nodo.left:
            self.ImprimirInOrder(nodo.left)
        print(nodo.data),
        if nodo.right:
            self.ImprimirInOrder(nodo.right)

    def ImprimirPreOrder(self,nodo):
        print(nodo.data),
        if nodo.left:
            self.ImprimirPreOrder(nodo.left)
        if nodo.right:
            self.ImprimirPreOrder(nodo.right)

    def ImprimirPostOrder(self,nodo):
        if nodo.left:
            self.ImprimirPostOrder(nodo.left)
        if nodo.right:
            self.ImprimirPostOrder(nodo.right)
        print(nodo.data),



arbol=Arbol()

while(True):
    print("\n\n=================================")
    print("\t MENU")
    opc=input("1:Insertar\n2:InOrder\n3:PreOrder\n4:PostOrder\n6:Salir\n:")
    print("=================================")
    if opc==1:
        element=input('Inserta elemento:')
        arbol.Insertar(element)
    elif opc==2:
        arbol.InOrder()
    elif opc==3:
        arbol.PreOrder()
    elif opc==4:
        arbol.PostOrder()
    elif opc==6:
        sys.exit()

	

