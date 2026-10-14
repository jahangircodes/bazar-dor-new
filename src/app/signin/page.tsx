'use client';

import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function SignInPage() {
    const router = useRouter();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (email && password) {
                const nameFromEmail = email.split('@')[0];
                const formattedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);

                login(formattedName, email);
                router.push('/');
            } else {
                toast.error('দয়া করে সঠিক তথ্য দিন');
            }
        } catch {
            toast.error('সাইন ইন করতে সমস্যা হয়েছে');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto px-4 sm:px-6 py-12 space-y-4">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold text-gray-900">সাইন ইন</h1>
                    <p className="text-xs text-gray-500">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
                </div>

                <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">ইমেইল</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-emerald-600"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">পাসওয়ার্ড</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-emerald-600"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-xl transition shadow-sm text-sm"
                    >
                        {loading ? 'লোড হচ্ছে...' : 'সাইন ইন'}
                    </button>
                </form>

                <div className="relative flex py-1 items-center">
                    <div className="flex-auto border-t border-gray-200"></div>
                    <span className="flex-initial mx-4 text-gray-400 text-xs">অথবা</span>
                    <div className="flex-auto border-t border-gray-200"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={() => {
                            login('Google User', 'google.user@example.com');
                            router.push('/');
                        }}
                        className="flex items-center justify-center gap-2 border border-gray-300 py-2 px-3 rounded-xl text-xs font-medium text-gray-700 hover:bg-gray-50 transition"
                    >
                        <span>Google দিয়ে চালিয়ে যান</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            login('GitHub User', 'github.user@example.com');
                            router.push('/');
                        }}
                        className="flex items-center justify-center gap-2 border border-gray-300 py-2 px-3 rounded-xl text-xs font-medium text-gray-700 hover:bg-gray-50 transition"
                    >
                        <span>GitHub দিয়ে চালিয়ে যান</span>
                    </button>
                </div>

                <div className="text-center text-xs text-gray-500 pt-1">
                    অ্যাকাউন্ট নেই?{' '}
                    <Link href="/signup" className="text-emerald-600 font-semibold hover:underline">
                        অ্যাকাউন্ট তৈরি করুন
                    </Link>
                </div>
            </div>

            <div className="text-center pt-2">
                <Link href="/" className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition inline-flex items-center gap-1">
                    ← হোম পেজে ফিরে যান
                </Link>
            </div>
        </div>
    );
}