

export default function AdminHeader({onSignOut}){
    return(

<>
<header className="flex justify-between items-center bg-green-600 text-white p-4">
                <div className="text-lg font-semibold">Admin Portal</div>
                <nav className="flex space-x-4">
                    <a href="#order-management" className="hover:underline">Order Management</a>
                    <a href="#user-management" className="hover:underline">User Management</a>
                    <button 
                onClick={onSignOut} 
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
                Sign Out
            </button>
                </nav>
            </header>


</>

    )
}