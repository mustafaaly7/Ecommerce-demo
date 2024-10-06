import { CarouselDemo } from "@/components/carouseldemo";
import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import footerLogo from "../images/footerLogo.png"

export default function Home() {
    const fetchApi = async () => {
        const response = await fetch("https://dummyjson.com/products?limit=10");
        const data = await response.json();
        return data.products; // Return the products directly
    }

    const { data: products, isLoading, isError } = useQuery({
        queryKey: ["myProducts"],
        queryFn: fetchApi // Pass the fetchApi function directly
    });

    console.log(products);

    return (
        <>
            <div>
                {/* hero and details */}
                <div className="hero ">

                </div>

                <div className="flex justify-center flex-col text-center my-6 mx-auto w-1/2  font-bold">
                    <h1 className="text-3xl  md:text-3xl sm:text-xl font-mono text-center mx-auto">DYNAMIC. DOMINANT</h1>
                    <h5 className="my-4   font-sans">AJ Brown and the Air max Dn Are Changing the game in their respective fields</h5>
                    <div className=" my-2 ">

                        <Button className="heroBtn bg-black text-white hover:bg-white hover:text-black font-bold" ><Link to={"/signup"} >Shop </Link></Button>

                    </div>
                </div>

            </div>


            {/* hero layout  */}
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row sm:flex-row w-full">
                    <div className="hero1 flex-1 min-h-[500px] relative">
                        <div className="absolute bottom-3 left-3 p-2 flex flex-col gap-8">
                            <h1 className="text-white font-mono text-2xl">Holiday Gift</h1>
                            <h1 className="text-white font-sans text-6xl">Give Sports</h1>
                            <div className="my-2">
                                <Button className="heroBtn bg-black text-white hover:bg-white hover:text-black font-bold">
                                    Shop All Gifts
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="hero2 flex-1 min-h-[500px] relative">
                        <div className="absolute bottom-3 left-3 p-2 flex flex-col gap-8">
                            <h1 className="text-white font-mono text-2xl">Find Your Feel</h1>
                            <h1 className="text-white font-sans text-6xl">The Latest Nike Bras</h1>
                            <div className="my-2">
                                <Button className="heroBtn bg-black text-white hover:bg-white hover:text-black font-bold">
                                    Shop
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col md:flex-row sm:flex-row w-full">
                    <div className="hero3 flex-1 min-h-[500px] relative">
                        <div className="absolute bottom-3 left-3 p-2 flex flex-col gap-8">
                            <h1 className="text-white font-mono text-2xl">Distant Gratification</h1>
                            <h1 className="text-white font-sans text-6xl">Nike Pegasus trail 5 Gore-Trex</h1>
                            <div className="my-2">
                                <Button className="heroBtn bg-black text-white hover:bg-white hover:text-black font-bold">
                                    Shop
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="hero4 flex-1 min-h-[500px] relative">
                        <div className="absolute bottom-3 left-3 p-2 flex flex-col gap-8">
                            <h1 className="text-white font-mono text-2xl">Heat Check</h1>
                            <h1 className="text-white font-sans text-6xl">Air Jordan 4 RM</h1>
                            <div className="my-2">
                                <Button className="heroBtn bg-black text-white hover:bg-white hover:text-black font-bold">
                                    Shop
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center flex-col text-center my-6 mx-auto w-1/2  font-bold">
                <h1 className="text-4xl  md:text-3xl sm:text-xl font-mono text-center mx-auto">NEW THIS WEEK</h1>
                <h5 className="my-4   font-sans">Featuring the Nike Tech Woven Suit</h5>
                <div className=" my-2 ">
                    <Button className="heroBtn bg-black text-white hover:bg-white hover:text-black font-bold">Shop New Arrivals</Button>
                </div>
            </div>

            <div>
                <div className="hero5"></div>
            </div>

            <br /><br />
            <div className="my-6 mx-6">
                <h1 className="font-mono font-bold text-5xl">SHOP BY CLASSICS</h1>
            </div>
            {/* carousel */}

            <div className="mx-auto flex justify-center items-center w-full">
                {isLoading ? (
                    <h1 className="text-center text-6xl font-bold">Loading.....</h1>
                ) : (

                    <CarouselDemo products={products} />
                )}
            </div>

            <br />
            <br />
            <br />
            <div className="my-6 mx-auto">
                <img className="my-8" src={footerLogo} alt="" />
            </div>

<br />
<br />
<div className=" justify-center items-center font-bold font-sans flex gap-8">
<h4 className="text-2xl cursor-pointer">Find a Store</h4>
<h4 className="text-2xl cursor-pointer">Help</h4>
<h4 className="text-2xl cursor-pointer">Join Us</h4>
<h4 className="text-2xl cursor-pointer">Sign In</h4>

</div>
<br />
<br />



<div className="flex flex-wrap lg:gap-20 gap-6 justify-center items-center my-6">
  <div className="flex flex-col gap-4 w-full sm:w-auto">
    <h1 className="text-4xl font-bold font-mono">Featured</h1>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Airforce 1</h3>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Jordan 1</h3>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Metcon</h3>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Air Max 270</h3>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Air Max 97</h3>
  </div>
  <div className="flex flex-col gap-4 w-full sm:w-auto">
    <h1 className="text-4xl font-bold font-mono">Shoes</h1>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>All Shoes</h3>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Jordan Shoes</h3>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Running Shoes</h3>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Basketball Shoes</h3>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Tennis Shoes</h3>
  </div>
  <div className="flex flex-col gap-4 w-full sm:w-auto">
    <h1 className="text-4xl font-bold font-mono">Clothing</h1>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>All Clothing</h3>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Tops & Tshirts</h3>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Shorts</h3>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Hoodies</h3>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Sports Bra</h3>
  </div>
  <div className="flex flex-col gap-4 w-full sm:w-auto">
    <h1 className="text-4xl font-bold font-mono">Kids</h1>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Infant & toddler Shoes</h3>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Kids Shoes</h3>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Kids Basketball</h3>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Kids Running</h3>
    <h3 className="text-xl font-semibold cursor-pointer hidden sm:block font-sans" style={{color:"#707072"}}>Kids Jordan</h3>
  </div>
</div>



        </>
    )
}