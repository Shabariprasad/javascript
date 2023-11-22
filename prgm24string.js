//string method
sentance='good morning all'

//print all vowels present in the given sentence

vowels=[`a`,`e`,`i`,`o`,`u`,`A`,`E`,`I`,`O`,`U`]
characters=sentance.split('')
for(let char of characters){
    if(vowels.includes(char)){
        console.log(char);
    }
}
console.log(`....................................`);

console.log(`another simple method using Array.from()`);
Array.from(sentance).filter(char=>vowels.includes(char)).forEach(item=>{console.log(item);})
console.log(`....................................`);



//string method replace

text=`please visit microsoft`
console.log(text);
text1=text.replace(`microsoft`,`google`)
console.log(text1);
