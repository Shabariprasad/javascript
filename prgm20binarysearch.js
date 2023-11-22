/* var arr = [10,11,12,3,2,4]

arr.sort((num1,num2)=>num1-num2)
console.log(`assenting order`,arr);
arr.sort((num1,num2)=>num2-num1)
console.log(`decenting order`,arr); */

/*binary search [algorithm]

  1)find the array
  2)find the mid
  3)compare mid with search
    // mid == searchitem
           =>print the number is found
    // mid < searchitem
           => low = mid+1   
    // mid > searchitem
           => up = mid-1
*/

var arr = [10,11,12,3,2,4]

searchitem=12
low=0
up=arr.length-1
ispresent = false
count =0
//sort
arr.sort((num1,num2)=>(num1-num2))
while(low<=up){
  count++
  mid=Math.floor((low+up)/2)
  if(arr[mid]==searchitem){
    ispresent=true
    break
  }
  else if(arr[mid]<searchitem){
    low = mid+1
  }
  else if(arr[mid]>searchitem){
    up = mid-1
  }
}
console.log(count);
console.log(ispresent?`present`:'not present');
