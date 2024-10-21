import { Link, useNavigate } from "react-router-dom";


export default function AdminHeader({ onSignOut }) {
    const navigate = useNavigate()
    return (

        <>
            <header className="flex justify-between items-center bg-green-600 text-white p-4">
                <div onClick={() => navigate("/admin/dashboard")} className=" cursor-pointer text-md font-bold hover:underline">Admin Portal</div>

                <div onClick={() => navigate("/admin/order-management")} className=" cursor-pointer text-md font-semibold hover:underline">Orders </div>
                <div onClick={() => navigate("/admin/user-management")} className=" cursor-pointer text-md font-semibold hover:underline">Users </div>
                <button
                        onClick={onSignOut}
                        className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                    >
                        Sign Out
                    </button>




                {/* <nav className="flex space-x-4">
                    <Link to={"/admin/order-management"} className="hover:underline text-md">Order Management</Link>
                    <Link to={"/admin/user-management"} className="hover:underline text-md">User Management</Link>
                    <button
                        onClick={onSignOut}
                        className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                    >
                        Sign Out
                    </button>
                </nav> */}
            </header>


        </>

    )
}