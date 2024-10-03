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
        <div className="hero1 flex-1 min-h-[800px]"></div>
        <div className="hero2 flex-1 min-h-[800px]"></div>
    </div>
</div>











        </>
    )
}