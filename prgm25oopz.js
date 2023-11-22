//object oriented programming

//class
class Employee{
    //property -variable inside class
    empid
    empname
    empdesg
    empsalary
    //contructers - to initialize properties 
    constructor(id,ename,desg,salary){
        this.empid=id
        this.empname=ename
        this.empdesg=desg
        this.empsalary=salary  //donot need to claa,its class automatically
    }
    //methods - functions inside class

    display(){
        console.log(` employee id is ${this.empid} \n employee name is ${this.empname} \n employee designation is ${this.empdesg} \n employee salary is ${this.empsalary }`);
    }
}

//object crearion

const emp1 = new Employee(1000,'max','developer',10000) //the reference must be unique
emp1.display()
const emp2 = new Employee(1001,'neel','tester',20000)
emp2.display()