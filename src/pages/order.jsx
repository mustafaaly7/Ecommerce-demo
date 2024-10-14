import CheckoutForm from "@/components/checkoutform";
import { CartContext } from "@/context/cartContext";
import { useContext } from "react";



export default function OrderPage(){
const {cartItems} = useContext(CartContext)

return(

<>
<div >
    
<CheckoutForm/>
</div>

<br /><br /><br /><br /><br />

</>

)


}