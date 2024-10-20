
import AdminHeader from "@/components/adminHeader";
import { db } from "@/util/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function ManageUsers() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = [];
            const querySnapshot = await getDocs(collection(db, "Users"));
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            setUsers(data);
        };

        fetchUsers();
    }, []);

    const handleDeleteUser = async (id) => {
        const userDoc = doc(db, "Users", id);
        await deleteDoc(userDoc);
        setUsers(users.filter(user => user.id !== id));
    };
    const handleSignout = () => {
        localStorage.removeItem("isAdminloggedIn");
        setIsadminLoggedin(null);
        navigate("/admin/login");
    };

    return (
        <>
            <AdminHeader onSignOut={handleSignout} />

            <main className="p-6">
                <h1 className="text-2xl font-bold mb-4">Manage Users</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {users.map((user) => (
                        <div key={user.id} className="bg-white p-4 rounded shadow-md">
                            <h2 className="font-semibold">User ID: {user.id}</h2>
                            <p><strong>Name:</strong> {user.fullname}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phonenumber}</p>

                            <div className="mt-2">
                                <button 
                                    onClick={() => handleDeleteUser(user.id)} 
                                    className="bg-red-500 text-white p-2 rounded">
                                    Delete User
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
