import Link from 'next/link';
import { categories } from '@/lib/data';

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:px-8">
        <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
          Northstar Daily
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {categories.map((category) => (
            <Link key={category} href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="transition hover:text-slate-900">
              {category}
            </Link>
          ))}
        </nav>

        <Link href="/search" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
          Search
        </Link>
      </div>
    </header>
  );
}
