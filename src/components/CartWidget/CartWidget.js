import React from 'react'
import logo from '../../assets/carrito.png'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import { cartContext } from "../../context/CartProvider";
import { useContext } from "react"


const CartWidget = () => {
  const { cart } = useContext(cartContext);
  return (
    <div className='menu_navbar__carrito'>
        <Link to="/cart">
          <img className='menu_navbar__imagenCarrito' src={logo} alt='cart widget'/>
        </Link>
        
        {cart.length}
        
    </div>
  )
}

export default CartWidget