const data=[
    {Image: "",price:"425/-"},
    {Image: "",price:"525/-"},
    {Image: "",price:"625/-"},
]
function Book(props){
    const image=React.createElement("img",{src: props.Image,
        width:"50px",
        height:"50px"
    });
    const h2=React.createElement("h2",{color:"red"},"Price:")
}