import { UserContext } from '@/context/userContext';
import React, { useContext } from 'react';

export default function UserProfile() {
const {User} = useContext(UserContext)
console.log(User);



    const userInfo = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
    };

    const orders = [
        { id: 1, item: 'Laptop', date: '2024-01-15', status: 'Shipped' },
        { id: 2, item: 'Headphones', date: '2024-02-20', status: 'Delivered' },
        { id: 3, item: 'Smartphone', date: '2024-03-10', status: 'Pending' },
    ];

    return (
        <div className="max-w-2xl my-6 mx-auto p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">User Profile</h1>
            <div className="mb-6 p-4 border border-gray-300 rounded-md bg-white shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">User Info</h2>
                <p className="text-gray-600 mb-1"><strong>Name:</strong> {userInfo.name}</p>
                <p className="text-gray-600 mb-1"><strong>Email:</strong> {userInfo.email}</p>
                <p className="text-gray-600 mb-1"><strong>Phone:</strong> {userInfo.phone}</p>
            </div>

            <div className="p-4 border border-gray-300 rounded-md bg-white shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">My Orders</h2>
                <ul className="list-none p-0">
                    {orders.map(order => (
                        <li key={order.id} className="py-2 border-b last:border-b-0 text-gray-800">
                            <strong>Item:</strong> {order.item} | 
                            <strong> Date:</strong> {order.date} | 
                            <strong> Status:</strong> <span className={order.status === 'Delivered' ? 'text-green-500' : order.status === 'Shipped' ? 'text-blue-500' : 'text-yellow-500'}>{order.status}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
