//operators


//1.assignment operators= '=' /* if we use the assign the value assign in opp. direction */
//2.arithematic operators= + - * / % **  //


 var x=10
 var y=30
 
 console.log(`sum of x and y is : ${x+y}`);
 console.log(`diff of x and y is : ${x-y}`);
 console.log(`mul of x and y is : ${x*y}`);
 console.log(`div of x and y is : ${x/y}`);
 console.log(`rem of x and y is : ${x%y}`);
 console.log('.............................');


// relational operators = > < >= <= == === //

num1 = 10
num2 = '10'
console.log(`is ${num1} greater than ${num2} : ${num1==num2}`);
console.log(`is ${num1} equal to ${num2} : ${num1===num2}`);
console.log('.............................');



/* logical operators 
 AND-&&
 ........
 T && T = T
 T && F = F
 F && T = F
 F && F = F

 OR-\\
 ...
 T \\ T = T
 T \\ F = T
 F \\ T = T
 F \\ F = F

NOT-!
...
!T = F
!F =T

*/

a = 10
console.log(`5<a<20 : ${5<a && a<20} `);
console.log(`5<a<20 : ${5<a || a<20} `);
console.log('.............................');

a = 30
console.log(`5<a<20 : ${5<a && a<20} `);
console.log(`5<a<20 : ${5<a || a<20} `);
console.log('.............................');


/* incremental(++)  / decremental(--) */

inc = 10
inc++
console.log(inc);

dec = 10
dec--
console.log(dec);
console.log('.....................');

inc1 = 10
console.log(`initial value : ${inc1}`);//10
console.log(`incrimented : ${inc1++}`);//10
console.log(`after increment : ${inc1}`);//11
console.log('...........................');

inc1 = 10
console.log(`initial value : ${inc1}`);//10
console.log(`incrimented : ${++inc1}`);//11
console.log(`after increment : ${inc1}`);//11
console.log('...........................');

/* short hand operators  
  += -= *= /=
  x=x+10 ->> x+=10
*/ 

var short =10
short +=10 //short = short+10
console.log(`result =`, short);

var short1
short1 -=20
console.log(`result =`, short);
console.log('...........................');


/* terminary operators

 */
var age=18
console.log(age>=18?`eligible` :`not eligible`);
console.log('...........................');



