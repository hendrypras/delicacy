import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { MealProvider } from './context/MealContext.jsx'
import { Toaster } from 'react-hot-toast'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MealProvider>
      <Toaster />
      <App />
    </MealProvider>
  </React.StrictMode>
)
