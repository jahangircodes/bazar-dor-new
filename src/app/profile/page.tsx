'use client';

import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function ProfilePage() {
    const { user, loading, updateProfile, signout } = useAuth();
    const router = useRouter();
    const [name, setName] = useState('');

    useEffect(() => {
        if (!loading) {
            if (!user) {
                router.push('/signin');
            } else if (name === '') {
                setName(user.name);
            }
        }
    }, [user, loading, router, name]);

    if (loading || !user) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-24 text-center">
                <p className="text-gray-500">লোড হচ্ছে...</p>
            </div>
        );
    }

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) {
            toast.error('দয়া করে সঠিক নাম দিন');
            return;
        }
        updateProfile(name.trim());
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <div>
                <Link
                    href="/"
                    className="text-sm font-medium text-gray-500 hover:text-emerald-700 transition inline-flex items-center gap-1"
                >
                    ← হোম পেজে ফিরে যান
                </Link>
            </div>

            <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">আমার প্রোফাইল</h1>
                <p className="text-sm text-gray-500 mt-1">
                    আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                </p>
            </div>

            <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white font-bold text-2xl flex items-center justify-center shadow-xs">
                        {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                </div>

                <button
                    onClick={signout}
                    className="w-full sm:w-auto px-5 py-2.5 border border-red-200 hover:border-red-300 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-sm font-medium transition text-center"
                >
                    সাইন আউট
                </button>
            </div>

            <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
                <h3 className="text-lg font-bold text-gray-900">নাম হালনাগাদ করুন</h3>

                <form onSubmit={handleUpdate} className="space-y-4 max-w-md">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">নাম</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-gray-800"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-xl transition shadow-xs w-full sm:w-auto"
                    >
                        নাম হালনাগাদ করুন
                    </button>
                </form>
            </div>
        </div>
    );
}