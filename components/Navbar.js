import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/produits', label: t.nav.products },
    { href: '/contact', label: t.nav.contact },
  ];

  const isActive = (href) => router.pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`relative w-12 h-12 transition-all duration-300 ${scrolled ? '' : 'drop-shadow-lg'}`}>
            <Image
              src="/logo/logo.png"
              alt="DIAK-SERVICE Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span className={`font-black text-xl tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
              DIAK
            </span>
            <span className={`font-black text-xl tracking-tight ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
              -SERVICE
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium text-sm transition-all duration-200 border-b-2 pb-0.5 ${
                isActive(link.href)
                  ? `border-primary ${scrolled ? 'text-primary' : 'text-white'}`
                  : `border-transparent ${
                      scrolled ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white'
                    }`
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language switcher */}
          <button
            onClick={toggleLang}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-semibold text-sm transition-all duration-200 ${
              scrolled
                ? 'border-primary text-primary hover:bg-primary hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-primary'
            }`}
          >
            <span className="text-xs">{lang === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
            {t.nav.lang}
          </button>
        </div>

        {/* Mobile: lang + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className={`flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-semibold transition-all ${
              scrolled
                ? 'border-primary text-primary'
                : 'border-white text-white'
            }`}
          >
            <span>{lang === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
            {t.nav.lang}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 animate-fade-in">
          <div className="container-custom py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-colors ${
                  isActive(link.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
