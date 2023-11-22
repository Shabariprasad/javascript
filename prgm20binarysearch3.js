//w.a.p to print pairsum whose pair sum is 6. 
d=[2,3,4,5]
pairsum=6
low=0
up=d.length-1
ispresent=false
count=0
while(low<up){
   count++
   currentsum=b[low]+b[up]
   
   if(currentsum==pairsum){
       console.log(`(${b[low]},${b[up]})`);
       ispresent=true
       low++
   }
   else if(currentsum<pairsum){
       low++
   }
   else if(currentsum>pairsum){
       up--
   }
}
!nopairs&&console.log('no pairs');
console.log(count);