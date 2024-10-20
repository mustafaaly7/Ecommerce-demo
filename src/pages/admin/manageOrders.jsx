import AdminHeader from "@/components/adminHeader";
import { db } from "@/util/firebase";
import { collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function ManageOrders() {
    const navigate = useNavigate();
    const [isAdminloggedIn, setIsadminLoggedin] = useState(localStorage.getItem("isAdminloggedIn"));
    const [orders, setOrders] = useState([]);
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        if (!isAdminloggedIn) {
            navigate("/admin/login");
        }

        const fetchOrders = async () => {
            let data = [];
            const querySnapshot = await getDocs(collection(db, "Orders"));
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            setOrders(data);
        };

        fetchOrders();
    }, [isAdminloggedIn, navigate]);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "Orders", id));
        setOrders(orders.filter(order => order.id !== id));
    };

    const handleUpdateStatus = async (id, newStatus) => {
        const orderDoc = doc(db, "Orders", id);
        await updateDoc(orderDoc, { status: newStatus });
        setOrders(orders.map(order => order.id === id ? { ...order, status: newStatus } : order));

    };

    const handleSignout = () => {
        localStorage.removeItem("isAdminloggedIn");
        setIsadminLoggedin(null);
        navigate("/admin/login");
    };
    console.log(orders);

    return (
        <>
            <AdminHeader onSignOut={handleSignout} />

            <main className="p-6">
                <h1 className="text-2xl font-bold mb-4">Manage Orders</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {orders.map(order => (
                        <div key={order.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                            <h2 className="font-semibold">Order ID: {order.id}</h2>
                            <p><strong>Status:</strong> {order.status}</p>
                            <p><strong>User:</strong> {order.firstName} {order.lastName}</p>
                            <p><strong>Email:</strong> {order.email}</p>
                            <p><strong>Phone:</strong> {order.phonenumber}</p>
                            <p><strong>Total Price:</strong> ${order.totalprice.toFixed(2)}</p>
                            <p><strong>Total Quantity:</strong> {order.totalquantity}</p>
                            <h3 className="mt-2 font-semibold">Items:</h3>
                            <ul className="list-disc pl-5">
                                {order.items.map((item, index) => (
                                    <li key={index}>
                                        {item.title} - Quantity: {item.quantity}, Price: ${item.price}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4">



                                <button
                                    onClick={() => handleUpdateStatus(order.id, 'Shipped')}
                                    className="bg-green-500 text-white px-2 py-1 rounded mr-2">
                                    Mark as Shipped
                                </button>
                                <button
                                    onClick={() => handleUpdateStatus(order.id, 'pending')}
                                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                    Mark as Pending
                                </button>
                                <button
                                    onClick={() => handleDelete(order.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
