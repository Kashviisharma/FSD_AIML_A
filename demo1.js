const num=[1,2,3,4,5];
const b=num[0];
const c=num[1];
//Array destructuring 
// const[b,c]=num;
console.log("b=",b);
console.log("c=",c);
const student={
    name: "Ashish",
    age:40,
    branch:"AIML"
}
const [name,age,branch]=[student.name,student.age,student.branch];
// const name=student.name;
// const age=student.age;
// const branch=student.branch;
console.log("name: ",name);
console.log("age: ",age);
console.log("branch: ",branch);
