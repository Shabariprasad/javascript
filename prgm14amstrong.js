//w.a.p to fin the amstrong number of 3digit number.

num=371
temp=num
rem=0
sum=0
while (num>0) {
    rem=num%10
    sum=sum+rem**3
    num=parseInt(num/10)
}
if(temp==sum){
    console.log(`amstrong`);
}
else{
    console.log(`not amstrong`);
}

console.log(`.............................`);

//w.a.p to display numbers are exponential of a number with range of 8 to 36
//user can input power to find the exponential for a perticular number
//power=2
//display 1 2 3 4 5 6 
//if power=3
//display 1 2 3

power=3
num=1
while (num<=36) {
    if (8<=num**power && num**power<=36) {
        console.log(num);
    }
    num++
    if(num**power==36){
        break;
    }
}

console.log(`.............................`);

//w.a.p to find the fabinoci series of the numbers

