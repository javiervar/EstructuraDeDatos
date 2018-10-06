#funcion que devuelve la suma de un numero con el anterior de forma recursiva 
def fibonacciIterativo(num=1):
    a, b = 0,1
    while a < num:
        print(a)
        a, b = b, a+b

fibonacciIterativo(50)