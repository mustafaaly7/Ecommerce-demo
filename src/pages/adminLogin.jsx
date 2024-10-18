import { useState } from "react"



export default function AdminLogin() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (


        <>
            <div className="flex items-center justify-center min-h-screen">
    <div className="mx-auto border my-6 w-1/2">
        <h1 className="text-center font-mono  text-2xl underline text-blue-900 font-bold">ADMIN Login</h1>
        {/* onSubmit={handleLogin} */}
        <form>
            <div className="flex flex-col">
                <label className="text-lg font-sans font-bold">Username:</label>
                <input type="text" className="border p-2" placeholder="admin@123" onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <label className="text-lg font-sans font-bold">Password</label>
                <input type="password" className="border p-2 font-semibold" placeholder="admin" onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="mx-auto flex flex-center items-center justify-center my-3">
                <button className="border rounded bg-blue-500 text-white p-2 hover:bg-blue-400">Login</button>
            </div>
        </form>
    </div>
</div>





        </>
    )
}