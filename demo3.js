function sum(...num){
    const sum=num.reduce((i,s)=>(s+i));
    return sum;
}
console.log("Sum=",sum(1,2,3,4,5,6,7,8))