import Head from 'next/head';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CategoriesSection from '@/components/CategoriesSection';
import ProductsSection from '@/components/ProductsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { lang } = useLanguage();

  return (
    <>
      <Head>
        <title>
          {lang === 'fr'
            ? 'DIAK-SERVICE | Matériel Informatique & Fournitures de Bureau à Bamako'
            : 'DIAK-SERVICE | Computer Equipment & Office Supplies in Bamako'}
        </title>
        <meta
          name="description"
          content={
            lang === 'fr'
              ? 'DIAK-SERVICE – Votre spécialiste en matériel informatique et fournitures de bureau à Bamako, Mali. Ordinateurs, imprimantes, accessoires à prix compétitifs.'
              : 'DIAK-SERVICE – Your specialist in computer equipment and office supplies in Bamako, Mali. Computers, printers, accessories at competitive prices.'
          }
        />
      </Head>

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <CategoriesSection />
        <ProductsSection />
        <WhyChooseUs />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
