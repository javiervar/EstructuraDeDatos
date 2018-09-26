#Este metodo regresa los primeros 100 numeros naturales de forma recursiva
def numerosNaturales(num=1):
	#condicion para que solo continue mientras que el numero sea menor o igual a 100
	if num<=100:
		#imprime el numero
		print(num)
		#se le suma 1 al numero
		num+=1
		#se vuelve a llamar la funcion con el nuevo valor del parametro
		numerosNaturales(num)

#se llama la funcion
numerosNaturales()

