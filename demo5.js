 const sum=(...num)=>{
    const s=num.reduce((s,i)=>(s+i));
    return s;
}
 const add=(...num)=>{
    let s=0;
    for(i of num){
        s=s+i;
    }
    return s;
}
export {sum,add};
//named export