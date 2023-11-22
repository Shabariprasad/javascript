 class Student{
    stdid
    stdname
    stdmark
    stdclasses

    constructor(id,ename,mark,classes){
        this.stdid=id
        this.stdname=ename
        this.stdmark=mark
        this.stdclasses=classes
    }
    display(){
        console.log(` student id is ${this.stdid} \n student name is ${this.stdname} \n student mark is ${this.stdmark} \n student class is ${this.stdclasses}`);
 }

}

const std1= new Student(1,'naveen',85,'10th')
std1.display()
const std2= new Student(2,'arya',41,'12th')
std2.display()