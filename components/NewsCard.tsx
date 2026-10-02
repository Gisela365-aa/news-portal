import Link from 'next/link';

type Story = {
  slug: string;
  title: string;
  category: string;
  author: string;
  excerpt: string;
  image: string;
  publishedAt: string;
  readTime: string;
  content: string[];
};

export function NewsCard({ story, compact = false }: { story: Story; compact?: boolean }) {
  return (
    <article className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft ${compact ? 'flex h-full flex-col' : ''}`}>
      <Link href={`/article/${story.slug}`} className="block overflow-hidden">
        <img src={story.image} alt={story.title} className={`${compact ? 'h-40' : 'h-52'} w-full object-cover transition duration-300 hover:scale-[1.02]`} />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">{story.category}</p>
        <Link href={`/article/${story.slug}`} className="mt-3 block text-xl font-black leading-tight hover:text-sky-700">
          {story.title}
        </Link>
        {!compact && <p className="mt-3 text-sm leading-6 text-slate-600">{story.excerpt}</p>}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>{story.author}</span>
          <span>{story.publishedAt}</span>
        </div>
      </div>
    </article>
  );
}
