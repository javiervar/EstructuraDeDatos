#Se importa los archivos 
import practica1_numerosNaturales as NN
import practica2_factorialIterativo as FI
import practica2_factorialRecursivo as FR
import practica3_fibonacciIterativo as FbI
import practica3_fibonacciRecursion as FbR
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
		NN.numerosNaturales()
	elif opc==2.1:
		num = input("Ingresar Numero: ")
		print(FI.factorialIterativo(num))
	elif opc==2.2:
		num=input("Ingresar Numero: ")
		print(FR.factorialRecursivo(num))
	elif opc==3.1:
		num=input("Ingresar Numero: ")
		Fb.fibonacciIterativo(num)
	elif opc==3.2:
		num=input("Ingresar Numero: ")
		FbR.fibonacciRecursivo(num)
		