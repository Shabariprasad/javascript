student={
    stdid:1,
    stdname:"amar",
    stdage:18,
    stdrollnumber:54,
    vaccinated:'yes'
}
console.log(student);

"stdGender" in student?console.log(`present`):student["stdGender"]='male';
console.log(student);
console.log(`............................................`);

//object.assign

Object.assign(student,{location:'thrissur'})
console.log(student);
console.log(`............................................`);


//to update the value of the object 

student.stdrollnumber+=3
console.log(student);
console.log(`............................................`);


//to delete an item 

console.log(delete student.vaccinated);
console.log(student);
console.log(`............................................`);
