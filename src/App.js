import React from 'react'
import MainPage from './components/MainPage'
import { AppProvider } from './components/AppContext'
import './App.css' // Optional, for global styles if needed

function App() {
  return (
    <AppProvider>
      <div className='App'>
        <MainPage />
      </div>
    </AppProvider>
  )
}

export default App
