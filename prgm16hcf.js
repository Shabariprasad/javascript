//w.a.p to find the gcd/hcf of a given number

num1=12
num2=28
for(i=1;i<=num1 && i<=num2;i++){
    if(num1%i==0 && num2%i==0){
        hcf=i;
    }
}
console.log(`hcf of ${num1} and ${num2} is ${hcf}`);