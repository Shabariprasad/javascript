//w.a.p to find the revers of the number

num=456
console.log(`the given number is : ${num}`);
rem=0
rev=0
while(num>0){
    rem=num%10 //rem=6
    rev=(rev*10) + rem  //rev=6
    num=parseInt(num/10) //456?10=45.6 => 45. then loop exicute for 45 like this
}

console.log(`reverse of the number is : ${rev}`);
