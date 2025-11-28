'use client';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { getAllTools, searchTools } from '@/lib/data';
import ToolCard from '@/components/ToolCard';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ToolsClient() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('name');
  const [isClient, setIsClient] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    const initialCategory = searchParams.get('category') || 'all';
    const initialSearch = searchParams.get('search') || '';
    const initialSort = searchParams.get('sort') || 'name';

    setCategory(initialCategory);
    setSearch(initialSearch);
    setSort(initialSort);
  }, [searchParams]);

  const tools = getAllTools();
  const allCategories = Array.from(new Set(tools.map(t => t.category)));

  const filteredTools = useMemo(() => {
    let filtered = tools;

    if (search) {
      filtered = searchTools(search);
    } else if (category !== 'all') {
      filtered = tools.filter(t => t.category === category);
    }

    return filtered.sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name);
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [tools, search, category, sort]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (category !== 'all') params.set('category', category);
    if (sort !== 'name') params.set('sort', sort);
    router.replace(`/tools?${params.toString()}`, { scroll: false });
  }, [search, category, sort, router]);

  if (!isClient) {
    return null; // Don't render anything until client is ready
  }

  return (
    <>
      <div className="mb-10 rounded-2xl border border-slate-800 bg-slate-950/80 px-5 py-5 md:px-6 md:py-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] animate-[fadeUp_0.8s_ease-out]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="w-full md:flex-1">
            <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-400">
              Search
            </label>
            <input
              type="text"
              placeholder="Search 80+ AI tools…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/60"
            />
          </div>

          <div className="w-full md:w-56">
            <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-400">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/60"
            >
              <option value="all">All categories</option>
              {allCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-44">
            <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-400">
              Sort by
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/60"
            >
              <option value="name">Name</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="mt-4 text-xs text-slate-400">
          Showing <span className="font-semibold text-slate-200">{filteredTools.length}</span> of <span className="font-semibold text-slate-200">{tools.length}</span> tools
        </div>
      </div>

      {filteredTools.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTools.map((tool, index) => (
            <div
              key={tool.id}
              className="animate-[staggerCard_0.7s_ease-out_backwards] hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-200"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/60 px-6 py-20 text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-900 text-3xl">
            🔍
          </div>
          <h3 className="mb-2 text-xl font-semibold">No tools found</h3>
          <p className="mb-6 max-w-sm text-sm text-slate-400">
            Try adjusting your search or category filter
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-600"
          >
            Clear filters
          </Link>
        </div>
      )}
    </>
  );
}
