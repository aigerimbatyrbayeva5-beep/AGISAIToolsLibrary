export interface Category {
  id: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export const categories: Category[] = [
  { id: 'lesson-planning', icon: '📅', color: 'text-blue-700', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
  { id: 'assessment', icon: '📊', color: 'text-green-700', bgColor: 'bg-green-50', borderColor: 'border-green-200' },
  { id: 'differentiation', icon: '🔀', color: 'text-purple-700', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' },
  { id: 'presentations', icon: '🖥️', color: 'text-orange-700', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' },
  { id: 'worksheets', icon: '📄', color: 'text-yellow-700', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200' },
  { id: 'research', icon: '🔍', color: 'text-cyan-700', bgColor: 'bg-cyan-50', borderColor: 'border-cyan-200' },
  { id: 'writing', icon: '✍️', color: 'text-pink-700', bgColor: 'bg-pink-50', borderColor: 'border-pink-200' },
  { id: 'images', icon: '🎨', color: 'text-rose-700', bgColor: 'bg-rose-50', borderColor: 'border-rose-200' },
  { id: 'video', icon: '🎬', color: 'text-red-700', bgColor: 'bg-red-50', borderColor: 'border-red-200' },
  { id: 'productivity', icon: '⚡', color: 'text-slate-700', bgColor: 'bg-slate-50', borderColor: 'border-slate-200' },
  { id: 'coding', icon: '💻', color: 'text-indigo-700', bgColor: 'bg-indigo-50', borderColor: 'border-indigo-200' },
  { id: 'student-activities', icon: '🎮', color: 'text-emerald-700', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200' },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
