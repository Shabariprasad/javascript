p = [10,11,12,20,30]
q = [11,20,25,30,33]
 a=0
 b=0
 ispresent=false
 count=0
 while(a<p.length && b<q.length){
    count++
    if(p[a]==q[b]){
        console.log(p[a]);
        ispresent=true
        a++
        b++
    }
    else if(p[a]<q[b]){
        a++
    }
    else if(p[a]>q[b]){
        b++
    }
 }
 console.log(count);
 !ispresent&&console.log('nocommon numn=ber');
console.log(`------------------------------------`);


 //w.a.p to print the numbers less than 10 from the given array ans : 2 4 7 9
 
 c=[[10,20],[34,56],[2,4],[57,86],[7,9]]

 for(let num of c){
    for(let n of num){
        if(n<10){ 
        console.log(n);
        }
    }
 }


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