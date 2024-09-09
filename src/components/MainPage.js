import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../components/AppContext'
import Header from './Header'
import HeroSection from './HeroSection'
import CartSidebar from './CartSidebar'
import FilterSidebar from './FilterSidebar'
import Footer from './Footer' // Import Footer
import defaultImage from '../assets/Image.png'
import './css/MainPage.css'

const MainPage = () => {
  const { products, colors, materials } = useContext(AppContext)
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState({
    color: null,
    material: null,
  })
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 9

  const getColorName = (colorId) => {
    const color = colors.find((color) => color.id === colorId)
    return color ? color.name : 'Unknown Color'
  }

  const getMaterialName = (materialId) => {
    const material = materials.find((material) => material.id === materialId)
    return material ? material.name : 'Unknown Material'
  }

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
    setIsCartOpen(true)
  }

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId)
    setCart(updatedCart)
    if (updatedCart.length === 0) {
      setIsCartOpen(false)
    }
  }

  const applyFilters = () => {
    let filtered = products

    if (selectedFilters.color) {
      filtered = filtered.filter(
        (product) => product.colorId === selectedFilters.color
      )
    }

    if (selectedFilters.material) {
      filtered = filtered.filter(
        (product) => product.materialId === selectedFilters.material
      )
    }

    setFilteredProducts(filtered)
  }

  const resetFilters = () => {
    setSelectedFilters({ color: null, material: null })
    setFilteredProducts(products)
  }

  const handleFilter = (materialId) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      material: materialId,
    }))
  }

  const handleColorFilter = (colorId) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      color: colorId,
    }))
  }

  useEffect(() => {
    applyFilters()
  }, [selectedFilters, products])

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  )

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

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
          selectedFilters={selectedFilters}
        />

        <section className='product-listings'>
          {paginatedProducts.map((product) => (
            <div key={product.id} className='product'>
              <div className='product-image-container'>
                <img
                  src={product.image || defaultImage}
                  alt={product.name}
                  onError={(e) => {
                    e.target.src = defaultImage
                  }}
                />
                <button
                  className='add-to-cart-btn'
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3>{product.name}</h3>
                <span>{getColorName(product.colorId)} </span>
                <span> {getMaterialName(product.materialId)}</span>
                <p>INR {product.price}.00</p>
              </div>
            </div>
          ))}
          <div className='pagination'>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      </div>

      {isCartOpen && (
        <CartSidebar cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      )}

      <Footer />
    </div>
  )
}

export default MainPage
