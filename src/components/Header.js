import React from 'react'
import './css/Header.css'
import { MdOutlineShoppingCart } from 'react-icons/md'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <a href='/'>RIGHTFIT.COM</a>
      </div>
      <div className='cart-section'>
        <nav className='nav-links'>
          <a href='/products'>All Products</a>
          <a href='/featured'>Featured Products</a>
        </nav>
        <div className='cart'>
          <a href='/cart'>
            <MdOutlineShoppingCart />
            <span className='cart-count'>0</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
