//multilevel inheritance

class A{
    methodA(){
        console.log(`inside class A`);
    }
}
class B extends A{
    methodB(){
        console.log(`inside class B`);
    }
}
class C extends B{
    methodC(){
        console.log(`inside class C`);
    }
}

const childc = new C
childc.methodC()
childc.methodB()
childc.methodA()