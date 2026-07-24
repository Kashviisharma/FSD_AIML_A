const student={
    name:"Kashvi",
    age:20
};
const student_new={...student};
student_new.address={
    stree11:"Sector-1",
    street2:"Vaishali",
    city:"Ghaziabad",
    pincode:201010,
}
console.log("Original: ",student);
console.log("New One: ",student_new);