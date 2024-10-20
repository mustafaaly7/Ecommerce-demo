import AdminHeader from "@/components/adminHeader";
import { db } from "@/util/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";


export default function AdminDashboard() {
    
    const navigate = useNavigate()
    const [isAdminloggedIn ,setIsadminLoggedin] = useState(localStorage.getItem("isAdminloggedIn"))
    const [orders,setOrders] = useState([])
    const[users,setUsers] = useState([])
    useEffect(()=>{

        if(!isAdminloggedIn){
            navigate("/admin/login")


        }

const fetchOrders = async()=>{
//getting all the orders that signed up and have the data saved on firebase firestore 

    let data = []
    const querySnapshot = await getDocs(collection(db, "Orders"));
    querySnapshot.forEach((doc) => {
      data.push({id :doc.id , ...doc.data()})
    // console.log(doc.id, " => ", doc.data());
      
    });
    setOrders(data)
//getting all the users that signed up and have the data saved on firebase firestore 

let userData=[]
const querySnapshotUser = await getDocs(collection(db,"Users"));
querySnapshotUser.forEach((doc)=>{
    userData.push({id:doc.id , ...doc.data()})
})

setUsers(userData)



}

fetchOrders()

        
    },[isAdminloggedIn,navigate])


    const handleSignout=()=>{
localStorage.removeItem("isAdminloggedIn")
setIsadminLoggedin(null)
navigate("/admin/login")


    }







    return (
        <>
           <AdminHeader onSignOut={handleSignout}/>


            <main className="p-6">
                <h1 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link to={"/admin/order-management"} className="bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600">
                        <h2 className="font-semibold">Manage Orders</h2>
                        <p>View and manage all orders.</p>
                    </Link>
                    <Link to="/admin/user-management" className="bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600">
                        <h2 className="font-semibold">Manage Users</h2>
                        <p>View and manage all users.</p>
                    </Link>



                </div>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Key Statistics</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-200 p-4 rounded shadow">
                            <h3 className="font-bold">Total Orders</h3>
                            <p>{orders.length}</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded shadow">
                            <h3 className="font-bold">Active Users</h3>
                            <p>{users.length}</p>
                        </div>
                    </div>
                </section>

                
            </main>



        </>
    )
} 