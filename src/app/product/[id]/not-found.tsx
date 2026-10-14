import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-4">
            <h1 className="text-6xl font-black text-emerald-600">৪০৪</h1>
            <h2 className="text-2xl font-bold text-gray-800">পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!</h2>
            <p className="text-gray-500 max-w-md">আপনি যে লিংকটি খুঁজছেন তা হয়তো পরিবর্তিত হয়েছে অথবা মুছে ফেলা হয়েছে।</p>
            <Link href="/" className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-xl transition shadow-sm">
                হোম পেজে ফিরে যান
            </Link>
        </div>
    );
}