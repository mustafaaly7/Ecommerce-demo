

export default function CheckoutForm({product}){

return(
  <>

      
            <div className="flex items-start gap-4">
              <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                <img
                  src={product.thumbnail}
                  className="w-full object-contain"
                />
              </div>
              <div className="w-full">
                <h3 className="text-base text-white">{product?.title}</h3>
                <ul className="text-xs text-gray-300 space-y-2 mt-2">
                  <li className="flex flex-wrap gap-4">
                    Price <span className="ml-auto">${product.price}</span>
                  </li>
                  <li className="flex flex-wrap gap-4">
                   Quantity <span className="ml-auto">{product?.quantity}</span>
                  </li>
                  <li className="flex flex-wrap gap-4">
                    Total Price <span className="ml-auto">${Math.round(product.price * product.quantity)}</span>
                  </li>
                </ul>
              </div>
            </div>
            
        
   
    


</>

)

}
