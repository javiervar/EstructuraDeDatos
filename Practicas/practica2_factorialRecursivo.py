#funcion recursiva que regresa el factorial de un numero dado
def factorialRecursivo(num=1):
	#si el numero dado es 1 se retorna un 1
	if num==1:
		return 1
	else:
		#se multiplica el num por la misma funcion y se pasa como parametro el numero menos 1
		return num*factorialRecursivo(num-1)

#se llama la funcion con el parametro 5 y se imprime
print(factorialRecursivo(5))