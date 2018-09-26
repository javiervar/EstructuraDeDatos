#funcion que devuelve la suma de un numero con el anterior de forma recursiva 
def fibonacciRecursivo(num=1):
	#si el numero es 0 se retorna 0 y sale de la funcion
	if num == 0:
		return 0
		#si el numero es 1 se retorna 1 y sale de la funcion
	elif num == 1:
		return 1
	else:
		#se suma el resultado de la llamada de las funciones restando en la primera 1 y en la segunda 2
		return fibonacciRecursivo(num-1)+fibonacciRecursivo(num-2)

print(fibonacciRecursivo(10))