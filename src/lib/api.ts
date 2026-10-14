import { Category, Product } from '@/types/product';

const BASE_URL = 'https://openapi.programming-hero.com/api/bazardor';

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/categories`, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products?category=${categorySlug}`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch category products');
  return res.json();
}

export async function getProductById(id: string | number): Promise<Product | null> {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export function toBengaliNumber(num: number | string | undefined | null): string {
  if (num === undefined || num === null || isNaN(Number(num))) {
    return '০';
  }
  const englishToBengaliDigits: { [key: string]: string } = {
    '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
    '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
  };
  return num.toString().replace(/[0-9]/g, (w) => englishToBengaliDigits[w] || w);
}