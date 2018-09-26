#funcion para imprimir el factorial de cualquier nuumero
def factorialIterativo(num=1):
	#inicializamos el total en 1
	total=1
	#empezamos la iteracion en 1 hasta el numero proporcionado +1
	for i in range(1,num+1):
		#se multiplica el total por el valor actual de la variable i del for
		total*=i
	#se retorna el total
	return total

print(factorialIterativo(5))