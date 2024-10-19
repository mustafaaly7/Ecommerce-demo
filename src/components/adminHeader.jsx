

export default function AdminHeader(){
    return(

<>
<header className="flex justify-between items-center bg-green-600 text-white p-4">
                <div className="text-lg font-semibold">Admin Portal</div>
                <nav className="flex space-x-4">
                    <a href="#order-management" className="hover:underline">Order Management</a>
                    <a href="#user-management" className="hover:underline">User Management</a>
                </nav>
            </header>


</>

    )
}