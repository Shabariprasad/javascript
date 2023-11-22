//array method - map

// w.a.p to print the square of the given array

a=[10,11,12,13,14,15]

sq=a.map(num=>num**2)
console.log(sq);

//w.a.p to print the cube of the given array

sq=a.map(num=>num**3)
console.log(sq);
console.log(`..............................................`);
//w.a.p to create a new array with number <=13 increment the number or number >13 
//a=[10,11,12,13,14,15] => [11,12,13,13,14,]

b=[10,11,12,13,14,15]
arr=b.map(num=>num<=13?num+1:num-1)
console.log(arr);
