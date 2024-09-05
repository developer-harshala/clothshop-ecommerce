import React from 'react'
import { RxReset } from 'react-icons/rx' // Reset icon import

const FilterSidebar = ({
  materials,
  handleFilter,
  colors,
  handleColorFilter,
  resetFilters, // Function to reset filters
}) => {
  return (
    <div className='filter-sidebar'>
      {/* Align the filter heading and reset icon in one line */}
      <div className='filter-header'>
        <h3>Filter</h3>
        <RxReset
          onClick={resetFilters}
          className='reset-icon'
          title='Reset Filters'
        />
      </div>

      {/* Material Filters */}
      <div className='filter-section'>
        <h4>Materials</h4>
        <ul>
          {materials.map((material) => (
            <li key={material.id} onClick={() => handleFilter(material.id)}>
              {material.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Color Filters */}
      <div className='filters'>
        <h4>Colors</h4>
        <ul>
          {colors.map((color) => (
            <li key={color.id} onClick={() => handleColorFilter(color.id)}>
              {color.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FilterSidebar
