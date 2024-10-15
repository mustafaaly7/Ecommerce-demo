export default function NotFound() {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-600 mb-2">Page Not Found</h2>
                    <p className="text-gray-500 mb-6">The page you're looking for doesn't exist or has been moved.</p>
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
