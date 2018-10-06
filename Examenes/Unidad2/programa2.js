//FUNCION RECURSIVA PARA SACAR LA POTENCIA DE 2^N
 function potencia(n){
 	//SI N ES IGUAL A 0 REGRESA 1
 	if(n==0)
 		return 1
 	//SI N ES IGUAL A 1 REGRESA 2
 	if(n==1)
 		return 2
 	//SE MULTIPLICA 2 * LA FUNCION RECURSIVA RESTANDOLE 1 A N
 	return 2*potencia(n-1)
 }

//SE IMPRIME EL RESULTADO
 console.log(potencia(10));