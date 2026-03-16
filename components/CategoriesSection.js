import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { CATEGORIES } from '@/lib/products';

const categoryMeta = [
  {
    key: 'computers',
    image: '/images/cat-computers.jpg',
    fallbackImage: '/images/ordinateur 1.jpeg',
    color: 'from-blue-600/80 to-blue-900/90',
    hoverRing: 'ring-blue-400',
    badge: 'bg-blue-500',
    count: 9,
  },
  {
    key: 'printers',
    image: '/images/cat-printers.jpg',
    fallbackImage: '/images/imprimente 1.jpeg',
    color: 'from-purple-600/80 to-purple-900/90',
    hoverRing: 'ring-purple-400',
    badge: 'bg-purple-500',
    count: 6,
  },
  {
    key: 'accessories',
    image: '/images/cat-accessories.jpg',
    fallbackImage: '/images/souris bluetooth rechargable.jpeg',
    color: 'from-emerald-600/80 to-emerald-900/90',
    hoverRing: 'ring-emerald-400',
    badge: 'bg-emerald-500',
    count: 6,
  },
  {
    key: 'stationery',
    image: '/images/cat-stationery.jpg',
    fallbackImage: '/images/classeur chrono.jpeg',
    color: 'from-orange-600/80 to-orange-900/90',
    hoverRing: 'ring-orange-400',
    badge: 'bg-orange-500',
    count: 4,
  },
  {
    key: 'furniture',
    image: '/images/cat-furniture.jpg',
    fallbackImage: '/images/chaise 2.jpeg',
    color: 'from-teal-600/80 to-teal-900/90',
    hoverRing: 'ring-teal-400',
    badge: 'bg-teal-500',
    count: 17,
  },
];

export default function CategoriesSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-20 section-gradient" id="categories">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3 bg-primary/10 px-3 py-1 rounded-full">
            {t.categories.subtitle}
          </span>
          <h2 className="section-title">{t.categories.title}</h2>
        </div>

        {/* Grid — 2 colonnes mobile, 3 sur md, disposition spéciale sur lg */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {categoryMeta.map((meta) => {
            const catData = CATEGORIES[meta.key];
            const label = lang === 'fr' ? catData.labelFr : catData.labelEn;
            const catItems = t.categories.items.find(
              (item) =>
                item.name.toLowerCase().includes(catData.labelFr.split(' ')[0].toLowerCase()) ||
                catData.labelFr.toLowerCase().includes(item.name.split(' ')[0].toLowerCase())
            );
            const desc = catItems ? catItems.desc : '';

            return (
              <Link
                key={meta.key}
                href={`/produits?cat=${meta.key}`}
                className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl ring-0 hover:ring-4 ${meta.hoverRing} transition-all duration-300 cursor-pointer block`}
              >
                {/* Background image */}
                <div className="relative h-52 md:h-56">
                  <Image
                    src={meta.image}
                    alt={label}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${meta.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`} />

                  {/* Product count badge */}
                  <div className={`absolute top-3 right-3 ${meta.badge} text-white text-xs font-bold px-2.5 py-1 rounded-full shadow`}>
                    {meta.count}+
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <h3 className="font-black text-white text-base leading-tight mb-1 drop-shadow-md">
                      {label}
                    </h3>
                    <p className="text-white/80 text-xs leading-snug line-clamp-2 hidden md:block">
                      {desc}
                    </p>
                    {/* Arrow */}
                    <div className="mt-3 flex items-center gap-1 text-white/70 group-hover:text-white text-xs font-medium transition-colors">
                      <span>{lang === 'fr' ? 'Voir tout' : 'View all'}</span>
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom banner — produits vedettes avec vraies photos */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              src: '/images/ordinateur 2.jpeg',
              icon: '💻',
              label: lang === 'fr' ? 'PC de Bureau' : 'Desktop PC',
              sub: lang === 'fr' ? 'À partir de 280 000 F' : 'From 280,000 F',
              cat: 'computers',
              accent: 'bg-blue-500',
            },
            {
              src: '/images/imprimente 3.jpeg',
              icon: '🖨️',
              label: lang === 'fr' ? 'Imprimante Multifonction' : 'Multifunction Printer',
              sub: lang === 'fr' ? 'À partir de 150 000 F' : 'From 150,000 F',
              cat: 'printers',
              accent: 'bg-purple-500',
            },
            {
              src: '/images/souris bluetooth rechargable.jpeg',
              icon: '🖱️',
              label: lang === 'fr' ? 'Souris Bluetooth' : 'Bluetooth Mouse',
              sub: lang === 'fr' ? 'À partir de 12 000 F' : 'From 12,000 F',
              cat: 'accessories',
              accent: 'bg-emerald-500',
            },
            {
              src: '/images/chaise 2.jpeg',
              icon: '🪑',
              label: lang === 'fr' ? 'Fauteuil de Direction' : 'Executive Chair',
              sub: lang === 'fr' ? 'À partir de 80 000 F' : 'From 80,000 F',
              cat: 'furniture',
              accent: 'bg-teal-500',
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={`/produits?cat=${item.cat}`}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* Icon badge */}
                <div className={`absolute top-2 left-2 ${item.accent} text-white text-sm w-8 h-8 rounded-lg flex items-center justify-center shadow`}>
                  {item.icon}
                </div>
              </div>
              {/* Info */}
              <div className="p-3">
                <p className="font-bold text-gray-800 text-sm leading-tight group-hover:text-primary transition-colors">
                  {item.label}
                </p>
                <p className="text-xs text-secondary font-semibold mt-0.5">{item.sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
