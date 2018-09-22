def factorialIterativo(num=1):
	total=1
	for i in range(1,num+1):
		total*=i

	return total

print(factorialIterativo(5))