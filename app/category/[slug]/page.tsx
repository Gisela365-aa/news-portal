import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, categories } from '@/lib/data';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const stories = articles.filter((story) => story.category === categoryName);

  if (!categories.includes(categoryName) || stories.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:px-8">
          <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
            Northstar Daily
          </Link>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            {categories.map((category) => (
              <Link key={category} href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                {category}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">Section</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight">{categoryName}</h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story) => (
            <article key={story.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
              <img src={story.image} alt={story.title} className="h-52 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">{story.category}</p>
                <Link href={`/article/${story.slug}`} className="mt-3 block text-2xl font-bold leading-tight hover:text-sky-700">
                  {story.title}
                </Link>
                <p className="mt-3 text-sm text-slate-600">{story.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
