import { createContext, useEffect, useState } from "react";
import { json } from "react-router";



export const CartContext = createContext()
export default function CartContextprovider({ children }) {
    const [cartItems, setcartItems] = useState([])
    const [isLoaded, setIsloaded] = useState(true)

    useEffect(() => {
        const items = localStorage.getItem("cartItems")
        if (items) {
            setcartItems([...JSON.parse(items)])
        }
        setIsloaded(false)

    }, [])
    useEffect(() => {
        if (!isLoaded) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems))
        }

    }, [cartItems])

    function AddtoCart(item) {
        const arr = [...cartItems]
        const itemIndex = arr.findIndex((data) => data.id == item.id)
        if (itemIndex == -1) {
            arr.push({ ...item, quantity: 1 })
        }
        else {
            arr[itemIndex].quantity++
        }
        setcartItems([...arr])
    }


function UpdateCart(id,type){
    const arr = [...cartItems]
    const itemsIndex = arr.findIndex((data)=>data.id == id)
    if(type == "plus"){
        arr[itemsIndex].quantity ++ 
    }else{
        arr[itemsIndex].quantity -- 

    }
    setcartItems([...arr])

}

const removeCart = (id)=>{
const arr = [...cartItems]
const findIndex =arr.findIndex((data)=>data.id == id)
arr.splice(findIndex,1)
setcartItems([...arr])
}

const isItemadded = (id)=>{
    const arr = [...cartItems]
    const itemIndex = arr.findIndex((data) => data.id == id)
    if(itemIndex == -1){
        null
    }else{
        arr[itemIndex]
    }
}
const clearcart = ()=>{
    setcartItems([])
}



    return (

        <CartContext.Provider value={{cartItems,setcartItems,AddtoCart,isLoaded
            ,setIsloaded,UpdateCart,removeCart,clearcart,isItemadded}}>
            {children}
        </CartContext.Provider>


    )
}

