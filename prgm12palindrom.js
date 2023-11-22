

num=454
console.log(`the given number is : ${num}`);
rem=0
rev=0
temp=num
while(num>0){
    rem=num%10 
    rev=(rev*10) + rem 
    num=parseInt(num/10) 
}
if (temp==rev) {
    console.log(`the given number is palindrom`);
}
else{
    console.log(`the given number is not palindrom`);

}