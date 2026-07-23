function register(){
    setTimeout(()=>{
        console.log("register here");
    },6000)
    
}
function login(){
    setTimeout(()=>{
        console.log("login data");
    },9000)
}
function getData(){
    setTimeout(()=>{
        console.log("fetch data");
    },6000)
}
function display(){
   setTimeout(()=>{
        console.log("display data");
    },1000)
}
register();
login();
getData();
display();
console.log("call Another app");