//nested loop ----- loop within loop

//w.a.p to print the given pattern
// # # # #
// # # # #
// # # # #
// # # # #

for(row=1;row<=4;row++){
    str=``
    for(col=1;col<=4;col++){
            str=str+`  #`
    }
    console.log(str);
}
console.log(`........................`);

//find a pattern
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
for(row=1;row<=4;row++){
    str=` `
    for(col=1;col<=4;col++){
        str=str+`  ${row}`
    }
    console.log(str);
}
console.log(`........................`);


// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

for(row=1;row<=4;row++){
    str=` `
    for(col=1;col<=4;col++){
        str=str+`  ${col}`
    }
    console.log(str);
}
console.log(`........................`);

// *
// * *
// * * *
// * * * *

for(row=1;row<=4;row++){
    str=` `
    for(col=1;col<=row;col++){
        str=str+` *`
    }
    console.log(str);
}
console.log(`........................`);


//      *
//     * *
//    * * *
//   * * * * 


for(row=1;row<=5;row++){
    str=` `
    for(cols=1;cols<=5-row;cols++){
        str=str+` `
    }
    for(i=1;i<(row+1);i++){
        str=str+` *`
    }
    console.log(str);
}
console.log(`........................`);


// 1
// 1 2
// 1 2 3 
// 1 2 3 4

for(row=1;row<=4;row++){
    str=` `
    for(col=1;col<=row;col++){
        str=str+ col+` `
    }
    console.log(str);
}
console.log(`........................`);


// 1
// 2 2
// 3 3 3 
// 4 4 4 4

for(row=1;row<=4;row++){
    str=` `
    for(col=1;col<=row;col++){
        str=str+ row+` `
    }
    console.log(str);
}
console.log(`........................`);


// * * * *
// * * *
// * *
// *

for(row=4;row>=1;row--){
    str=` `
    for(col=1;col<=row;col++){
        str=str+ ` *`
    }
    console.log(str);
}
console.log(`........................`);


// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

for(row=1;row<=5;row++){
    str=` `
    for(col=1;col<=row;col++){
        str=str+` *`
    }
    console.log(str);
}
for(row=4;row>=1;row--){
    str=` `
    for(col=1;col<=row;col++){
        str=str+ ` *`
    }
    console.log(str);
}

//      *
//     * *
//    * * *
//   * * * * 

for(row=1;row<=5;row++){
    str=` `
    for(cols=1;cols<=5-row;cols++){
        str=str+` `
    }
    for(i=1;i<(row+1);i++){
        str=str+` *`
    }
    console.log(str);
}

console.log(`--another way--`);

for(row=1;row<=5;row++){
    str=` `
    for(i=5;i>row;i--){
        str=str+` `
    }
    for(col=1;col<=row;col++){
        str=str+` *`
    }
    console.log(str);
}
console.log(`........................`);

//      *
//     * *
//    * * *
//   * * * * 
//  * * * * * 
//   * * * *
//    * * *
//     * *
//      *

for(row=1;row<=5;row++){
    str=` `
    for(i=5;i>row;i--){
        str=str+` `
    }
    for(col=1;col<=row;col++){
        str=str+` *`
    }
    console.log(str);
}
for(row=4;row>=1;row--){
    str=` `
    for(i=5;i>row;i--){
        str=str+` `
    }
    for(col=1;col<=row;col++){
        str=str+` *`
    }
    console.log(str);
}
console.log(`........................`);


//hollow triangle

//              *
//           *     *
//        *           *
//     *  *  *  *  *  *  * 

for(row=1;row<=4;row++){
    str=` `
    for(col=1;col<=7;col++){
        if(row+col==5 || col-row==3 || row==4){
            str=str+ `*`
        }
        else{
            str=str+ ` `
        }
    }
    console.log(str);
}
console.log(`........................`);


// * * * * *
// *       *
// *       *
// *       *
// * * * * *

for(row=1;row<=5;row++){
    str=` `
    for(col=1;col<=5;col++){
        if(row==1 || row==5 || col==1 || col==5 ){
            str=str+ `*`
        }
        else{
            str=str+ ` `
        }
    }
    console.log(str);
}
console.log(`........................`);



// 0
// 0 1
// 1 0 1
// 0 1 0 1

for(row=1;row<=4;row++){
    str=` `
    for(col=1;col<=row;col++){
        i=row+col
        if(i%2==0){
            str=str+ `1`
        }
        else{
            str=str+ `0`
        }
    }
    console.log(str);
}
console.log(`........................`);
