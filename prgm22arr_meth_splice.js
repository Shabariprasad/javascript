// array method splice to add or remove


a=['max','miller','mini','manu']

//remove mini from array.
//array.spice(index,howmany item)

a.splice(2,1)
console.log(a);
console.log(`.....................................`);

//remove mini and manu from the array 

a.splice(2,2)
console.log(a);
console.log(`.....................................`);



//add maxwell as third item

a=['max','miller','mini','manu']
a.splice(2,0,'maxwell')
console.log(a);