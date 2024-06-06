import React from 'react'
import'../styles/Navbar.css'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'

function Navbar() {
  return (
    <div className='navbar'>
      <h1>SHOPYPUB</h1>
      <div className='rightSide' >
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/about'>About</Link>
        <Link to='/login'>Login</Link>
        <Link to='/cart'><ShoppingCart size ={32}/></Link>
      </div>
    </div>
  )
}

export default Navbar
