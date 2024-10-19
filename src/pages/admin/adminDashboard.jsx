import AdminHeader from "@/components/adminHeader";


export default function AdminDashboard() {
    return (
        <>
           <AdminHeader/>


            <main className="p-6">
                <h1 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="/order-management" className="bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600">
                        <h2 className="font-semibold">Manage Orders</h2>
                        <p>View and manage all orders.</p>
                    </a>
                    <a href="/user-management" className="bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600">
                        <h2 className="font-semibold">Manage Users</h2>
                        <p>View and manage all users.</p>
                    </a>
                </div>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Key Statistics</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-200 p-4 rounded shadow">
                            <h3 className="font-bold">Total Orders</h3>
                            <p>150</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded shadow">
                            <h3 className="font-bold">Active Users</h3>
                            <p>80</p>
                        </div>
                    </div>
                </section>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
                    <ul className="list-disc pl-5">
                        <li>Order #1234 created.</li>
                        <li>User #567 registered.</li>
                        <li>Order #1235 shipped.</li>
                    </ul>
                </section>
            </main>



        </>
    )
} 