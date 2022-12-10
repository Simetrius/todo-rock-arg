import { useState, useContext } from "react"
import { cartContext } from "../../context/CartProvider";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({productSelected}) => {
  const [count, setCount] = useState (1)
  const { cart, addToCart } = useContext(cartContext);
  console.log(productSelected);

  return (
    <div className="container d-flex justify-content-center card">
      <div style={{width:"350px", margin:"20px"}}>
        <img alt={cart.title} src = {`/images/${productSelected.image}`} />
        <div className="grid">
          <h2>{productSelected.title}</h2>
          <h2>$ {productSelected.price} "cada uno"</h2>
          <h2>{count}</h2>
          <ItemCount setCount = {setCount}/>
          <button onClick={() => addToCart(productSelected, count)}>Agregar al Carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;