import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/lib/data';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const story = articles.find((item) => item.slug === params.slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="bg-paper text-ink">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:px-8">
          <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
            Northstar Daily
          </Link>
          <Link href="/search" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
            Search stories
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-4 py-10 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">{story.category}</p>
        <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{story.title}</h1>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <span>{story.author}</span>
          <span>•</span>
          <time>{story.publishedAt}</time>
          <span>•</span>
          <span>{story.readTime}</span>
        </div>

        <img src={story.image} alt={story.title} className="mt-8 h-[420px] w-full rounded-2xl object-cover shadow-soft" />

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-lg leading-relaxed text-slate-700">{story.excerpt}</p>
        </div>

        <div className="prose prose-slate mt-10 max-w-none text-lg leading-8 text-slate-800">
          {story.content.map((paragraph) => (
            <p key={paragraph} className="mb-6">{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-black">Related stories</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {articles
              .filter((item) => item.slug !== story.slug && item.category === story.category)
              .slice(0, 2)
              .map((related) => (
                <Link key={related.slug} href={`/article/${related.slug}`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft hover:border-sky-200">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">{related.category}</p>
                  <h3 className="mt-3 text-xl font-bold leading-tight">{related.title}</h3>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </main>
  );
}
