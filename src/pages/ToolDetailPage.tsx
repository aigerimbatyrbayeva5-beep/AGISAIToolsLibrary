import { Link, useParams, Navigate } from 'react-router';
import { useState } from 'react';
import { useTranslation, useLang } from '../i18n/useTranslation';
import { getToolById, tools } from '../data/tools';
import type { Lang } from '../i18n/translations';
import { getCategoryById } from '../data/categories';
import ToolCard from '../components/ToolCard';

export default function ToolDetailPage() {
  const t = useTranslation();
  const lang = useLang() as Lang;
  const { toolId } = useParams<{ toolId: string }>();

  const tool = getToolById(toolId || '');

  if (!tool) {
    return <Navigate to={`/${lang}/explore`} replace />;
  }

  const pricingColors = {
    free: 'bg-green-100 text-green-700',
    freemium: 'bg-blue-100 text-blue-700',
    paid: 'bg-amber-100 text-amber-700',
  };

  // Similar tools: same category, different tool
  const similar = tools
    .filter((other) => other.id !== tool.id && other.categories.some((c) => tool.categories.includes(c)))
    .slice(0, 3);

  const [logoStage, setLogoStage] = useState(0);
  const logoSrcs = [
    `https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`,
    `https://logo.clearbit.com/${tool.domain}`,
    `https://icons.duckduckgo.com/ip3/${tool.domain}.ico`,
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back */}
      <Link
        to={`/${lang}/explore`}
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-indigo-600 transition-colors mb-6"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {t.detail.backToExplore}
      </Link>

      {/* Hero card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 mb-6">
        <div className="flex flex-col sm:flex-row gap-5 sm:items-start">
          {/* Logo */}
          {logoStage < logoSrcs.length ? (
            <img
              key={logoSrcs[logoStage]}
              src={logoSrcs[logoStage]}
              alt={tool.name}
              className="w-16 h-16 rounded-2xl object-contain bg-white border border-gray-100 shadow-sm flex-shrink-0 p-1"
              onError={() => setLogoStage((s) => s + 1)}
            />
          ) : (
            <div
              className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-white font-bold text-lg shadow-sm"
              style={{ backgroundColor: tool.logoColor }}
            >
              {tool.logoInitials}
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
              <h1 className="text-2xl font-extrabold text-gray-900">{tool.name}</h1>
              <span className={`inline-flex self-start items-center text-xs font-semibold px-2.5 py-1 rounded-full ${pricingColors[tool.pricing]}`}>
                {t.pricingLabels[tool.pricing]}
              </span>
            </div>

            <p className="text-gray-600 text-base leading-relaxed mb-4">{tool.description[lang]}</p>

            {/* Category tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tool.categories.map((catId) => {
                const cat = getCategoryById(catId);
                return cat ? (
                  <span key={catId} className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full ${cat.bgColor} ${cat.color}`}>
                    {cat.icon} {t.categoryNames[catId]}
                  </span>
                ) : null;
              })}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors"
              >
                {t.detail.visitTool.replace('tool', tool.name)}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overview */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">{t.detail.overview}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{tool.teacherUse[lang]}</p>
          </section>

          {/* What can you do */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">{t.detail.whatCanYouDo}</h2>
            <div className="flex flex-wrap gap-2">
              {tool.functions[lang].map((fn) => (
                <span key={fn} className="inline-flex items-center bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-xl">
                  {fn}
                </span>
              ))}
            </div>
          </section>

          {/* Advantages */}
          <section className="bg-green-50 rounded-2xl border border-green-200 p-6">
            <h2 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
              <span className="text-xl">✅</span> {t.detail.advantages}
            </h2>
            <ul className="space-y-3">
              {tool.advantages[lang].map((adv) => (
                <li key={adv} className="flex items-start gap-2.5 text-sm text-green-800">
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {adv}
                </li>
              ))}
            </ul>
          </section>

          {/* Limitations */}
          <section className="bg-amber-50 rounded-2xl border border-amber-200 p-6">
            <h2 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
              <span className="text-xl">⚠️</span> {t.detail.limitations}
            </h2>
            <ul className="space-y-3">
              {tool.limitations[lang].map((lim) => (
                <li key={lim} className="flex items-start gap-2.5 text-sm text-amber-800">
                  <svg className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {lim}
                </li>
              ))}
            </ul>
          </section>

          {/* Classroom examples */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-5">{t.detail.classroomExamples}</h2>
            <div className="space-y-4">
              {tool.classroomExamples.map((example, i) => (
                <div key={i} className="bg-indigo-50 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-900 text-sm mb-1.5">{example.title[lang]}</h3>
                  <p className="text-indigo-800 text-sm leading-relaxed">{example.text[lang]}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Access & Pricing */}
          <aside className="bg-white rounded-2xl border border-gray-200 p-5">
            <h3 className="font-bold text-gray-900 text-sm mb-4">{t.detail.accessPricing}</h3>
            <div className="space-y-3">
              {[
                {
                  label: t.detail.pricing,
                  value: <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${pricingColors[tool.pricing]}`}>{t.pricingLabels[tool.pricing]}</span>,
                },
                {
                  label: t.detail.registration,
                  value: (
                    <span className={`text-xs font-medium ${tool.registrationRequired ? 'text-amber-700' : 'text-green-700'}`}>
                      {tool.registrationRequired ? t.detail.yes : t.detail.no}
                    </span>
                  ),
                },
                {
                  label: t.detail.freePlan,
                  value: (
                    <span className={`text-xs font-medium ${tool.pricing !== 'paid' ? 'text-green-700' : 'text-gray-500'}`}>
                      {tool.pricing !== 'paid' ? t.detail.yes : t.detail.no}
                    </span>
                  ),
                },
                {
                  label: t.detail.freeWithoutReg,
                  value: (
                    <span className={`text-xs font-medium ${tool.freeWithoutRegistration ? 'text-green-700' : 'text-gray-500'}`}>
                      {tool.freeWithoutRegistration ? t.detail.yes : t.detail.no}
                    </span>
                  ),
                },
                {
                  label: t.detail.languages,
                  value: <span className="text-xs text-gray-700">{tool.languages.join(', ')}</span>,
                },
                {
                  label: t.detail.exportFormats,
                  value: <span className="text-xs text-gray-700">{tool.exportFormats.join(', ')}</span>,
                },
              ].map((row, i) => (
                <div key={i} className="flex items-start justify-between gap-2 text-sm py-1.5 border-b border-gray-50 last:border-0">
                  <span className="text-gray-500 text-xs flex-shrink-0">{row.label}</span>
                  <span className="text-right">{row.value}</span>
                </div>
              ))}
            </div>

            {tool.pricing !== 'paid' && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-600 mb-1">{t.detail.freeLimitations}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{tool.freePlanLimitations[lang]}</p>
              </div>
            )}
          </aside>

          {/* Target user */}
          <aside className="bg-indigo-50 rounded-2xl border border-indigo-100 p-5">
            <h3 className="font-bold text-indigo-900 text-sm mb-3">{t.detail.bestForTeachers}</h3>
            <p className="text-indigo-800 text-sm leading-relaxed">{tool.teacherUse[lang]}</p>
          </aside>

          {/* Visit tool CTA */}
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-indigo-600 text-white font-semibold text-sm px-5 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
          >
            {t.detail.visitTool}
          </a>
        </div>
      </div>

      {/* Similar tools */}
      {similar.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{t.detail.similarTools}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {similar.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
