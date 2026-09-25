import image from "../assets/react.svg"
import "./item.css"
const Items = () => {
  return (
    <div className='card'>
      <img src ={image} width={100} height={100} alt='Item image'/>
      <h2>Title : ReactJs</h2>
      <h3>Price: ₹574/-</h3>
      <button>Add To Cart</button>
    </div>
  )
}

export default Items
