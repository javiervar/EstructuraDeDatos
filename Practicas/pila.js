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

Pila.prototype.peek = function(index) {
	if(index>this.index||index<0){
		return "no existe el index "+index
	}else{
		return this.item[index]
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

console.log("peek 3")
console.log(nuevaPila.peek(3))
console.log("peek 6")
console.log(nuevaPila.peek(6))
console.log("peek All")
console.log(nuevaPila.peekAll())

console.log("--------------------------")
console.log("pop 1")
nuevaPila.pop()
console.log(nuevaPila.peekAll())

console.log("pop 2")
nuevaPila.pop()
console.log(nuevaPila.peekAll())

console.log("pop 3")
nuevaPila.pop()
console.log(nuevaPila.peekAll())

console.log("pop 4")
nuevaPila.pop()
console.log(nuevaPila.peekAll())

console.log("pop 5")
nuevaPila.pop()
console.log(nuevaPila.peekAll())

console.log("pop 6")
console.log(nuevaPila.pop());
console.log(nuevaPila.peekAll())

nuevaPila.push("hola");
console.log(nuevaPila.peek(0))




