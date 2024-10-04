import { Button } from "antd";

export default function Home() {

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
                        <Button className="heroBtn bg-black text-white hover:bg-white hover:text-black font-bold">Shop</Button>
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






        </>
    )
}