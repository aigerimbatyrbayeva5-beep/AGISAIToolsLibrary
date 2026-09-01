import { useTranslation, useLang } from '../i18n/useTranslation';
import { categories } from '../data/categories';

export interface Filters {
  pricing: string[];
  registration: string[];
  user: string[];
  categories: string[];
}

interface Props {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

function CheckItem({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group">
      <div
        className={`w-4 h-4 rounded flex-shrink-0 border-2 flex items-center justify-center transition-colors ${
          checked ? 'bg-indigo-600 border-indigo-600' : 'border-gray-300 group-hover:border-indigo-400'
        }`}
        onClick={() => onChange(!checked)}
      >
        {checked && (
          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className="text-sm text-gray-700 group-hover:text-gray-900 select-none">{label}</span>
    </label>
  );
}

function PricingCheckItem({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-start gap-2.5 cursor-pointer group" onClick={onChange}>
      <div
        className={`w-4 h-4 mt-0.5 rounded flex-shrink-0 border-2 flex items-center justify-center transition-colors ${
          checked ? 'bg-indigo-600 border-indigo-600' : 'border-gray-300 group-hover:border-indigo-400'
        }`}
      >
        {checked && (
          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <div>
        <p className="text-sm text-gray-700 group-hover:text-gray-900 select-none leading-tight">{label}</p>
        <p className="text-xs text-gray-400 select-none leading-tight mt-0.5">{description}</p>
      </div>
    </label>
  );
}

export default function FilterPanel({ filters, onChange }: Props) {
  const t = useTranslation();
  const lang = useLang();

  function toggleItem(key: keyof Filters, value: string) {
    const current = filters[key];
    const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
    onChange({ ...filters, [key]: next });
  }

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{title}</h4>
      <div className="space-y-3">{children}</div>
    </div>
  );

  const pricingOptions: { value: 'free' | 'freemium' | 'paid'; label: string; description: string }[] = [
    {
      value: 'free',
      label: t.explore.pricingFree,
      description:
        lang === 'ru' ? 'Оплата не требуется' : lang === 'kz' ? 'Төлем қажет емес' : 'No payment required',
    },
    {
      value: 'freemium',
      label: t.explore.pricingFreemium,
      description:
        lang === 'ru'
          ? 'Бесплатная основа, платные расширения'
          : lang === 'kz'
          ? 'Тегін негіз, ақылы мүмкіндіктер'
          : 'Free basic version, optional paid features',
    },
    {
      value: 'paid',
      label: t.explore.pricingPaid,
      description:
        lang === 'ru'
          ? 'Для использования необходима оплата'
          : lang === 'kz'
          ? 'Пайдалану үшін төлем қажет'
          : 'Payment required to use the tool',
    },
  ];

  return (
    <div className="space-y-4">
      <Section title={t.explore.filterPricing}>
        {pricingOptions.map(({ value, label, description }) => (
          <PricingCheckItem
            key={value}
            label={label}
            description={description}
            checked={filters.pricing.includes(value)}
            onChange={() => toggleItem('pricing', value)}
          />
        ))}
      </Section>

      <Section title={t.explore.filterRegistration}>
        <CheckItem
          label={t.explore.registrationRequired}
          checked={filters.registration.includes('required')}
          onChange={() => toggleItem('registration', 'required')}
        />
        <CheckItem
          label={t.explore.noRegistration}
          checked={filters.registration.includes('none')}
          onChange={() => toggleItem('registration', 'none')}
        />
      </Section>

      <Section title={t.explore.filterUser}>
        {(['teacher', 'student', 'both'] as const).map((u) => (
          <CheckItem
            key={u}
            label={t.explore[`user${u.charAt(0).toUpperCase()}${u.slice(1)}` as 'userTeacher' | 'userStudent' | 'userBoth']}
            checked={filters.user.includes(u)}
            onChange={() => toggleItem('user', u)}
          />
        ))}
      </Section>

      <Section title={t.explore.filterCategories}>
        {categories.map((cat) => (
          <CheckItem
            key={cat.id}
            label={`${cat.icon} ${t.categoryNames[cat.id]}`}
            checked={filters.categories.includes(cat.id)}
            onChange={() => toggleItem('categories', cat.id)}
          />
        ))}
      </Section>
    </div>
  );
}
