import Productcard from "@/components/card";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "antd";
import { useState } from "react";

export default function New() {
    const [skip, setSkip] = useState(0)


    const fetchApi = async () => {
        let res = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`)
        let data = await res.json()
        return data.products
    }

    const { data: product, isLoading, error } = useQuery({
        queryKey: ["Products"],
        queryFn: fetchApi
    })
    // console.log(product);
    // console.log("skip ->", skip);







    return (





        <>
            <div>
                <div className="my-6">
                    <h1 className="text-3xl font-mono font-bold my-6 mx-4">New Release()</h1>
                </div>

                <Card />

                <section className="mx-auto text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4 gap-4 mx-3">
                            {isLoading ? (
                                <h1 className="text-6xl text-center my-6"> Loading..... </h1>
                            ) : (
                                product.map((data,index)=>(
                                    <Productcard product={data}/>
                                ))

                            )}


                        </div>
                    </div>
                </section>



                <Pagination align="center" defaultCurrent={1} total={50} />

            </div>   </>
    )
}