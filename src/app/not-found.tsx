import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 p-6 text-center">
            <h1 className="text-6xl font-black text-emerald-600">৪০৪</h1>

            <h2 className="text-2xl font-bold text-gray-800">
                পেজটি খুঁজে পাওয়া যায়নি
            </h2>

            <p className="text-gray-500 max-w-md">
                আপনি যে পেজটি খুঁজছেন, সেটি পাওয়া যাচ্ছে না বা মুছে ফেলা হয়েছে।
            </p>

            <Link
                href="/"
                className="rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700 shadow-sm"
            >
                হোম পেজে ফিরে যান
            </Link>
        </main>
    );
}