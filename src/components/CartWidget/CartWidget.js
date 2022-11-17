import React from 'react'
import logo from '../../assets/carrito.jpg'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='menu_navbar__carrito'>
        <Link to="/cart">
          <img className='menu_navbar__imagenCarrito' src={logo} alt='cart widget'/> 
        </Link>
    </div>
  )
}

export default CartWidget