

weekdays =['mon','tues','wed','thurs']
weekdays.push('fri')
console.log(weekdays); 

weekdays.push('sat')
console.log(weekdays); //add in the last

weekdays.unshift('sun')
console.log(weekdays); //added in the first

weekdays.pop()
console.log(weekdays); //delet the last array

weekdays.shift()
console.log(weekdays); //delete the first array

console.log('.........................................');


//diff way of display array
//with for

arr =['apple','orange','grapes','mango','stawberry','kivi']

for(index=0;index<arr.length;index++){
    console.log(arr[index]);
}
console.log('.........................................');

//with for in

for(let i in arr){
    console.log(arr[i]);
}
console.log('.........................................');

for(let fruit of arr){
    console.log(fruit);
}
console.log('.........................................');


expense = [12000,23000,40000,34000,55000,24000,10000,14000]

//find the lowest expense
lowest = expense[0]
for(let num of expense){
    if(num<=lowest){
        lowest=num
    }
}
console.log(lowest);
console.log('.........................................');



//find the shortest expense

highest = expense[0]
for(let num of expense){
    if(num>=highest){
        highest=num
    }
}
console.log(highest);
console.log('.........................................');


//find the total expense

sum = 0
for(let num of expense){
    sum+=num
}
console.log(`total expense is :`,sum);
console.log('.........................................');


//var arr=[10,11,12,3,2,4,56]
//check wheather 2 is present in the array or not

var arr=[10,11,12,3,2,4,56]
searchitem = 2
ispresent = false
for(let num of arr){
    if(num==searchitem){
        ispresent = true
        break;
    }
}
console.log(ispresent?`present`:`notpresent`);
console.log('.........................................');

//input =[4,5,6]
//output =[11,10,9]

input=[4,5,6]
output=[]
sum=0
for(let num of input){
    sum+=num
}
for(let num of input){
    output.push(sum-num)
}
console.log(output);
console.log('.........................................');

//w.a.p to prit duplicate element from the given array? ans:10,20,30

a=[10,20,30,20,30,40,50,60,10]
isduplicate=false
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            isduplicate=true
            console.log(a[i]);
        }
    }
}
if(isduplicate==false){
    console.log(`no duplicate`);
}
console.log('.........................................');



//w.a.p to print pairs whose pair sum is 6.  ans:2,4
b=[2,3,4,5]
pairsum=7
nopairs=false
for(i=0;i<b.length;i++){
    for(j=i+1;j<b.length;j++){
        if(b[i]+b[j]==pairsum){
            nopairs=true
            console.log(`${b[i]},${b[j]}`);
        }
    }
}
!nopairs&&console.log(`nopairs`);
console.log('.........................................');





//w.a.p to print common number from a given array. ans:11,20,30
p=[10,11,12,20,30]
q=[11,20,25,30,33]

isfound=false
count=0
for(let i of p){
    for(let j of q){
        count++
        if(i==j){

            isfound=true
            console.log(i);
            break;
        }
    }
}
console.log(count);
!isfound&&console.log(`no commom numbers`);
console.log('.........................................');


