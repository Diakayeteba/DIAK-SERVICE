import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── Colonne gauche : photo du propriétaire ── */}
          <div className="relative flex justify-center">

            {/* Cercle décoratif en arrière-plan */}
            <div className="absolute w-80 h-80 bg-gradient-to-br from-primary/10 to-blue-100 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0"></div>

            {/* Carte photo principale */}
            <div className="relative z-10">
              {/* Cadre photo avec ombre et bordure */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/owner.png"
                  alt="Abdoul-Kadry DIAKITE – Propriétaire DIAK-SERVICE"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 288px, 320px"
                  priority
                />
                {/* Dégradé bas pour le nom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5">
                  <p className="text-white font-black text-base leading-tight">Abdoul-Kadry DIAKITE</p>
                  <p className="text-white/75 text-xs mt-0.5">{t.about.owner} · DIAK-SERVICE</p>
                </div>
              </div>

              {/* Badge logo flottant — haut droite */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-2.5 border border-gray-100 z-20">
                <div className="relative w-14 h-14">
                  <Image src="/logo/logo.png" alt="DIAK-SERVICE" fill className="object-contain" />
                </div>
              </div>

              {/* Badge localisation — bas gauche */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-gray-100 z-20">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">{t.about.location}</p>
                    <p className="text-sm font-bold text-gray-800">Marché Didida</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Colonne droite : texte de présentation ── */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3 bg-primary/10 px-3 py-1 rounded-full">
              {t.about.subtitle}
            </span>
            <h2 className="section-title">{t.about.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t.about.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {t.about.stats.map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-4 text-center border border-primary/10">
                  <div className="text-2xl font-black text-primary">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Key features */}
            <div className="space-y-3">
              {[
                { icon: '💻', text: t.categories.items[0].name },
                { icon: '🖨️', text: t.categories.items[1].name },
                { icon: '📎', text: t.categories.items[2].name },
                { icon: '📋', text: t.categories.items[3].name },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-medium text-gray-700 flex-1">{item.text}</span>
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
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
