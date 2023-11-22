// --callback function--

//fun def

function greet(name,callback){
    console.log(`hai`,name);
    callback()
}
function callme(){
    console.log(`i am call back function`);
}

//fun call

greet('peter',callme)
console.log(`..................................`);


console.log(`call back function`);

setTimeout(()=>{console.log(`callback function invoked`);},3000)