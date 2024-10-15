import { CheckOutlined } from "@ant-design/icons";

export default function OrderConfirmed() {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-md shadow-md text-center max-w-lg">
                    <CheckOutlined 
                        style={{ fontSize: "64px", color: "#52c41a" }} 
                        className="mb-4" 
                    />
                    <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
                    <p className="text-gray-700 mb-6">
                        Thank you for your purchase. Your order has been successfully placed and will be processed shortly.
                    </p>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
                        onClick={() => window.location.href = '/'}
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </>
    );
}
