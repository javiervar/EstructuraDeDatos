
 function potencia(n){
 	if(n==1)
 		return 2

 	return 2*potencia(n-1)
 }


 console.log(potencia(8));