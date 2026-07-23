
function register(cb){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
        console.log("register data");
    },8000)
   });
    
}
function login(cb){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
        console.log("login data");
    },8000)
   });
}
function getData(cb){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
        console.log("fetch data");
    },8000)
   });
}
function display(cb){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve();
        console.log("display data");
    },8000)
   });
}
//callback hell
register(()=>{
    login(()=>{
        getData(()=>{
            display()
        })
    })
});
// register().then(login)
//           .then(getData)
//           .then(display)
//           .catch((err)=>{
//             console.log("Error",err);
//           })
async function test(){
    try{
        await register();
        await login();
        await getData();
        await display();

    }
    catch(err){
        console.log("Error: ",err);
    }
}
test();
console.log("call Another app");