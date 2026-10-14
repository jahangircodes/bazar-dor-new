import SortDropdown from '@/components/SortDropdown';
import { getCategories, getProductsByCategory, toBengaliNumber } from '@/lib/api';
import { Product } from '@/types/product';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function CategoryPage({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ sort?: string }>;
}) {
    const { slug } = await params;
    const { sort } = await searchParams;

    const categories = await getCategories();
    const currentCategory = categories.find((c) => c.slug === slug);

    if (!currentCategory) {
        notFound();
    }

    const products: Product[] = await getProductsByCategory(slug);

    if (sort === 'low-high') {
        products.sort((a, b) => a.today - b.today);
    } else if (sort === 'high-low') {
        products.sort((a, b) => b.today - a.today);
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <div>
                <Link
                    href="/"
                    className="text-sm font-medium text-gray-500 hover:text-emerald-700 transition inline-flex items-center gap-1"
                >
                    ← হোম পেজে ফিরে যান
                </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3">
                    <span className="text-4xl p-3 bg-emerald-50 rounded-xl">{currentCategory.icon}</span>
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{currentCategory.nameBn}</h1>
                        <p className="text-xs sm:text-sm text-gray-500">এই ক্যাটাগরির সমস্ত পণ্যের তালিকা ও বাজার দর</p>
                    </div>
                </div>

                <SortDropdown currentSort={sort || 'default'} />
            </div>

            {products.length === 0 ? (
                <div className="text-center py-16 bg-white border border-gray-200 rounded-2xl space-y-4">
                    <h2 className="text-lg font-bold text-gray-800">এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি</h2>
                    <Link href="/" className="inline-block bg-emerald-600 text-white px-5 py-2 rounded-xl text-sm font-medium">
                        হোম পেজে ফিরে যান
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/product/${product.id}`}
                            className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between gap-4 group"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-3xl p-2 bg-gray-50 rounded-xl group-hover:scale-110 transition">
                                    {product.image}
                                </span>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-base">{product.nameBn}</h3>
                                    <span className="text-xs text-gray-400">প্রতি {product.unit}</span>
                                </div>
                            </div>
                            <div className="flex items-end justify-between border-t border-gray-100 pt-3">
                                <div>
                                    <span className="text-xs text-gray-500 block">আজকের দাম</span>
                                    <span className="text-lg font-bold text-emerald-700">{toBengaliNumber(product.today)} টাকা</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}