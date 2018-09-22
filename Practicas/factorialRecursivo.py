def factorialRecursivo(num=1):
	if num==1:
		return 1
	else:
		return num*factorialRecursivo(num-1)

print(factorialRecursivo(5))