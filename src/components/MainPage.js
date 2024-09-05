import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../components/AppContext'
import Header from './Header'
import HeroSection from './HeroSection'
import CartSidebar from './CartSidebar' // The sliding cart panel
import FilterSidebar from './FilterSidebar'
import './css/MainPage.css'

const MainPage = () => {
  const { products, colors, materials } = useContext(AppContext)
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false) // State to control cart visibility
  const [selectedFilters, setSelectedFilters] = useState({
    color: null,
    material: null,
  })
  const [filteredProducts, setFilteredProducts] = useState(products)

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

  // Combined filter logic
  const applyFilters = () => {
    let filtered = products

    // Apply color filter
    if (selectedFilters.color) {
      filtered = filtered.filter(
        (product) => product.colorId === selectedFilters.color
      )
    }

    // Apply material filter
    if (selectedFilters.material) {
      filtered = filtered.filter(
        (product) => product.materialId === selectedFilters.material
      )
    }

    setFilteredProducts(filtered)
  }

  // Function to reset all filters
  const resetFilters = () => {
    setSelectedFilters({ color: null, material: null })
    setFilteredProducts(products) // Reset the filtered products to show all
  }

  // Handle material filter
  const handleFilter = (materialId) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      material: materialId,
    }))
  }

  // Handle color filter
  const handleColorFilter = (colorId) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      color: colorId,
    }))
  }

  // Re-apply filters whenever the filter selection changes
  useEffect(() => {
    applyFilters()
  }, [selectedFilters, products])

  return (
    <div className='main-page'>
      <Header />
      <HeroSection />

      <div className='main-content'>
        <FilterSidebar
          materials={materials}
          handleFilter={handleFilter}
          colors={colors}
          handleColorFilter={handleColorFilter}
          resetFilters={resetFilters}
        />

        {/* Product Listings */}
        <section className='product-listings'>
          {filteredProducts.map((product) => (
            <div key={product.id} className='product'>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>Color: {getColorName(product.colorId)}</p>
              <p>Material: {getMaterialName(product.materialId)}</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </section>
      </div>

      {/* Show CartSidebar only if isCartOpen is true */}
      {isCartOpen && (
        <CartSidebar cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      )}
    </div>
  )
}

export default MainPage
