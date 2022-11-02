import React from 'react'
import logo from '../../assets/carrito.jpg'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='menu_navbar__carrito'>
        <img className='menu_navbar__imagenCarrito' src={logo} alt='cart widget'/> 
    </div>
  )
}

export default CartWidget