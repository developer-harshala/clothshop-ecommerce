import React from 'react'
import './css/CartSidebar.css'

const CartSidebar = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className='cart-sidebar'>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className='cart-item'>
              <img
                src={item.image}
                alt={item.name}
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
