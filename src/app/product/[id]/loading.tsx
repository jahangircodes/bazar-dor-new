export default function Loading() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 animate-pulse">
            <div className="h-48 bg-gray-200 rounded-3xl w-full"></div>
            <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-48"></div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="h-36 bg-gray-200 rounded-2xl"></div>
                    <div className="h-36 bg-gray-200 rounded-2xl"></div>
                    <div className="h-36 bg-gray-200 rounded-2xl"></div>
                </div>
            </div>
        </div>
    );
}