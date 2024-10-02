import { Button } from "antd";

export default function Home() {

    return (
        <>
            <div>
                <div className="hero "></div>

                <div className="flex justify-center flex-col text-center my-6 mx-auto w-1/2  font-bold">
                    <h1 className="text-8xl font-mono">DYNAMIC. DOMINANT</h1>
                    <h5 className="my-4 text-2xl font-bold font-sans">AJ Brown and the Air max Dn Are Changing the game in their respective fields</h5>
                    <div className=" my-2 ">
                        <Button className="heroBtn bg-black text-white hover:bg-white hover:text-black font-bold">Shop</Button>
                    </div>
                </div>




            </div>



        </>
    )
}