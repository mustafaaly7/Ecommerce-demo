import { createContext } from "react";



export const CartContext = createContext()
export default function CartContextprovider({ children }) {
    return (

        <CartContext.Provider>
            {children}
        </CartContext.Provider>


    )
}

