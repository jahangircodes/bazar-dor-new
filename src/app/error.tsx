"use client";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-6 text-center">
            <h2 className="text-xl font-bold text-gray-800">
                কিছু একটা সমস্যা হয়েছে!
            </h2>
            <button
                onClick={() => reset()}
                className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
            >
                আবার চেষ্টা করুন
            </button>
        </div>
    );
}