import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='menu-navbar-container'>
        <h1 className='menu-title'>
            Todo Rock Argentino!
        </h1>
        <ul className='menu-items'>
            <li>
                <NavLink to="/">Lista de Productos</NavLink>
            </li>
            <li>
                <NavLink to="/category/discos">Discos</NavLink>
            </li>
            <li>
                <NavLink to="/category/remeras">Remeras</NavLink>
            </li>
            <li>
                <NavLink to="/category/instrumentos">Instrumentos</NavLink>
            </li>
        </ul>

        <CartWidget/>
    </div>
  )
}

export default NavBar