import { Link } from 'react-router';
import { useTranslation, useLang } from '../i18n/useTranslation';

export default function Footer() {
  const t = useTranslation();
  const lang = useLang();

  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://static.tildacdn.pro/tild3266-3536-4136-b935-393337616162/Frame_2.svg"
                alt="Astana Garden International School"
                className="h-10 w-auto flex-shrink-0 brightness-0 invert"
              />
              <div>
                <span className="text-white font-bold text-sm block leading-tight">AI Tools Library</span>
                <span className="text-gray-400 text-xs block leading-tight">Astana Garden International School</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              {t.footer.tagline}.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">{t.footer.links}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={`/${lang}/explore`} className="text-sm hover:text-white transition-colors">
                  {t.footer.explore}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}#find-tool`} className="text-sm hover:text-white transition-colors">
                  {t.footer.categories}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/about`} className="text-sm hover:text-white transition-colors">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <a
                  href="https://gardenschoolastana-my.sharepoint.com/:b:/g/personal/a_batyrbayeva_ags_edu_kz/IQAjdr2H8pEtR58aBJJoXqteAUiGjuoV3mVcSmtioQBBNls?e=yAXXVT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  {lang === 'en' ? 'AI Use Policy' : lang === 'ru' ? 'Политика использования ИИ' : 'ЖИ пайдалану саясаты'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              {lang === 'en' ? 'Contact' : lang === 'ru' ? 'Контакты' : 'Байланыс'}
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300 font-medium">Aigerim Batyrbayeva</p>
              <p className="text-gray-400">
                {lang === 'en' ? 'AI Coordinator' : lang === 'ru' ? 'ИИ-координатор' : 'ЖИ-үйлестіруші'}
              </p>
              <p className="text-gray-400">Astana Garden International School</p>
              <a
                href="mailto:a.batyrbayeva@ags.edu.kz"
                className="text-[#7FCFF5] hover:text-white transition-colors block mt-1"
              >
                a.batyrbayeva@ags.edu.kz
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Astana Garden International School — AI Tools Library
          </p>
          <p className="text-xs text-gray-500">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
