class ColaCircular {
  constructor(size) {
    this.size = size;
    this.item=new Array(size);
    this.front=0;
    this.rear=0;
    this.full=false;
    console.log(this.item)

  }

  Push(element){
  	var index=0;
  	for(var x=0; x<this.size;x++){
  		if(this.item[x]==0){
  			index=x;
  			break;
  		}
  	}

  	if(!this.full){
  		this.item[index]=element
  		
  		if(this.rear==this.size-1)
  			this.full=true;
  		else
  			this.rear=index;

  	}else{
  		console.log('Cola llena')
  	}
  	console.log('rear:'+this.rear)
  	console.log('front:'+this.front)
  }

  Pop(){
  	this.item[0]=undefined;
  	if(this.rear>0)
  		this.front+=1;

  	this.full=false;
  	console.log('rear:'+this.rear)
  	console.log('front:'+this.front)
  	
  }

  get Item(){
  	return this.item
  }
}

const cola=new ColaCircular(5);

cola.Push('1');
cola.Push('2');
cola.Push('3');
cola.Push('4');
cola.Push('5');
cola.Push('5');

console.log(cola.Item);

cola.Pop();
console.log(cola.Item);
cola.Push('5');
console.log(cola.Item[0]);
