//loop

//w.a.p to print 3 times

i=1
while(i<=3) {
    console.log(`javascript`);
    i++
}
console.log(`..................................`);

//w.a.p to print numbers from 1 to 5 

i=1
while (i<=5) {
    console.log(i);
    i++
}
console.log(`..................................`);


//w.a.p to print numbers from 5 to 1

i=5
while (i>=1) {
    console.log(i);
    i--
}
console.log(`..................................`);

//w.a.p to print all odd numbers from 1 to 50 

i=1
while (i<=50) {
    if (i%2==1) {
        console.log(i);
    }
    i++
}
console.log(`..................................`);



//w.a.p to print all even numbers from 1 to 50 

i=1
while (i<=50) {
    if (i%2==0) {
        console.log(i);
    }
    i++
}
console.log(`..................................`);

//w.a.p to print sum of all numbers from 1 to 10

i=1
sum=0
while (i<=10) {
    sum=sum+i
    i++
}
console.log(sum);
console.log(`..................................`);

// input  2        3          4
//output  24      369        4936
//result 2+22  3+33+333  4+44+444+4444
//result 2*12    3*123        4*1234  

input = 4
i = 0
str = ` `
sum =0
while(i<input){
    str=str+input
    console.log(str);
    sum=sum+Number(str)
    i++
}
console.log(`result :`, sum);
console.log(`..................................`);


input=4
j=0
str=` `
pro=1
while (j<=input) {
    str=str+j
    j++
    console.log(str);
}
pro=input*str
console.log(pro);
