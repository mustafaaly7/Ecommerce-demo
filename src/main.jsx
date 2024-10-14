import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/header.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import UserContextprovider from './context/userContext.jsx'
import CartContextprovider from './context/cartContext.jsx'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
    <UserContextprovider>
        <CartContextprovider>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </CartContextprovider>
    </UserContextprovider>
)
