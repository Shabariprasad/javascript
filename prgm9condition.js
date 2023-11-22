//write the programe to print 'fizz' is the number is dividable by 3
//'buzz' if the number is divisible by 5
//'fixxbuzz, if the number is divisible by 15

num=26
if (num%3==0) {
    console.log(`fizz`);
}
else if (num%5==0) {
    console.log(`buzz`);
}
else if (num%13==0) {
    console.log(`fizzbuzz`);
}
else{
    console.log(`the number is not divisible by 3,5,13`);
}

console.log(`...........................................`);

//w.a.p to add three numbers and find the largest

num1=4
num2=8
num3=10
if (num1<num2 && num2>num3) {
    console.log(`${num2} is greater`);
}
else if (num2<num1 && num1>num3) {
    console.log(`${num1} is greater`);
}
else{
    console.log(`${num3} is greater`);
}

console.log(`...........................................`);


//w.a.p to input three number and print the second largest number and the three number is desending order

num1=20
num2=40
num3=10
if (num1>num2 && num1>num3) {
    if (num2>num3) {
        console.log(`second largest is :${num2}`);
        console.log(`desending order is : ${num1},${num2},${num3}`);
    }
    else{
        console.log(`second largest is :${num3}`);
        console.log(`desending order is : ${num1},${num3},${num2}`);
    }
}
else if (num2>num1 && num2>num3) {
    if (num1>num3) {
        console.log(`second largest is :${num1}`);
        console.log(`desending order is : ${num2},${num1},${num3}`);
    }
    else{
        console.log(`second largest is :${num3}`);
        console.log(`desending order is : ${num2},${num3},${num1}`);
    }
}
else if (num2>num1 && num2>num3) {
    if (num1>num3) {
        console.log(`second largest is :${num1}`);
        console.log(`desending order is : ${num2},${num1},${num3}`);
    }
    else{
        console.log(`second largest is :${num3}`);
        console.log(`desending order is : ${num2},${num3},${num1}`);
    }
}
else if (num3>num1 && num3>num1) {
    if (num1>num2) {
        console.log(`second largest is :${num1}`);
        console.log(`desending order is : ${num3},${num1},${num2}`);
    }
    else{
        console.log(`second largest is :${num2}`);
        console.log(`desending order is : ${num3},${num2},${num1}`);
    }
}
else{
    console.log(`all are equal`);
}
