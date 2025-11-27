import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// 1. New Import for SEO
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. App ko Provider se wrap kiya */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)