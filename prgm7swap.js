/*  write a programe to swap two numbers

 algorithm
 .........
 num1 and num2  
 create temp variable.
 value of num1 added to temp.
 value of num2 added to num1.
 value to temp added to num2.
 display num1 and num2
*/

var num1 =10
var num2 =30
console.log(`value of num1 and num2 before swap ${num1} and ${num2}`);
var temp
temp =num1
num1 =num2
num2 =temp
console.log(`value of num1 and num2 after swap ${num1} and ${num2}`);
console.log('...............................................');

num3 =40
num4 =60
console.log(`value of num1 and num2 before swap ${num3} and ${num4}`);
num3 = num3 + num4  //100
num4 = num3 - num4  //40
num3 = num3 - num4  //60
console.log(`value of num1 and num2 after swap ${num3} and ${num4}`);
