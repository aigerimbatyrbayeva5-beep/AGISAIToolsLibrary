import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { useTranslation, useLang } from '../i18n/useTranslation';
import { tools } from '../data/tools';
import type { Lang } from '../i18n/translations';
import ToolCard from '../components/ToolCard';
import FilterPanel, { type Filters } from '../components/FilterPanel';

type SortOption = 'recommended' | 'az' | 'recent';

const EMPTY_FILTERS: Filters = {
  pricing: [],
  registration: [],
  user: [],
  categories: [],
};

export default function ExplorePage() {
  const t = useTranslation();
  const lang = useLang() as Lang;
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [filters, setFilters] = useState<Filters>(() => {
    const cat = searchParams.get('category');
    return cat ? { ...EMPTY_FILTERS, categories: [cat] } : EMPTY_FILTERS;
  });
  const [sort, setSort] = useState<SortOption>('recommended');
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const q = searchParams.get('q') || '';
    const cat = searchParams.get('category') || '';
    setQuery(q);
    if (cat) setFilters((f) => ({ ...f, categories: [cat] }));
  }, [searchParams]);

  const hasActiveFilters =
    filters.pricing.length > 0 ||
    filters.registration.length > 0 ||
    filters.user.length > 0 ||
    filters.categories.length > 0;

  const filtered = useMemo(() => {
    let result = [...tools];

    // Text search
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description[lang].toLowerCase().includes(q) ||
          t.functions[lang].some((f) => f.toLowerCase().includes(q)) ||
          t.categories.some((c) => c.includes(q))
      );
    }

    // Pricing
    if (filters.pricing.length > 0) {
      result = result.filter((t) => filters.pricing.includes(t.pricing));
    }

    // Registration
    if (filters.registration.length > 0) {
      result = result.filter((t) => {
        if (filters.registration.includes('required') && t.registrationRequired) return true;
        if (filters.registration.includes('none') && !t.registrationRequired) return true;
        return false;
      });
    }

    // User
    if (filters.user.length > 0) {
      result = result.filter((t) => filters.user.includes(t.targetUser));
    }

    // Categories
    if (filters.categories.length > 0) {
      result = result.filter((t) => t.categories.some((c) => filters.categories.includes(c)));
    }

    // Sort
    if (sort === 'az') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'recent') {
      result.sort((a, b) => b.addedDate.localeCompare(a.addedDate));
    } else {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [query, filters, sort, lang]);

  function clearFilters() {
    setFilters(EMPTY_FILTERS);
    setQuery('');
    setSearchParams({});
  }

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'recommended', label: t.explore.sortRecommended },
    { value: 'az', label: t.explore.sortAZ },
    { value: 'recent', label: t.explore.sortRecent },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{t.explore.title}</h1>
        <p className="text-gray-500">{t.explore.subtitle}</p>
      </div>

      {/* Search bar */}
      <div className="relative mb-6">
        <div className="flex items-center bg-white rounded-xl border-2 border-gray-200 focus-within:border-indigo-500 transition-colors shadow-sm">
          <svg className="ml-4 w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.explore.searchPlaceholder}
            className="flex-1 px-4 py-3.5 text-gray-800 placeholder-gray-400 bg-transparent outline-none text-sm"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="mr-3 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar filters — desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-200 p-5 sticky top-20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 text-sm">{t.explore.filters}</h3>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  {t.explore.clearFilters}
                </button>
              )}
            </div>
            <FilterPanel filters={filters} onChange={setFilters} />
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
            <div className="flex items-center gap-3">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="lg:hidden inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                </svg>
                {t.explore.filters}
                {hasActiveFilters && (
                  <span className="bg-indigo-600 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {filters.pricing.length + filters.registration.length + filters.user.length + filters.categories.length}
                  </span>
                )}
              </button>

              <span className="text-sm text-gray-500">{t.explore.resultsCount(filtered.length)}</span>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 hidden sm:block">{t.explore.sortBy}:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="text-sm bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-700 outline-none focus:border-indigo-400 cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile filter panel */}
          {filtersOpen && (
            <div className="lg:hidden bg-white rounded-2xl border border-gray-200 p-5 mb-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 text-sm">{t.explore.filters}</h3>
                <div className="flex items-center gap-3">
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      {t.explore.clearFilters}
                    </button>
                  )}
                  <button onClick={() => setFiltersOpen(false)}>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <FilterPanel filters={filters} onChange={setFilters} />
            </div>
          )}

          {/* Active filter chips */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mb-4">
              {filters.pricing.map((p) => (
                <span key={p} className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full">
                  {t.pricingLabels[p]}
                  <button onClick={() => setFilters((f) => ({ ...f, pricing: f.pricing.filter((x) => x !== p) }))}>×</button>
                </span>
              ))}
              {filters.categories.map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full">
                  {t.categoryNames[c]}
                  <button onClick={() => setFilters((f) => ({ ...f, categories: f.categories.filter((x) => x !== c) }))}>×</button>
                </span>
              ))}
            </div>
          )}

          {/* Tool grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-base font-medium text-gray-600 mb-2">{t.explore.noResults}</p>
              <button
                onClick={clearFilters}
                className="text-sm text-indigo-600 font-medium hover:text-indigo-700 mt-2"
              >
                {t.explore.clearFilters}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
