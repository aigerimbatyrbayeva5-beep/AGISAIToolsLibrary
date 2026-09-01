import { useParams } from 'react-router';
import { translations, type Lang, type Translations, isValidLang } from './translations';

export function useLang(): Lang {
  const { lang } = useParams<{ lang: string }>();
  if (lang && isValidLang(lang)) return lang;
  return 'en';
}

export function useTranslation(): Translations {
  const lang = useLang();
  return translations[lang];
}
