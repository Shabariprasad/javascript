numbers=[[10,20,[34,57]],[30,40],[50,60],[23,56],[100,45]]


//find the numbers>50

console.log(numbers.flat(2).filter(num=>num>50));
console.log(`........................................`);

//find the largest number

console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1>num2?num1:num2));
console.log(`........................................`);


//find the smallest numbers

console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1<num2?num1:num2));
console.log(`........................................`);

//find the total sum of all numbers

console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1+num2));
console.log(`........................................`);