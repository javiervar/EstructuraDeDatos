def fibonacciRecursivo(num=1):
	if num == 0:
		return 0
	elif num == 1:
		return 1
	else:
		return fibonacciRecursivo(num-1)+fibonacciRecursivo(num-2)

print(fibonacciRecursivo(10))