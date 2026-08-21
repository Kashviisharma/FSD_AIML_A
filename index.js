// const data=[
//     {image: "",price:"525/-"},
//     {image: "",price:"425/-"},
//     {image: "",price:"625/-"}
// ]
// function Book(props){
//     const child=document.createElement("div");
//     child.setAttribute=("classname","card");
// const image=document.createElement("img");
// image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw3HApB4bsvabXW3L14cV-LhFo0L71QmEESJN3vW9Ow&s");
// image.setAttribute("width","75px");
// image.setAttribute("height","75px");
// image.style.margin="auto";
// const h2=document.createElement("h2");
// h2.innerText="Price: 500/-";
// child.appendChild(image);
// child.appendChild(h2);
// return child;
// }
// const parent=document.getElementById("root");
// for(i of data){{
//     parent.appendChild(Book(i));
// }
// }

function Book(props){
const child=document.createElement("div");
child.setAttribute("class","card");
const image=document.createElement("img");
image.setAttribute("src","https://tse4.mm.bing.net/th/id/OIP.PtU3oZdtcX1QysiofE2zOQHaE8?r=0&pid=Api&P=0&h=180");
image.setAttribute("width","200px");
image.setAttribute("height","150px");
image.style.margin="auto";
const h2=document.createElement("h2");
h2.innerText="Price: 500/-";
child.appendChild(props.image);
child.appendChild(h2);
return child;
}
const parent=document.getElementById("root");
parent.appendChild(Book());
const booklist=document.getElementById("root");


