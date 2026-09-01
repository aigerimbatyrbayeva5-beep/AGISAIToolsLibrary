import { Link } from 'react-router';
import { useTranslation, useLang } from '../i18n/useTranslation';

export default function AboutPage() {
  const t = useTranslation();
  const lang = useLang();

  const evaluationIcons = ['🎯', '♿', '💰', '🖱️', '🌍', '📤', '🏫', '⚠️'];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-14">
        <div className="flex justify-center mb-4">
          <img
            src="https://static.tildacdn.pro/tild3266-3536-4136-b935-393337616162/Frame_2.svg"
            alt="Astana Garden International School"
            className="h-20 w-auto"
          />
        </div>
        <p className="text-sm font-semibold text-gray-500 mb-2 tracking-wide uppercase">Astana Garden International School</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">{t.about.title}</h1>
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">{t.about.subtitle}</p>
      </div>

      {/* How tools are evaluated */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{t.about.howEvaluated}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.about.evaluationCriteria.map((criterion, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
              <span className="text-xl flex-shrink-0">{evaluationIcons[i]}</span>
              <span className="text-sm font-medium text-gray-700">{criterion}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Built for educators */}
      <section className="bg-indigo-50 rounded-2xl border border-indigo-100 p-6 sm:p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
            👩‍🏫
          </div>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2">{t.about.teamTitle}</h2>
            <p className="text-indigo-800 text-sm leading-relaxed">{t.about.teamText}</p>
          </div>
        </div>
      </section>

      {/* Responsible AI */}
      <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
            🛡️
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              {lang === 'en' ? 'Responsible AI Use' : lang === 'ru' ? 'Ответственное использование ИИ' : 'ЖИ-ні жауапты пайдалану'}
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed mb-3">
              {lang === 'en'
                ? 'All tools in this library are evaluated for educational appropriateness, privacy considerations, and age suitability. Always check your school\'s AI policy before using any tool with students.'
                : lang === 'ru'
                ? 'Все инструменты в этой библиотеке оцениваются на образовательную пригодность, конфиденциальность и возрастное соответствие. Всегда проверяйте политику школы в области ИИ перед использованием инструментов с учениками.'
                : 'Бұл кітапханадағы барлық құралдар білім берудегі сәйкестігі, құпиялылық және жас сәйкестігі тұрғысынан бағаланады. Оқушылармен кез келген құралды пайдаланбас бұрын мектептің ЖИ саясатын тексеріңіз.'}
            </p>
            {lang === 'en' && (
              <a
                href="https://gardenschoolastana-my.sharepoint.com/:b:/g/personal/a_batyrbayeva_ags_edu_kz/IQAjdr2H8pEtR58aBJJoXqteAUiGjuoV3mVcSmtioQBBNls?e=yAXXVT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                AGIS AI Use Policy
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-amber-50 rounded-2xl border border-amber-200 p-6">
        <div className="flex items-start gap-3">
          <span className="text-xl flex-shrink-0">⚡</span>
          <div>
            <h3 className="font-bold text-amber-900 text-sm mb-1">
              {lang === 'en' ? 'Important Notice' : lang === 'ru' ? 'Важное уведомление' : 'Маңызды ескерту'}
            </h3>
            <p className="text-amber-800 text-sm leading-relaxed">{t.about.disclaimer}</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          {lang === 'en' ? 'Contact' : lang === 'ru' ? 'Контакты' : 'Байланыс'}
        </h2>
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="flex-shrink-0">
            <img
              src="https://static.tildacdn.pro/tild3266-3536-4136-b935-393337616162/Frame_2.svg"
              alt="Astana Garden International School"
              className="h-14 w-auto"
            />
          </div>
          <div>
            <p className="font-bold text-gray-900 text-lg">Aigerim Batyrbayeva</p>
            <p className="text-indigo-600 font-medium text-sm mt-0.5">
              {lang === 'en' ? 'AI Coordinator' : lang === 'ru' ? 'ИИ-координатор' : 'ЖИ-үйлестіруші'}
            </p>
            <p className="text-gray-500 text-sm mt-1">Astana Garden International School</p>
            <a
              href="mailto:a.batyrbayeva@ags.edu.kz"
              className="inline-flex items-center gap-2 mt-3 text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              a.batyrbayeva@ags.edu.kz
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          to={`/${lang}/explore`}
          className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
        >
          {lang === 'en' ? 'Explore AI Tools' : lang === 'ru' ? 'Смотреть инструменты' : 'ЖИ құралдарын зерттеу'}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
