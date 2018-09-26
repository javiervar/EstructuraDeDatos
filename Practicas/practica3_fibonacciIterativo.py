def fibonacciIterativo(num=1):
    a, b = 0,1
    while a < num:
        print(a)
        a, b = b, a+b

fibonacciIterativo(50)