import React from 'react'
import './css/CartSidebar.css'
import defaultImage from '../assets/Image.png'

const CartSidebar = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className='cart-sidebar'>
      <h2>Shopping Cart</h2>
      <h3>Total Products: {cart.length}</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className='cart-item'>
              <img
                src={item.image || defaultImage}
                alt={item.name}
                onError={(e) => {
                  e.target.src = defaultImage
                }}
                className='cart-item-image'
              />
              <div className='cart-item-details'>
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CartSidebar
