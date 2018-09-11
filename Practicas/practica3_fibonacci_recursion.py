def Fibonacii(n):
    if n == 0:
    	return 0
    elif n == 1:
    	return 1
    else:
    	return Fibonacii(n-1)+Fibonacii(n-2)


def Llamada(n=1):
	if n==100:
		return
	else:
		print(Fibonacii(n))
		Llamada(n=n+1)

Llamada()