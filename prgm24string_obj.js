//object creation:

//[1000,`neel`,`developers`,`kochi`,25000,3]

employee={
    empid:1000,
    empname:"neeel",
    empdesig:"developers",
    emplocation:"kochi",
    empsalary:25000,
    
}

//display the object 
console.log(employee);
console.log(`............................................`);

//display a perticular value - object_name.key or object_name["key"]
console.log(`employee name is ${employee.empname}`);
console.log(`employee name is ${employee["empname"]}`);
console.log(`............................................`);

//display the salary of the employeee
console.log(`employee salary is ${employee.empsalary}`);
console.log(`............................................`);

//display only the key of the object

for(let key in employee){
    console.log(key);
}
console.log(`............................................`);


//check weather employee location is present or not if the present print location else print not available

if('emplocation' in employee){
    console.log(`present`);
}
else{
    console.log(`not available`);
}
console.log(`emplocation is ${'emplocation' in employee?'present':'not available'}`);
console.log(`............................................`);

//add key:object_name["key"]=value

employee["empexperience"]=3
console.log(employee);
console.log(`............................................`);



// check weather employee gender is present or not if present print gender else add new key as empgender

"empGender" in employee?console.log(`present`):employee["empGender"]='male';
console.log(employee);
console.log(`............................................`);


