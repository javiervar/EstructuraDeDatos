//FUNCION RECURSIVA QUE RECIBE COMO PARAMETRO UN NUMERO
function numerosRecursivos(num){
	//SI EL NUMERO ES IGUAL A 9 REGRESA UN 0
	if(num>9)
		return 0;
	//SUMA RECURSIVA
	return num+numerosRecursivos(num+1);
}

//SE IMPRIME EL RESULTADO
console.log(numerosRecursivos(1,1))