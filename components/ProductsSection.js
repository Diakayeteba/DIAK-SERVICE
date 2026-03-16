import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { PRODUCTS, CATEGORIES } from '@/lib/products';

const WA_NUMBER = '22384161965';
const buildWaUrl = (productName, lang) => {
  const msg =
    lang === 'fr'
      ? `Bonjour DIAK-SERVICE 👋\n\nJe souhaite commander :\n\n📦 Produit : ${productName}\n📍 Localisation : \n📋 Quantité : \n💬 Précisions : \n\nMerci !`
      : `Hello DIAK-SERVICE 👋\n\nI would like to order:\n\n📦 Product: ${productName}\n📍 Location: \n📋 Quantity: \n💬 Details: \n\nThank you!`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
};

// 8 produits vedettes sélectionnés (un mix de catégories)
const FEATURED_IDS = ['ord-1', 'ord-2', 'imp-1', 'acc-4', 'imp-3', 'mob-5', 'pap-1', 'acc-6'];

const cardBorderColors = [
  'hover:border-blue-300',
  'hover:border-gray-300',
  'hover:border-purple-300',
  'hover:border-green-300',
  'hover:border-orange-300',
  'hover:border-teal-300',
  'hover:border-yellow-300',
  'hover:border-red-300',
];

export default function ProductsSection() {
  const { t, lang } = useLanguage();

  const featured = FEATURED_IDS
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean);

  const getProductName = (p) => (lang === 'fr' ? p.nameFr : p.nameEn);
  const getProductDesc = (p) => (lang === 'fr' ? p.descFr : p.descEn);
  const getProductPrice = (p) => (lang === 'fr' ? p.priceFr : p.priceEn);
  const getCategoryLabel = (key) =>
    lang === 'fr' ? CATEGORIES[key].labelFr : CATEGORIES[key].labelEn;

  return (
    <section className="py-20 bg-white" id="products">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3 bg-primary/10 px-3 py-1 rounded-full">
            {t.products.available}
          </span>
          <h2 className="section-title">{t.products.title}</h2>
          <p className="section-subtitle">{t.products.subtitle}</p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, index) => (
            <div
              key={product.id}
              className={`group rounded-2xl border-2 border-gray-100 ${cardBorderColors[index]} bg-white p-4 card-hover flex flex-col transition-all duration-300`}
            >
              {/* Product image */}
              <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 bg-gray-50">
                <Image
                  src={product.image}
                  alt={getProductName(product)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Category badge */}
                <div className="absolute top-2 left-2 bg-primary/85 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full font-medium">
                  {getCategoryLabel(product.category)}
                </div>
                {/* Available badge */}
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                  ✓ {t.products.available}
                </div>
              </div>

              {/* Product info */}
              <div className="flex-1 flex flex-col">
                <h3 className="font-bold text-gray-800 text-base mb-2 group-hover:text-primary transition-colors">
                  {getProductName(product)}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed flex-1 line-clamp-2">
                  {getProductDesc(product)}
                </p>
                <p className="text-primary font-bold text-sm mb-4">{getProductPrice(product)}</p>
                <a
                  href={buildWaUrl(getProductName(product), lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors text-center inline-flex items-center justify-center gap-1.5 group-hover:shadow-md"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.products.contactBtn}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/produits"
            className="btn-primary inline-flex items-center gap-2 text-base"
          >
            {t.products.allProducts}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
