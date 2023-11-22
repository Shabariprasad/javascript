// arrat method filter
a=[10,11,12,13,14,15]

// display all even number from an array

even=a.filter(num=>num%2==0)
console.log(even);
console.log(`........................`);


// display all odd number from an array

even=a.filter(num=>num%2!=0)
console.log(even);
console.log(`........................`);
 
//display all numbers greater than 13

num=a.filter(num=>num>13)
console.log(num);
  

//   array method some

num1=a.some(num1=>num1>13)
console.log(num1?'yes':'no');
  