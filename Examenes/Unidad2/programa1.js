function numerosRecursivos(num){
	if(num>9)
		return 0;
	return num+numerosRecursivos(num+1);
}

console.log(numerosRecursivos(1,1))