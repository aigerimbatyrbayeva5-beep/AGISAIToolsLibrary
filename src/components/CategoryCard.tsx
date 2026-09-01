import { Link } from 'react-router';
import type { Category } from '../data/categories';
import { useTranslation, useLang } from '../i18n/useTranslation';
import { getToolsByCategory } from '../data/tools';

interface Props {
  category: Category;
}

export default function CategoryCard({ category }: Props) {
  const t = useTranslation();
  const lang = useLang();
  const count = getToolsByCategory(category.id).length;

  return (
    <Link
      to={`/${lang}/explore?category=${category.id}`}
      className={`flex flex-col items-center gap-2 p-4 rounded-2xl border ${category.bgColor} ${category.borderColor} hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center cursor-pointer group`}
    >
      <span className="text-2xl">{category.icon}</span>
      <span className={`text-sm font-semibold ${category.color} leading-tight`}>
        {t.categoryNames[category.id]}
      </span>
      <span className="text-xs text-gray-400">
        {count} {t.categories.tools}
      </span>
    </Link>
  );
}
