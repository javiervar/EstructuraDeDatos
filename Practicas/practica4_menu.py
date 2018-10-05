#Se importa las practicas anteriores
import practica1_numerosNaturales as NN
import practica2_factorialIterativo as FI
import practica2_factorialRecursivo as FR
import practica3_fibonacciIterativo as FbI
import practica3_fibonacciRecursion as FbR
#DENTRO DEL WHILE SE CREA UN MENU CON LAS SIGUIENTES OPCIONES
while 1:
	print("----------Menu----------")
	print("1: Numeros Naturales")
	print("2.1: Factorial Iterativo")
	print("2.2: Factorial Recursivo")
	print("3.1: Fibonacci Iterativo")
	print("3.2: Fibonacci Recursivo ")
	print(">3: Salir")
	opc = input("Ingresar opcion: ")
	print(opc)
	if opc>4:
		break
	elif opc==1:
		NN.numerosNaturales()#SE LLAMA EL METODO NUMEROS NATURALES DE LA PRACTICA 1
	elif opc==2.1:
		num = input("Ingresar Numero: ")#SE PREGUNTA A QUE NUMERO SE DESEA SACAR EL FACTORIAL
		print(FI.factorialIterativo(num))#SE LLAMA EL METODO PARA SACAR EL FACTORIAL DE MANERA ITERATIVA
	elif opc==2.2:
		num=input("Ingresar Numero: ")#SE PREGUNTA A QUE NUMERO SE DESEA SACAR EL FACTORIAL
		print(FR.factorialRecursivo(num))#SE LLAMA EL METODO PARA SACAR EL FACTORIAL DE MANERA ITERATIVA
	elif opc==3.1:
		num=input("Ingresar Numero: ")#SE PREGUNTA HASTA QUE NUMERO SE SACARA LA SERIE DE FIBONACCI DE MANERA ITERATIVA
		Fb.fibonacciIterativo(num)#SE LLAMA EL METODO PARA SACAR EL FIBONACCI DE MANERA ITERATIVA
	elif opc==3.2:
		num=input("Ingresar Numero: ")#SE PREGUNTA HASTA QUE NUMERO SE SACARA LA SERIE DE FIBONACCI DE MANERA RECURSIVA
		FbR.fibonacciRecursivo(num)#SE LLAMA EL METODO PARA SACAR EL FIBONACCI DE MANERA RECURSIVA
		