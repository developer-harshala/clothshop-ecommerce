import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../components/AppContext'
import Header from './Header'
import HeroSection from './HeroSection'
import CartSidebar from './CartSidebar' // The sliding cart panel
import './css/MainPage.css'

const MainPage = () => {
  const { products, colors, materials, featuredProducts } =
    useContext(AppContext)
  console.log(products, colors, materials, featuredProducts)
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false) // State to control cart visibility

  // Function to get the color name from the color ID
  const getColorName = (colorId) => {
    const color = colors.find((color) => color.id === colorId)
    return color ? color.name : 'Unknown Color'
  }

  // Function to get the material name from the material ID
  const getMaterialName = (materialId) => {
    const material = materials.find((material) => material.id === materialId)
    return material ? material.name : 'Unknown Material'
  }

  // Add to cart logic
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
    setIsCartOpen(true) // Open the cart when an item is added
  }

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId)
    setCart(updatedCart)
    if (updatedCart.length === 0) {
      setIsCartOpen(false) // Close the cart when it's empty
    }
  }

  return (
    <div className='main-page'>
      <Header />
      <HeroSection />
      {/* Product Listings */}
      <section className='product-listings'>
        {products.map((product) => (
          <div key={product.id} className='product'>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <p>Color: {getColorName(product.colorId)}</p>
            <p>Material: {getMaterialName(product.materialId)}</p>
            {/* Add to Cart button */}
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* Show CartSidebar only if isCartOpen is true */}
      {isCartOpen && (
        <CartSidebar cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      )}
    </div>
  )
}

export default MainPage
