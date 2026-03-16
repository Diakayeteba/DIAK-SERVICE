import Head from 'next/head';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t, lang } = useLanguage();

  return (
    <>
      <Head>
        <title>
          {lang === 'fr'
            ? 'Contactez-nous | DIAK-SERVICE Bamako'
            : 'Contact Us | DIAK-SERVICE Bamako'}
        </title>
        <meta
          name="description"
          content={
            lang === 'fr'
              ? 'Contactez DIAK-SERVICE à Bamako. Téléphone, WhatsApp, email et adresse : Marché Didida, Bamako – Mali.'
              : 'Contact DIAK-SERVICE in Bamako. Phone, WhatsApp, email and address: Marché Didida, Bamako – Mali.'
          }
        />
      </Head>

      <Navbar />

      {/* Page header */}
      <section className="hero-gradient pt-32 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{t.contactPage.title}</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">{t.contactPage.subtitle}</p>
        </div>
      </section>

      <main>
        <ContactSection />

        {/* Map section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-gray-800 mb-2">{t.contactPage.mapTitle}</h2>
              <p className="text-gray-500">{t.contactPage.mapDesc}</p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl h-96 border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62680.05!2d-7.9916!3d12.6392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51d1f60000001%3A0x76c7e4b7a34e3857!2sBamako%2C%20Mali!5e0!3m2!1sfr!2sfr!4v1610000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DIAK-SERVICE Bamako"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
