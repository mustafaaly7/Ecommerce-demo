import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './pages/login.jsx'

createRoot(document.getElementById('root')).render(
    <Login />
)
