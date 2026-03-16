import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>404 | DIAK-SERVICE</title>
      </Head>
      <Navbar />
      <main className="min-h-screen hero-gradient flex items-center justify-center">
        <div className="text-center text-white px-4">
          <div className="text-8xl font-black mb-6 text-secondary">404</div>
          <h1 className="text-3xl font-bold mb-4">{t.notFound.title}</h1>
          <p className="text-white/70 text-lg mb-8">{t.notFound.desc}</p>
          <Link href="/" className="btn-secondary inline-flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t.notFound.back}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
