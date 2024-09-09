import React from 'react'
import { RxReset } from 'react-icons/rx' // Reset icon import

const FilterSidebar = ({
  materials,
  handleFilter,
  colors,
  handleColorFilter,
  resetFilters,
  selectedFilters,
}) => {
  return (
    <div className='filter-sidebar'>
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
            <li
              key={material.id}
              className={
                selectedFilters.material === material.id
                  ? 'selected-filter'
                  : ''
              }
              onClick={() => handleFilter(material.id)}
            >
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
            <li
              key={color.id}
              className={
                selectedFilters.color === color.id ? 'selected-filter' : ''
              }
              onClick={() => handleColorFilter(color.id)}
            >
              {color.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FilterSidebar
