var car={
    name:'boleno',
    model:'hatch batch',
    manufacture:'maruti',
    price:'10 lakh'
}
//display car name and its manufacture name

console.log(`car:${car.name} \nmanufacture name : ${car.manufacture} \nprice : ${car.price}`);
console.log(`........................................`);

//check model key is available in car,if yes then display value

console.log("model" in car?`car model is : ${car.model}`:'key not available');
console.log(`........................................`);

//add 'varient' key to car with value is 'manuel'

car.varient=["manuel"]
console.log(car);
console.log(`........................................`);

//insert another value of varient key car with value as automatic

car.varient.push("automatic")
console.log(car);
console.log(`........................................`);

//add color key to car with value as red,white,,blue

car.colour=["red",'white','blue']
console.log(car);
console.log(`........................................`);
