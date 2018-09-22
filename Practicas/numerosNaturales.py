def numerosNaturales(num=1):
	if num<=100:
		print(num)
		num+=1
		numerosNaturales(num)

numerosNaturales()

