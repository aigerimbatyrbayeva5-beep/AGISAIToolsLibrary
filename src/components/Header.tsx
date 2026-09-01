import { Link, useLocation, useParams } from 'react-router';
import { useState } from 'react';
import { useTranslation, useLang } from '../i18n/useTranslation';
import { VALID_LANGS, type Lang } from '../i18n/translations';

export default function Header() {
  const t = useTranslation();
  const lang = useLang();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  function switchLangPath(targetLang: Lang): string {
    const current = location.pathname;
    const segments = current.split('/').filter(Boolean);
    if (segments.length > 0 && VALID_LANGS.includes(segments[0] as Lang)) {
      segments[0] = targetLang;
    } else {
      segments.unshift(targetLang);
    }
    return '/' + segments.join('/');
  }

  const navLinks = [
    { label: t.nav.home, to: `/${lang}` },
    { label: t.nav.explore, to: `/${lang}/explore` },
    { label: t.nav.about, to: `/${lang}/about` },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={`/${lang}`} className="flex items-center gap-2.5 flex-shrink-0">
            <img
              src="https://static.tildacdn.pro/tild3266-3536-4136-b935-393337616162/Frame_2.svg"
              alt="Astana Garden International School"
              className="h-10 w-auto flex-shrink-0"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-gray-900 text-sm leading-tight block">AI Tools Library</span>
              <span className="text-[#1A73E8] text-xs leading-tight block">Astana Garden International School</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
              {VALID_LANGS.map((l, i) => (
                <span key={l} className="flex items-center">
                  <Link
                    to={switchLangPath(l)}
                    className={`text-xs font-semibold px-2 py-1 rounded-md transition-all ${
                      lang === l
                        ? 'bg-white text-indigo-600 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {l.toUpperCase()}
                  </Link>
                  {i < VALID_LANGS.length - 1 && (
                    <span className="text-gray-300 text-xs">|</span>
                  )}
                </span>
              ))}
            </div>

            {/* CTA button */}
            <Link
              to={`/${lang}/explore`}
              className="hidden sm:inline-flex items-center gap-1.5 bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {t.nav.exploreBtn}
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={`/${lang}/explore`}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              {t.nav.exploreBtn}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
