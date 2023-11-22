text='hai hello all hello world'

//w.a.p to print the word count of the given text 

//o/p:{hai:1,hello:2,all:1,world:1}

//algorithm

//text is converts to an array have all words

words=text.split(' ')
console.log(words);
console.log(`......................................`);

//create an empty object

obj={}
console.log(`......................................`);


//fetch each word from the array

for(let word of words){
//and check wheather the given is there in the object
     
if(word in obj){
    //if present increase the count
    obj[word]+=1
}
else{
    //else add the word into the object
    obj[word]=1
}
}
//display
console.log(obj);
console.log(`......................................`);

wc={}
text.split(' ').forEach(item=>item in wc?wc[item]=+1:wc[item]=1);
console.log(wc);
console.log(`......................................`);


//if present increase the count 
//else add the word into the object



numArray =[10,20,30,40,30,50,30,60,70,10,40,80]
//w.a.p  to find the number count

obj={}
numArray.forEach(item => item in obj?obj[item]+=1:obj[item]=1)
console.log(obj);
console.log(`......................................`);

pattern = "ABBAABBAB"
//w.a.p to print the first recursive letter -B

character=Array.from(pattern)
console.log(character);
obj={}

for(let char of character){
    if(char in obj){
        console.log(`first recursive letter:`,char);
        break
    }
    else{
        obj[char]=1
    }
}
