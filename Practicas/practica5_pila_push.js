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



var nuevaPila=new Pila(5);


nuevaPila.push("a");
nuevaPila.push("b");
nuevaPila.push("c");
nuevaPila.push("1");
nuevaPila.push("2");
nuevaPila.push("3");






