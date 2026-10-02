import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NewsCard } from '@/components/NewsCard';
import { articles, categories, featuredStories } from '@/lib/data';

export default function HomePage() {
  const latest = articles.slice(0, 6);
  const topStory = featuredStories[0];

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Header />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-6 lg:px-8">
        <div className="mb-10 border-y border-slate-200 bg-white py-3 text-sm text-slate-600">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold uppercase tracking-[0.25em] text-sky-700">Breaking</span>
            <span>City leaders approve a new transit overhaul</span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span>Markets rebound as investors await policy signals</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.6fr_0.9fr]">
          <article className="overflow-hidden rounded-2xl bg-slate-950 text-white shadow-soft">
            <img src={topStory.image} alt={topStory.title} className="h-80 w-full object-cover" />
            <div className="p-7 lg:p-8">
              <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                <span>{topStory.category}</span>
                <span className="text-slate-400">•</span>
                <span>{topStory.readTime}</span>
              </div>
              <h1 className="max-w-xl text-3xl font-black leading-tight md:text-5xl">{topStory.title}</h1>
              <p className="mt-4 max-w-xl text-base text-slate-300">{topStory.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-300">
                <span>{topStory.author}</span>
                <span>•</span>
                <time>{topStory.publishedAt}</time>
              </div>
            </div>
          </article>

          <div className="space-y-5">
            {featuredStories.slice(1, 4).map((story) => (
              <NewsCard key={story.slug} story={story} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-black tracking-tight">Top stories</h2>
          <a href="/search" className="text-sm font-semibold text-sky-700 hover:text-sky-800">Browse all →</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {latest.map((story) => (
            <NewsCard key={story.slug} story={story} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-black tracking-tight">Sections</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category}
              href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-sky-200"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Coverage</p>
              <h3 className="mt-4 text-2xl font-black">{category}</h3>
              <p className="mt-3 text-sm text-slate-600">The latest reporting, interviews, and daily analysis.</p>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
