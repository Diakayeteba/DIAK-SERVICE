import Head from 'next/head';
import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { PRODUCTS, CATEGORIES, filterProducts } from '@/lib/products';

const WA_NUMBER = '22375162416';
const buildWaUrl = (productName, lang) => {
  const msg =
    lang === 'fr'
      ? `Bonjour DIAK-SERVICE 👋\n\nJe souhaite commander :\n\n📦 Produit : ${productName}\n📍 Localisation : \n📋 Quantité : \n💬 Précisions : \n\nMerci !`
      : `Hello DIAK-SERVICE 👋\n\nI would like to order:\n\n📦 Product: ${productName}\n📍 Location: \n📋 Quantity: \n💬 Details: \n\nThank you!`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
};

const ALL_CATEGORIES = ['all', ...Object.keys(CATEGORIES)];

export default function ProduitsPage() {
  const { t, lang } = useLanguage();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  // Lire le paramètre ?cat= depuis l'URL
  useEffect(() => {
    const { cat } = router.query;
    if (cat && ALL_CATEGORIES.includes(cat)) {
      setActiveFilter(cat);
    }
  }, [router.query]);

  const filtered = useMemo(
    () => filterProducts(PRODUCTS, search, activeFilter, lang),
    [search, activeFilter, lang]
  );

  const getCategoryLabel = (key) => {
    if (key === 'all') return lang === 'fr' ? 'Tous' : 'All';
    return lang === 'fr' ? CATEGORIES[key].labelFr : CATEGORIES[key].labelEn;
  };

  const getProductName = (p) => (lang === 'fr' ? p.nameFr : p.nameEn);
  const getProductDesc = (p) => (lang === 'fr' ? p.descFr : p.descEn);
  const getProductPrice = (p) => (lang === 'fr' ? p.priceFr : p.priceEn);

  return (
    <>
      <Head>
        <title>
          {lang === 'fr'
            ? 'Nos Produits | DIAK-SERVICE Bamako'
            : 'Our Products | DIAK-SERVICE Bamako'}
        </title>
        <meta
          name="description"
          content={
            lang === 'fr'
              ? 'Découvrez tous les produits disponibles chez DIAK-SERVICE à Bamako : ordinateurs, imprimantes, accessoires, papeterie et mobilier de bureau.'
              : 'Discover all products available at DIAK-SERVICE in Bamako: computers, printers, accessories, stationery and office furniture.'
          }
        />
      </Head>

      <Navbar />

      {/* Page header */}
      <section className="hero-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(to right,#fff 1px,transparent 1px)', backgroundSize: '50px 50px' }}
        />
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{t.productsPage.title}</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">{t.productsPage.subtitle}</p>
        </div>
      </section>

      <main className="py-12 bg-background min-h-screen">
        <div className="container-custom">

          {/* ── Search + Filters ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-8">
            {/* Search bar */}
            <div className="relative mb-4">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.productsPage.search}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-700 placeholder-gray-400 text-base transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap gap-2">
              {ALL_CATEGORIES.map((key) => (
                <button
                  key={key}
                  onClick={() => { setActiveFilter(key); setSearch(''); }}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeFilter === key
                      ? 'bg-primary text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {getCategoryLabel(key)}
                  {activeFilter === key && key !== 'all' && (
                    <span className="ml-1.5 bg-white/30 text-white text-xs px-1.5 py-0.5 rounded-full">
                      {PRODUCTS.filter(p => p.category === key).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-800">{filtered.length}</span>{' '}
              {lang === 'fr' ? 'produit(s) trouvé(s)' : 'product(s) found'}
              {activeFilter !== 'all' && (
                <span className="ml-2 text-primary font-medium">
                  — {getCategoryLabel(activeFilter)}
                </span>
              )}
              {search && (
                <span className="ml-2 text-secondary font-medium">
                  «{search}»
                </span>
              )}
            </p>
            {(search || activeFilter !== 'all') && (
              <button
                onClick={() => { setSearch(''); setActiveFilter('all'); }}
                className="text-xs text-gray-400 hover:text-primary underline"
              >
                {lang === 'fr' ? 'Réinitialiser' : 'Reset'}
              </button>
            )}
          </div>

          {/* ── Products grid ── */}
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              <div className="text-7xl mb-5">🔍</div>
              <p className="text-xl font-semibold text-gray-600 mb-2">{t.productsPage.noResults}</p>
              <p className="text-gray-400 text-sm">
                {lang === 'fr'
                  ? 'Essayez un autre terme ou parcourez toutes les catégories.'
                  : 'Try another term or browse all categories.'}
              </p>
              <button
                onClick={() => { setSearch(''); setActiveFilter('all'); }}
                className="mt-6 btn-primary inline-flex items-center gap-2 text-sm"
              >
                {lang === 'fr' ? 'Voir tous les produits' : 'View all products'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover flex flex-col group shadow-sm hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative w-full h-44 overflow-hidden bg-gray-50 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={getProductName(product)}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {/* Category badge — coin bas gauche, discret */}
                    <div className="absolute bottom-2 left-2 bg-primary/85 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full font-medium">
                      {getCategoryLabel(product.category)}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-start gap-1.5 mb-1">
                      <h3 className="font-bold text-gray-800 text-sm group-hover:text-primary transition-colors leading-snug flex-1">
                        {getProductName(product)}
                      </h3>
                      <span className="flex-shrink-0 bg-green-100 text-green-600 text-xs px-1.5 py-0.5 rounded-full font-semibold mt-0.5">✓</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-3 leading-relaxed line-clamp-2 flex-1">
                      {getProductDesc(product)}
                    </p>
                    <p className="text-primary font-bold text-xs mb-3">{getProductPrice(product)}</p>
                    <a
                      href={buildWaUrl(getProductName(product), lang)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors text-center inline-flex items-center justify-center gap-1 group-hover:shadow-md"
                    >
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {t.products.contactBtn}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── CTA ── */}
          <div className="mt-16 text-center bg-gradient-to-br from-primary to-blue-800 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5"
              style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(to right,#fff 1px,transparent 1px)', backgroundSize: '40px 40px' }}
            />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-black mb-4">
                {lang === 'fr'
                  ? 'Vous ne trouvez pas ce que vous cherchez ?'
                  : "Can't find what you're looking for?"}
              </h2>
              <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto">
                {lang === 'fr'
                  ? 'Contactez-nous directement, nous avons encore plus de produits disponibles en magasin.'
                  : 'Contact us directly, we have even more products available in store.'}
              </p>
              <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
