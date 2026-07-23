function register(cb){
    setTimeout(()=>{
        console.log("register here");
        cb();
    },6000)
    
}
function login(cb){
    setTimeout(()=>{
        console.log("login data");
        cb();
    },9000)
}
function getData(cb){
    setTimeout(()=>{
        console.log("fetch data");
        cb();
    },6000)
}
function display(cb){
   setTimeout(()=>{
        console.log("display data");
        cb();
    },1000)
}
//callback hell
register(()=>{
    login(()=>{
        getData(()=>{
            display()
        })
    })
});

console.log("call Another app");