import React from 'react'

const FilterSidebar = ({ materials, handleFilter }) => {
  return (
    <div className='filter-sidebar'>
      <h3>Filter</h3>
      <div className='filter-section'>
        <h4>Materials</h4>
        <ul>
          {materials.map((material) => (
            <li key={material.id}>
              <button onClick={() => handleFilter(material.id)}>
                {material.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FilterSidebar
