function Pila(size) {
  this.size = size;
  this.item=[];
  this.empty=true;
  this.index=0;
}

Pila.prototype.push = function(item) {
  	if(this.index!=this.size){
  		this.item[this.index]=item;
  		this.index+=1;
  		this.empty=false;
	}else{
		console.log("no se puede agregar mas");
	}
};

Pila.prototype.pop = function() {
	if(!this.empty){
		var i=this.item.length-1;
		this.item.splice(i,1);
		this.index-=1;
		console.log(this.index)
		if(this.index==0){
			this.empty=true;
		}
	}else{
		console.log("Ya no hay elementos")
	}
  	
};

Pila.prototype.peek = function(opc) {

	if(opc==1){
		console.log(this.item[this.index-1]);
	}else if(opc==2){
		console.log(this.item);
	}else{
		const readline = require('readline').createInterface({
  			input: process.stdin,
  			output: process.stdout
		})

		readline.question("Que elemento deseas buscar?", (name) => {
  			console.log(name)
  				var encontrado=false;
				for(var x in this.item){
					if(this.item[x]===name){
						encontrado=true;
						console.log({element:this.item[x],index:x})
					}
				}
				if(!encontrado)
					console.log("no existe el elemento "+name);
  				readline.close()
		})
		
		
		
	}
  	
};


Pila.prototype.peekAll = function() {
  	return this.item
};

var nuevaPila=new Pila(5);


nuevaPila.push("a");
nuevaPila.push("b");
nuevaPila.push("c");
nuevaPila.push("1");
nuevaPila.push("2");
nuevaPila.push("3");
nuevaPila.peek(1)
nuevaPila.peek(2)
nuevaPila.peek(3)






