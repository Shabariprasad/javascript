//w.a.p to find the sum of the two numbers using function

//function definition
function sum(num1,num2){
    sum=num1+num2
    console.log(`sum of ${num1} and ${num2} is : ${sum}`);
}
//function call
sum(10,20,)
console.log(`...........................................`);

//w.a.p tp find the given number is odd or even 

function oddoreven(num){
    if(num%2==0){
        console.log(`${num} is even`);
    }
    else{
        console.log(`${num} is odd`);
    }
}

oddoreven(6)
oddoreven(7)

console.log(`--another simple way--`);

function oe(num){
    return num%2==0?'even':'odd'
}
console.log(oe(67));
console.log(`...........................`);

//w.a.p to find given num is positive or negetive

function posneg(num3){
    
    return num3>0?'positive': num3<0?'negetive':'nor positive nor negetive'
}
console.log(posneg(0));

console.log(`...........................`);



//w.a.p to check wheather the given number is mobile number or not 

function mobnum(num){
    len=num.toString().length;
    if(len == 10){
        console.log(`${num} : is an valid number`);
    }
    else{
        console.log(`${num} : is an invalid number`);
    }
}
mobnum(8075464904)
mobnum(64748462833)
console.log(`...........................................`);

add(20,30)
 console.log(add(20,30));

//fun def
function add(num1,num2){
    const sum=num1+num2
    return sum
  //  console.log(`sum of${num1} and ${num2} is : ${sum}`);
}
console.log(`...........................................`);

//w.a.p to check the cube of a given number using function

function cube(n){
    return n**3
}
console.log(`cube of a given num is `,cube(3));
console.log(`...........................................`);



//w.a.p to chech the given input is email id or not
//w.a.p to cheack weather a given input starts with q or not
