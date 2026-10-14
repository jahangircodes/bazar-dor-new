'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function SortDropdown({ currentSort }: { currentSort: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSort = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value === 'default') {
            params.delete('sort');
        } else {
            params.set('sort', value);
        }
        router.push(`?${params.toString()}`);
        setIsOpen(false);
    };

    const activeSort = currentSort || 'default';

    // Outside click korle dropdown bondho hobar jonno
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const getSortLabel = () => {
        if (activeSort === 'low-high') return 'দাম কম থেকে বেশি';
        if (activeSort === 'high-low') return 'দাম বেশি থেকে কম';
        return 'ডিফল্ট';
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">সাজান</span>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition shadow-xs"
                >
                    <span>{getSortLabel()}</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-50 text-sm">
                    <button
                        onClick={() => handleSort('default')}
                        className={`w-full text-left px-4 py-2.5 flex items-center justify-between hover:bg-gray-50 transition ${activeSort === 'default' ? 'font-semibold text-emerald-700 bg-emerald-50/50' : 'text-gray-700'
                            }`}
                    >
                        <span>ডিফল্ট</span>
                        {activeSort === 'default' && <span className="text-emerald-600 font-bold">✓</span>}
                    </button>
                    <button
                        onClick={() => handleSort('low-high')}
                        className={`w-full text-left px-4 py-2.5 flex items-center justify-between hover:bg-gray-50 transition ${activeSort === 'low-high' ? 'font-semibold text-emerald-700 bg-emerald-50/50' : 'text-gray-700'
                            }`}
                    >
                        <span>দাম কম থেকে বেশি</span>
                        {activeSort === 'low-high' && <span className="text-emerald-600 font-bold">✓</span>}
                    </button>
                    <button
                        onClick={() => handleSort('high-low')}
                        className={`w-full text-left px-4 py-2.5 flex items-center justify-between hover:bg-gray-50 transition ${activeSort === 'high-low' ? 'font-semibold text-emerald-700 bg-emerald-50/50' : 'text-gray-700'
                            }`}
                    >
                        <span>দাম বেশি থেকে কম</span>
                        {activeSort === 'high-low' && <span className="text-emerald-600 font-bold">✓</span>}
                    </button>
                </div>
            )}
        </div>
    );
}