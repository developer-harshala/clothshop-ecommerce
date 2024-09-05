import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [colors, setColors] = useState([])
  const [materials, setMaterials] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])

  const token = 'Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo' // Bearer token

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        'https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products',
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setProducts(response.data.products)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  // Fetch Colors
  const fetchColors = async () => {
    try {
      const response = await axios.get(
        'https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors',
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setColors(response.data.colors)
    } catch (error) {
      console.error('Error fetching colors:', error)
    }
  }

  // Fetch Materials
  const fetchMaterials = async () => {
    try {
      const response = await axios.get(
        'https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material',
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setMaterials(response.data.material)
    } catch (error) {
      console.error('Error fetching materials:', error)
      setMaterials([]) // Set empty array or default value so app doesn't break
    }
  }

  // Fetch Featured Products
  const fetchFeaturedProducts = async () => {
    try {
      const response = await axios.get(
        'https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured',
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setFeaturedProducts(response.data.featured)
    } catch (error) {
      console.error('Error fetching featured products:', error)
    }
  }

  useEffect(() => {
    fetchProducts()
    fetchColors()
    fetchMaterials()
    fetchFeaturedProducts()
  }, [])

  return (
    <AppContext.Provider
      value={{
        products,
        colors,
        materials,
        featuredProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
