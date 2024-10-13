import ProductDetailCard from "@/components/productDetail";
import { useParams } from "react-router";

export default function ProductDetail(){
const {id} = useParams()

    return(

        <>
<ProductDetailCard/>            </>
    )

}