import ProductDetailCard from "@/components/productDetail";
import { CartContext } from "@/context/cartContext";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useParams } from "react-router";

export default function ProductDetail(){
const {id} = useParams()
const{AddtoCart} = useContext(CartContext)
// console.log(id);
const fetchApi =async()=>{
let res =await fetch(`https://dummyjson.com/products/${id}`)
let data = await res.json()

return data

}


const{data: product ,isLoading ,isError } = useQuery({
    queryKey : ["singleProduct"]
    , queryFn : fetchApi
})


const onclick = ()=>{
    AddtoCart(product)
}
 

    return(

        <>

        {isLoading? (
                                <h1 className="text-6xl text-center my-6"> Loading..... </h1>
                                
        ):(
<ProductDetailCard product={product} onclick={onclick}/>           

        )
        }



 </>
    )

}