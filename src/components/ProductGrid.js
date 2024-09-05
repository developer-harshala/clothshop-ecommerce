import React from 'react'
import './css/ProductGrid.css'

const ProductGrid = ({
  products,
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  return (
    <div className='product-grid'>
      <div className='products'>
        {products.map((product) => (
          <div key={product.id} className='product-card'>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
      <div className='pagination'>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ProductGrid
