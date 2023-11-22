//method overloading

class A{
    methodA(){
        console.log(`first method`);
    }
    methodA(n){
        this.n1=n
        console.log(`inside secont method ${this.n1}`);
    }
}

const obj = new A()

obj.methodA()  //first method

obj.methodA(5)  //inside second method ${this.n1}

console.log(`...........................................`);


// function overloading using spread operators

function add(...arg){
    console.log(arg);

    console.log("sum : ",arg.reduce((n1,n2)=>n1+n2))
}

add(10,20,30);

console.log(`...........................................`);

//method overrinding


class S{
    methods(){
        console.log('parent class');
    }
}

class N extends S{
    methods(){
        console.log('child class');
    }
    methods(){
        console.log('child1 class');
    }
}


const object = new N

object.methods()
