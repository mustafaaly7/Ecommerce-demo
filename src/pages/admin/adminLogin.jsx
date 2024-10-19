import { useState } from "react"
import { useNavigate } from "react-router"



export default function AdminLogin() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [toast, setToast] = useState(false)
    const [err, setErr] = useState(false)

    const navigate = useNavigate()


    const handleLogin = (e) => {
        e.preventDefault()
        if (username == "admin@123" && password == "admin") {

            setToast(true)
            localStorage.setItem("isAdminloggedIn",true)
            navigate("/admin/dashboard")

        } else {
            setErr(true)
        }


    }




    return (


        <>

            {toast ? (
                <div
                    id="toast-success"
                    className="flex items-center w-full justify-center mx-auto max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                    role="alert"
                >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ms-3 text-sm font-normal">Admin Logged In Successfully</div>
                    <button
                        type="button"
                        onClick={() => setToast(false)}
                        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        aria-label="Close"
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                </div>

            ) : null}

            {err ? (
                <div
                    id="toast-danger"
                    className="flex items-center justify-center mx-auto w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                    role="alert"
                >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                        </svg>
                        <span className="sr-only">Error icon</span>
                    </div>
                    <div className="ms-3 text-sm font-normal">Please Enter Correct Username and Password</div>
                    <button
                        type="button"
                        onClick={() => setErr(false)}
                        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        aria-label="Close"
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                </div>


            ) : null}




            <div className="flex items-center justify-center min-h-screen">
                <div className="mx-auto border  w-1/2">
                    <h1 className="text-center font-mono  text-2xl underline text-blue-900 font-bold">ADMIN Login</h1>

                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col">
                            <label className="text-lg font-sans font-bold">Username:</label>
                            <input type="text" className="border p-2" placeholder="admin@123" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-lg font-sans font-bold">Password</label>
                            <input type="password" className="border p-2 font-semibold" placeholder="admin" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mx-auto flex flex-center items-center justify-center my-3">
                            <button className="border rounded bg-blue-500 text-white p-2 hover:bg-blue-400" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>





        </>
    )
}