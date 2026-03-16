import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <div className="relative">
            {/* Photo grid */}
            <div className="grid grid-cols-2 gap-3 rounded-3xl overflow-hidden shadow-2xl">
              {['/images/9.jpeg', '/images/10.jpeg', '/images/11.jpeg', '/images/12.jpeg'].map((src, i) => (
                <div key={i} className={`relative overflow-hidden ${i === 0 ? 'col-span-2 h-52' : 'h-36'}`}>
                  <Image
                    src={src}
                    alt={`DIAK-SERVICE produit ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-primary/10"></div>
                </div>
              ))}
            </div>

            {/* Stats overlay card */}
            <div className="absolute inset-x-4 bottom-4 bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-4 text-white shadow-xl backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-2">
                {t.about.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl font-black text-secondary">{stat.value}</div>
                    <div className="text-xs text-white/75 mt-0.5 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating logo card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 border border-gray-100">
              <div className="relative w-16 h-16">
                <Image src="/logo/logo.png" alt="DIAK-SERVICE" fill className="object-contain" />
              </div>
            </div>

            {/* Floating location card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary/10 rounded-xl flex items-center justify-center text-base">
                  📍
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">{t.about.location}</p>
                  <p className="text-sm font-bold text-gray-800">Marché Didida</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3 bg-primary/10 px-3 py-1 rounded-full">
              {t.about.subtitle}
            </span>
            <h2 className="section-title">{t.about.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t.about.description}
            </p>

            {/* Key features */}
            <div className="space-y-4">
              {[
                { icon: '💻', text: t.categories.items[0].name },
                { icon: '🖨️', text: t.categories.items[1].name },
                { icon: '📎', text: t.categories.items[2].name },
                { icon: '📋', text: t.categories.items[3].name },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-medium text-gray-700">{item.text}</span>
                  <div className="ml-auto w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
