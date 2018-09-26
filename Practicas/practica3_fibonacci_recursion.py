#funcion que devuelve la suma de un numero con el anterior de forma recursiva
def Fibonacii(n):
    #si el numero es 0 se retorna 0 y sale de la funcion
    if n == 0:
    	return 0
    #si el numero es 1 se retorna 1 y sale de la funcion    
    elif n == 1:
    	return 1
    else:
        #se suma el resultado de la llamada de las funciones restando en la primera 1 y en la segunda 2
    	return Fibonacii(n-1)+Fibonacii(n-2)


#se llama la funcion de forma recursiva 100 veces
def Llamada(n=1):
    #si el numero es igual a 100 sale de la funcion
	if n==100:
		return
	else:
        #se imprime el resultado de la llamada de la funcion Fibonacci con el parametro que sigue
		print(Fibonacii(n))
        #se vuelve a llamar esta funcion sumandole 1 al parametro n
		Llamada(n=n+1)


Llamada()