import numerosNaturales as NN
import factorialIterativo as FI
import factorialRecursivo as FR
while 1:
	print("----------Menu----------")
	print("1: Numeros Naturales")
	print("2.1: Factorial Iterativo")
	print("2.2: Factorial Recursivo")
	print("3.1: Fibonacci Iterativo")
	print("3.2: Fibonacci Recursivo")
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