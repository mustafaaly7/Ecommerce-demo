import CheckoutForm from "@/components/checkoutform";
import { CartContext } from "@/context/cartContext";
import { UserContext } from "@/context/userContext";
import { auth, db } from "@/util/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";



export default function OrderPage() {
    const { User } = useContext(UserContext)
    const { cartItems, clearcart } = useContext(CartContext)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState("")
    const [Address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const navigate = useNavigate()

    const totalQuantity = cartItems.reduce((value, data) => value + data.quantity, 0)
    const totalPrice = cartItems.reduce((value, data) => value + data.quantity * data.price, 0)


    const checkoutOrder = async (e) => {
        e.preventDefault();

        const checkOutobj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            status: "pending",
            user: auth.currentUser ? auth.currentUser.uid : "guest",
            phonenumber: phoneNumber,
            address: Address,
            city: city,
            totalprice: totalPrice,
            totalquantity: totalQuantity,
            items: cartItems.map((data) => ({
                title: data.title,
                price: data.price,
                quantity: data.quantity
            }))
        };

        try {
            const docRef = await addDoc(collection(db, "Orders"), checkOutobj);
            alert("Your order has been successfully placed");

            const encodedTxt = encodeURI(JSON.stringify(checkOutobj));
            window.open(`https://wa.me/923042281289?text=${encodedTxt}`, "_blank");

            clearcart();
            navigate("/order/Confirmed"); // Ensure navigate is correctly imported if using this
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };




    return (

        <>
            <div className="font-[sans-serif] bg-white">
                <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
                    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
                        <div className="relative h-full">
                            <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                                <div className="space-y-4">

                                    {cartItems.map((data, ind) => (
                                        <CheckoutForm product={data} key={ind} />

                                    ))}
                                </div>
                            </div>
                            <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
                                <h4 className="flex flex-wrap gap-4 text-base text-white">
                                    Total <span className="ml-auto">${totalPrice}</span>
                                </h4>
                            </div>
                        </div>


                    </div>

                    <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
                        <h2 className="text-2xl font-bold text-gray-800">Complete your order</h2>
                        <form onSubmit={(e => checkoutOrder(e))} className="mt-8">
                            <div>
                                <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            required

                                            onChange={(e) => setFirstName(e.target.value)}
                                            placeholder="First Name"
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            required

                                            onChange={(e) => setLastName(e.target.value)}
                                            placeholder="Last Name"
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="number"
                                            required

                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            placeholder="Phone No."
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            required

                                            onChange={(e) => setAddress(e.target.value)}
                                            placeholder="Address "
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            required
                                            onChange={(e) => setCity(e.target.value)}
                                            placeholder="City"
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>

                                </div>
                                <div className="flex gap-4 max-md:flex-col mt-8">
                                    <button
                                        type="button"
                                        className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white"
                                    >
                                        Complete Purchase
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>





            <br /><br /><br /><br /><br />

        </>

    )


}