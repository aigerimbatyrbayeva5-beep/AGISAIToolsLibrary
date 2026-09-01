import { Link } from 'react-router';
import { useState } from 'react';
import type { Tool } from '../data/tools';
import type { Lang } from '../i18n/translations';
import { useTranslation, useLang } from '../i18n/useTranslation';
import { getCategoryById } from '../data/categories';

interface Props {
  tool: Tool;
}

function logoSrcs(domain: string) {
  return [
    `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
    `https://logo.clearbit.com/${domain}`,
    `https://icons.duckduckgo.com/ip3/${domain}.ico`,
  ];
}

function ToolLogo({ tool }: { tool: Tool }) {
  const [stage, setStage] = useState(0);
  const srcs = logoSrcs(tool.domain);

  if (stage < srcs.length) {
    return (
      <img
        key={srcs[stage]}
        src={srcs[stage]}
        alt={tool.name}
        className="w-12 h-12 rounded-xl object-contain bg-white border border-gray-100 shadow-sm flex-shrink-0 p-1"
        onError={() => setStage((s) => s + 1)}
      />
    );
  }
  return (
    <div
      className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-bold text-sm shadow-sm"
      style={{ backgroundColor: tool.logoColor }}
    >
      {tool.logoInitials}
    </div>
  );
}

export default function ToolCard({ tool }: Props) {
  const t = useTranslation();
  const lang = useLang();
  const l = lang as Lang;

  const pricingColors: Record<string, string> = {
    free: 'bg-green-100 text-green-700',
    freemium: 'bg-blue-100 text-blue-700',
    paid: 'bg-amber-100 text-amber-700',
  };

  const primaryCategory = tool.categories[0];
  const cat = getCategoryById(primaryCategory);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col overflow-hidden">
      {/* Card header */}
      <div className="p-5 flex items-start gap-4">
        {/* Logo with emoji */}
        <div
          className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center shadow-sm relative overflow-hidden"
          style={{ backgroundColor: tool.logoColor }}
        >
          {tool.emoji ? (
            <span className="text-2xl leading-none">{tool.emoji}</span>
          ) : (
            <span className="text-white font-bold text-sm">{tool.logoInitials}</span>
          )}
        </div>

        {/* Title + description */}
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-gray-900 text-base leading-tight truncate">{tool.name}</h3>
          <p className="text-gray-500 text-sm leading-snug mt-1 line-clamp-2">
            {tool.description[l]}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="px-5 flex flex-wrap gap-1.5 mb-3">
        {/* Pricing badge */}
        <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full ${pricingColors[tool.pricing]}`}>
          {t.pricingLabels[tool.pricing]}
        </span>

        {/* Category tags */}
        {tool.categories.slice(0, 2).map((catId) => {
          const c = getCategoryById(catId);
          return c ? (
            <span key={catId} className={`inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full ${c.bgColor} ${c.color}`}>
              {c.icon} {t.categoryNames[catId]}
            </span>
          ) : null;
        })}
      </div>

      {/* Status indicators */}
      <div className="px-5 flex flex-wrap gap-3 text-xs mb-4">
        {tool.pricing !== 'paid' && (
          <span className="flex items-center gap-1 text-green-700">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {t.card.freePlan}
          </span>
        )}
        {tool.languages.length > 2 && (
          <span className="flex items-center gap-1 text-blue-700">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {t.card.multilingual}
          </span>
        )}
        <span className={`flex items-center gap-1 ${tool.registrationRequired ? 'text-amber-700' : 'text-gray-500'}`}>
          {tool.registrationRequired ? (
            <>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              {t.card.registrationRequired}
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
              </svg>
              {t.card.noRegistration}
            </>
          )}
        </span>
      </div>

      {/* Best for */}
      <div className="px-5 pb-4 flex-1">
        <p className="text-xs text-gray-400">
          <span className="font-medium text-gray-500">{t.card.bestFor}: </span>
          {tool.categories.map((c) => t.categoryNames[c]).filter(Boolean).join(', ')}
        </p>
      </div>

      {/* Actions */}
      <div className="px-5 pb-5 flex gap-2 border-t border-gray-100 pt-4">
        <Link
          to={`/${lang}/tool/${tool.id}`}
          className="flex-1 inline-flex items-center justify-center bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {t.card.viewDetails}
        </Link>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center border border-gray-300 text-gray-600 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors"
        >
          {t.card.visitTool}
        </a>
      </div>
    </div>
  );
}
