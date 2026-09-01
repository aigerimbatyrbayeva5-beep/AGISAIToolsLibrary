import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useTranslation, useLang } from '../i18n/useTranslation';
import { categories } from '../data/categories';
import { getFeaturedTools } from '../data/tools';
import CategoryCard from '../components/CategoryCard';
import ToolCard from '../components/ToolCard';

export default function HomePage() {
  const t = useTranslation();
  const lang = useLang();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const featuredTools = getFeaturedTools();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/${lang}/explore?q=${encodeURIComponent(query.trim())}`);
    } else {
      navigate(`/${lang}/explore`);
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 via-white to-white pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
            AI Tools for K–12 Educators
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
            {t.hero.headline}
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
            {t.hero.subtext}
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-8">
            <div className="flex items-center bg-white rounded-2xl border-2 border-gray-200 hover:border-indigo-300 focus-within:border-indigo-500 transition-colors shadow-sm">
              <svg className="ml-4 w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.hero.searchPlaceholder}
                className="flex-1 px-4 py-4 text-gray-800 placeholder-gray-400 bg-transparent outline-none text-base"
              />
              <button
                type="submit"
                className="m-1.5 bg-indigo-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors flex-shrink-0"
              >
                {lang === 'en' ? 'Search' : lang === 'ru' ? 'Найти' : 'Іздеу'}
              </button>
            </div>
          </form>

          {/* Example searches */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['lesson planning', 'assessment', 'presentation', 'quiz'].map((example) => (
              <button
                key={example}
                onClick={() => {
                  setQuery(example);
                  navigate(`/${lang}/explore?q=${encodeURIComponent(example)}`);
                }}
                className="text-xs text-gray-500 bg-white border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 px-3 py-1.5 rounded-full transition-colors"
              >
                {example}
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to={`/${lang}/explore`}
              className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm"
            >
              {t.hero.exploreAll}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`#categories`}
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white hover:border-gray-400 transition-colors"
            >
              {t.hero.browseCategory}
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{t.categories.title}</h2>
          <p className="text-gray-500 text-center mb-10 text-sm">
            {lang === 'en' ? 'Click any category to see matching tools' : lang === 'ru' ? 'Нажмите на категорию, чтобы увидеть инструменты' : 'Сәйкес құралдарды көру үшін санатты басыңыз'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{t.featured.title}</h2>
              <p className="text-gray-500 text-sm mt-1">
                {lang === 'en' ? 'Hand-picked tools for everyday teaching' : lang === 'ru' ? 'Отобранные инструменты для ежедневного преподавания' : 'Күнделікті оқыту үшін таңдалған құралдар'}
              </p>
            </div>
            <Link
              to={`/${lang}/explore`}
              className="text-indigo-600 text-sm font-semibold hover:text-indigo-700 transition-colors hidden sm:block"
            >
              {t.featured.viewAll}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link
              to={`/${lang}/explore`}
              className="text-indigo-600 text-sm font-semibold hover:text-indigo-700"
            >
              {t.featured.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* Find a Tool */}
      <section id="find-tool" className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.findTool.title}</h2>
          <p className="text-gray-500 text-sm mb-10">
            {lang === 'en' ? 'Select a task to find the right AI tool' : lang === 'ru' ? 'Выберите задачу, чтобы найти подходящий инструмент' : 'Қажетті ЖИ құралын табу үшін тапсырманы таңдаңыз'}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {t.findTool.tasks.map((task, i) => {
              const categoryMap = [
                'lesson-planning', 'assessment', 'presentations',
                'differentiation', 'images', 'assessment',
                'research', 'student-activities',
              ];
              const catId = categoryMap[i] || 'lesson-planning';
              return (
                <Link
                  key={task}
                  to={`/${lang}/explore?category=${catId}`}
                  className="inline-flex items-center gap-2 bg-white text-gray-700 text-sm font-medium px-4 py-2.5 rounded-xl border border-gray-200 hover:border-indigo-300 hover:text-indigo-700 hover:bg-indigo-50 transition-all shadow-sm"
                >
                  <span className="text-base">{['📅', '📊', '🖥️', '🔀', '🎨', '💬', '🔍', '🎮'][i]}</span>
                  {task}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Responsible AI */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl border border-slate-200 p-8 text-center">
            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl">
              🛡️
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">{t.responsible.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto mb-6">
              {t.responsible.text}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://gardenschoolastana-my.sharepoint.com/:b:/g/personal/a_batyrbayeva_ags_edu_kz/IQAjdr2H8pEtR58aBJJoXqteAUiGjuoV3mVcSmtioQBBNls?e=yAXXVT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-slate-900 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {lang === 'en' ? 'AGIS AI Use Policy' : lang === 'ru' ? 'Политика использования ИИ' : 'ЖИ пайдалану саясаты'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
