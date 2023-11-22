a=[1,2,3,4,5,6,7]

// find the heighest value
heighest=a.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(heighest);
console.log(`.........................`);

// find the lowest value
lowest=a.reduce((num1,num2)=>num2>num1?num1:num2)
console.log(lowest);
console.log(`.........................`);

//find the sum
sum=a.reduce((num1,num2)=>num1+num2)
console.log(sum);