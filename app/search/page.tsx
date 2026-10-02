import Link from 'next/link';
import { articles, categories } from '@/lib/data';

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const query = (searchParams?.q || '').trim().toLowerCase();

  const filtered = query
    ? articles.filter((story) => {
        const haystack = `${story.title} ${story.excerpt} ${story.category} ${story.author}`.toLowerCase();
        return haystack.includes(query);
      })
    : articles;

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

      <section className="mx-auto max-w-5xl px-4 py-12 lg:px-8">
        <h1 className="text-4xl font-black tracking-tight">Search stories</h1>

        <form className="mt-8">
          <div className="flex gap-3">
            <input
              name="q"
              defaultValue={query}
              placeholder="Search by topic, author, or headline"
              className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-base shadow-sm outline-none ring-0 transition focus:border-sky-300"
            />
            <button type="submit" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
              Search
            </button>
          </div>
        </form>

        <div className="mt-10 space-y-6">
          {filtered.length > 0 ? (
            filtered.map((story) => (
              <article key={story.slug} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <img src={story.image} alt={story.title} className="h-28 w-full rounded-xl object-cover md:w-44" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">{story.category}</p>
                    <Link href={`/article/${story.slug}`} className="mt-2 block text-2xl font-bold hover:text-sky-700">
                      {story.title}
                    </Link>
                    <p className="mt-2 text-sm text-slate-600">{story.excerpt}</p>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-slate-600">
              No stories matched your search. Try another keyword.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
