import Header from '@/components/header';
import { UserContext } from '@/context/userContext';
import { auth, collection, db } from '@/util/firebase';
import { signOut } from 'firebase/auth';
import { getDocs } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export default function UserProfile() {
    const { User } = useContext(UserContext);
    const [userInfo, setUserInfo] = useState(null); // Changed to null for better checks
    const [userOrder, setUserOrders] = useState(null); // Changed to null for better checks
const navigate = useNavigate()
    useEffect(() => {
        const getUser = async () => {
            let data = [];
            const querySnapshot = await getDocs(collection(db, "Users"));
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            const findUser = data.find((user) => user.userId === User.userid);


            setUserInfo(findUser || null); // Ensure it's set to null if not found
        };
        getUser();
    }, [User]);

    useEffect(() => {
        const fetchOrders = async () => {
            let data = [];
            const querySnapshot = await getDocs(collection(db, "Orders"));
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });

            const findUserOrder = data.filter((order) => order.user === User.userid);
            setUserOrders(findUserOrder)

        };

        fetchOrders();
    }, [User]);

    console.log(userOrder);

    return (
        <>
            <Header />
            <div className="max-w-2xl my-6 mx-auto p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">User Profile</h1>
                <div className="mb-6 p-4 border border-gray-300 rounded-md bg-white shadow-sm">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">User Info</h2>
                    {userInfo ? (
                        <>
                            <p className="text-gray-600 mb-1"><strong>Name:</strong> {userInfo.fullname}</p>
                            <p className="text-gray-600 mb-1"><strong>Email:</strong> {userInfo.email}</p>
                            <p className="text-gray-600 mb-1"><strong>Phone:</strong> {userInfo.phoneNumber}</p>
                        </>
                    ) : (
                        <p className="text-gray-600 mb-1">Loading user info...</p>
                    )}
                </div>
                <div className="p-6 border border-gray-300 rounded-md bg-white shadow-md">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">My Orders</h2>
                    <ul className="list-none p-0">
                        {userOrder && userOrder.length > 0 ? (
                            userOrder.map((order, index) => (
                                <li key={index} className="py-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <strong className="text-lg">Order ID:</strong> <span className="text-gray-600">{order.id}</span>
                                        </div>
                                        <span className={`font-semibold ${order.status === 'Delivered' ? 'text-green-500' : order.status === 'Shipped' ? 'text-blue-500' : 'text-yellow-500'}`}>
                                            {order.status}
                                        </span>
                                    </div>
                                    {order.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="pl-4 mt-2">
                                            <strong className="text-gray-800">Item:</strong> <span className="text-gray-600">{item.title}</span> |
                                            <strong className="text-gray-800"> Price:</strong> <span className="text-gray-600">${item.price}</span>
                                        </div>
                                    ))}
                                </li>
                            ))
                        ) : (
                            <li className="py-2 text-gray-600">No orders found.</li>
                        )}
                    </ul>
                    <div className="mt-6 flex justify-center">
                        <button onClick={() => {
                  signOut(auth).then(() => {
                    // Sign-out successful.
                    alert("user Succesfully Logged Out")
                    navigate('/signup')
                  }).catch((error) => {
                    console.log(error.message);

                    // An error happened.
                  });
                }}
                         className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200">
                            Sign Out
                        </button>
                    </div>
                </div>


            </div>
        </>
    );
}
