import { Outlet, useParams, Navigate } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { isValidLang } from '../i18n/translations';

export default function RootLayout() {
  const { lang } = useParams<{ lang: string }>();

  if (!lang || !isValidLang(lang)) {
    return <Navigate to="/en" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
