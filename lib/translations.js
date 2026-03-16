const translations = {
  fr: {
    // Navbar
    nav: {
      home: 'Accueil',
      products: 'Produits',
      contact: 'Contact',
      lang: 'EN',
    },

    // Hero
    hero: {
      headline: 'Votre spécialiste en matériel informatique et fournitures de bureau à Bamako',
      subheadline: 'Ordinateurs, imprimantes, accessoires et fournitures de bureau à prix compétitifs.',
      btnProducts: 'Voir les produits',
      btnContact: 'Nous contacter',
    },

    // About
    about: {
      title: 'À propos de DIAK-SERVICE',
      subtitle: 'Qui sommes-nous ?',
      description:
        'DIAK-SERVICE est un magasin spécialisé dans la vente de matériel informatique et de fournitures de bureau. Nous proposons une large gamme de produits à des prix compétitifs pour les particuliers, entreprises et étudiants.',
      owner: 'Propriétaire',
      location: 'Localisation',
      locationValue: 'Marché Didida, Bamako – Mali',
      stats: [
        { value: '500+', label: 'Produits disponibles' },
        { value: '10+', label: 'Années d\'expérience' },
        { value: '1000+', label: 'Clients satisfaits' },
      ],
    },

    // Categories
    categories: {
      title: 'Nos Catégories',
      subtitle: 'Découvrez notre gamme complète de produits',
      items: [
        { name: 'Ordinateurs', desc: 'Laptops, PC de bureau et workstations' },
        { name: 'Imprimantes', desc: 'Imprimantes jet d\'encre, laser et multifonctions' },
        { name: 'Accessoires Informatiques', desc: 'Claviers, souris, câbles et plus' },
        { name: 'Fournitures de Bureau', desc: 'Tout pour organiser votre bureau' },
        { name: 'Papeterie', desc: 'Cahiers, stylos, papier et fournitures scolaires' },
        { name: 'Organisation de Bureau', desc: 'Classeurs, étagères et mobilier de bureau' },
      ],
    },

    // Products
    products: {
      title: 'Nos Produits',
      subtitle: 'Une sélection de nos articles disponibles en magasin',
      available: 'Disponible en magasin',
      contactBtn: 'Discutons du prix',
      allProducts: 'Voir tous les produits',
      items: [
        {
          name: 'Laptop',
          description: 'Ordinateur portable performant pour le travail et les études',
          price: 'À partir de 350 000 FCFA',
        },
        {
          name: 'Ordinateur de Bureau',
          description: 'PC de bureau complet pour professionnels et entreprises',
          price: 'À partir de 280 000 FCFA',
        },
        {
          name: 'Imprimante',
          description: 'Imprimante jet d\'encre multifonction couleur',
          price: 'À partir de 85 000 FCFA',
        },
        {
          name: 'Clavier',
          description: 'Clavier ergonomique filaire et sans fil',
          price: 'À partir de 8 000 FCFA',
        },
        {
          name: 'Souris',
          description: 'Souris optique précise, filaire ou Bluetooth',
          price: 'À partir de 5 000 FCFA',
        },
        {
          name: 'Clé USB',
          description: 'Clés USB haute vitesse de 8 Go à 256 Go',
          price: 'À partir de 3 500 FCFA',
        },
        {
          name: 'Cahiers & Blocs-notes',
          description: 'Cahiers scolaires et professionnels de qualité',
          price: 'À partir de 500 FCFA',
        },
        {
          name: 'Chaise de Bureau',
          description: 'Chaise ergonomique confortable pour le bureau',
          price: 'À partir de 45 000 FCFA',
        },
      ],
    },

    // WhyChooseUs
    why: {
      title: 'Pourquoi choisir DIAK-SERVICE ?',
      subtitle: 'Nous mettons tout en œuvre pour vous satisfaire',
      items: [
        {
          title: 'Prix Compétitifs',
          desc: 'Nous offrons les meilleurs prix du marché pour tous vos besoins informatiques et de bureau.',
        },
        {
          title: 'Large Choix de Produits',
          desc: 'Plus de 500 références disponibles en magasin : informatique, papeterie, mobilier.',
        },
        {
          title: 'Produits de Qualité',
          desc: 'Tous nos produits sont sélectionnés avec soin pour garantir durabilité et fiabilité.',
        },
        {
          title: 'Service Client Disponible',
          desc: 'Notre équipe est à votre disposition pour vous conseiller et répondre à toutes vos questions.',
        },
        {
          title: 'Livraison Disponible',
          desc: 'Service de livraison disponible pour les commandes importantes à Bamako.',
        },
        {
          title: 'Expertise Locale',
          desc: 'Une équipe expérimentée qui connaît les besoins du marché malien.',
        },
      ],
    },

    // Contact
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Nous sommes à votre disposition',
      phone: 'Téléphone',
      whatsapp: 'WhatsApp',
      whatsappBtn: 'Commander via WhatsApp',
      email: 'Email',
      address: 'Adresse',
      addressValue: 'Marché Didida, Bamako – Mali',
      hours: 'Horaires d\'ouverture',
      hoursValue: 'Lun – Sam : 8h00 – 18h00',
      whatsappMessage:
        'Bonjour DIAK-SERVICE 👋\n\nJe souhaite passer une commande :\n\n📦 Produit : \n📍 Localisation : \n📋 Quantité : \n💬 Précisions : \n\nMerci !',
      form: {
        title: 'Envoyez-nous un message',
        name: 'Votre nom',
        namePlaceholder: 'Jean Dupont',
        email: 'Votre email',
        emailPlaceholder: 'jean@exemple.com',
        message: 'Votre message',
        messagePlaceholder: 'Comment pouvons-nous vous aider ?',
        send: 'Envoyer le message',
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès ! Nous vous répondrons bientôt.',
      },
    },

    // Footer
    footer: {
      description: 'Votre spécialiste en matériel informatique et fournitures de bureau à Bamako, Mali.',
      quickLinks: 'Liens rapides',
      contactInfo: 'Informations de contact',
      copyright: '© 2024 DIAK-SERVICE – Tous droits réservés',
      madeWith: 'Fait avec ❤ à Bamako',
    },

    // Page produits
    productsPage: {
      title: 'Nos Produits',
      subtitle: 'Découvrez toute notre gamme de produits disponibles en magasin',
      filterAll: 'Tous',
      search: 'Rechercher un produit...',
      noResults: 'Aucun produit trouvé.',
      contactForPrice: 'Contactez-nous pour le prix',
    },

    // Page contact
    contactPage: {
      title: 'Contactez-nous',
      subtitle: 'Notre équipe est disponible pour vous aider',
      mapTitle: 'Notre localisation',
      mapDesc: 'Retrouvez-nous au Marché Didida, Bamako – Mali',
    },

    // 404
    notFound: {
      title: 'Page non trouvée',
      desc: 'La page que vous cherchez n\'existe pas.',
      back: 'Retour à l\'accueil',
    },
  },

  en: {
    // Navbar
    nav: {
      home: 'Home',
      products: 'Products',
      contact: 'Contact',
      lang: 'FR',
    },

    // Hero
    hero: {
      headline: 'Your trusted computer and office equipment store in Bamako',
      subheadline: 'Computers, printers, accessories and office supplies at competitive prices.',
      btnProducts: 'View products',
      btnContact: 'Contact us',
    },

    // About
    about: {
      title: 'About DIAK-SERVICE',
      subtitle: 'Who are we?',
      description:
        'DIAK-SERVICE is a store specializing in computer equipment and office supplies. We offer a wide range of products at competitive prices for individuals, businesses and students.',
      owner: 'Owner',
      location: 'Location',
      locationValue: 'Marché Didida, Bamako – Mali',
      stats: [
        { value: '500+', label: 'Products available' },
        { value: '10+', label: 'Years of experience' },
        { value: '1000+', label: 'Satisfied customers' },
      ],
    },

    // Categories
    categories: {
      title: 'Our Categories',
      subtitle: 'Discover our complete range of products',
      items: [
        { name: 'Computers', desc: 'Laptops, desktop PCs and workstations' },
        { name: 'Printers', desc: 'Inkjet, laser and multifunction printers' },
        { name: 'Computer Accessories', desc: 'Keyboards, mice, cables and more' },
        { name: 'Office Supplies', desc: 'Everything to organize your office' },
        { name: 'Stationery', desc: 'Notebooks, pens, paper and school supplies' },
        { name: 'Office Organization', desc: 'Binders, shelves and office furniture' },
      ],
    },

    // Products
    products: {
      title: 'Our Products',
      subtitle: 'A selection of our items available in store',
      available: 'Available in store',
      contactBtn: "Let's talk price",
      allProducts: 'View all products',
      items: [
        {
          name: 'Laptop',
          description: 'High-performance laptop for work and studies',
          price: 'From 350,000 FCFA',
        },
        {
          name: 'Desktop Computer',
          description: 'Complete desktop PC for professionals and businesses',
          price: 'From 280,000 FCFA',
        },
        {
          name: 'Printer',
          description: 'Color multifunction inkjet printer',
          price: 'From 85,000 FCFA',
        },
        {
          name: 'Keyboard',
          description: 'Ergonomic wired and wireless keyboard',
          price: 'From 8,000 FCFA',
        },
        {
          name: 'Mouse',
          description: 'Precise optical mouse, wired or Bluetooth',
          price: 'From 5,000 FCFA',
        },
        {
          name: 'USB Flash Drive',
          description: 'High-speed USB drives from 8GB to 256GB',
          price: 'From 3,500 FCFA',
        },
        {
          name: 'Notebooks',
          description: 'Quality school and professional notebooks',
          price: 'From 500 FCFA',
        },
        {
          name: 'Office Chair',
          description: 'Comfortable ergonomic chair for the office',
          price: 'From 45,000 FCFA',
        },
      ],
    },

    // WhyChooseUs
    why: {
      title: 'Why Choose DIAK-SERVICE?',
      subtitle: 'We do everything to satisfy you',
      items: [
        {
          title: 'Competitive Prices',
          desc: 'We offer the best market prices for all your computer and office needs.',
        },
        {
          title: 'Wide Range of Products',
          desc: 'Over 500 references available in store: IT, stationery, furniture.',
        },
        {
          title: 'Quality Products',
          desc: 'All our products are carefully selected to ensure durability and reliability.',
        },
        {
          title: 'Customer Support',
          desc: 'Our team is available to advise you and answer all your questions.',
        },
        {
          title: 'Delivery Available',
          desc: 'Delivery service available for large orders in Bamako.',
        },
        {
          title: 'Local Expertise',
          desc: 'An experienced team that knows the needs of the Malian market.',
        },
      ],
    },

    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: 'We are at your disposal',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      whatsappBtn: 'Order via WhatsApp',
      email: 'Email',
      address: 'Address',
      addressValue: 'Marché Didida, Bamako – Mali',
      hours: 'Opening Hours',
      hoursValue: 'Mon – Sat: 8:00 AM – 6:00 PM',
      whatsappMessage:
        'Hello DIAK-SERVICE 👋\n\nI would like to place an order:\n\n📦 Product: \n📍 Location: \n📋 Quantity: \n💬 Details: \n\nThank you!',
      form: {
        title: 'Send us a message',
        name: 'Your name',
        namePlaceholder: 'John Doe',
        email: 'Your email',
        emailPlaceholder: 'john@example.com',
        message: 'Your message',
        messagePlaceholder: 'How can we help you?',
        send: 'Send message',
        sending: 'Sending...',
        success: 'Message sent successfully! We will reply soon.',
      },
    },

    // Footer
    footer: {
      description: 'Your specialist in computer equipment and office supplies in Bamako, Mali.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Information',
      copyright: '© 2024 DIAK-SERVICE – All rights reserved',
      madeWith: 'Made with ❤ in Bamako',
    },

    // Page produits
    productsPage: {
      title: 'Our Products',
      subtitle: 'Discover our full range of products available in store',
      filterAll: 'All',
      search: 'Search a product...',
      noResults: 'No products found.',
      contactForPrice: 'Contact us for price',
    },

    // Page contact
    contactPage: {
      title: 'Contact Us',
      subtitle: 'Our team is available to help you',
      mapTitle: 'Our location',
      mapDesc: 'Find us at Marché Didida, Bamako – Mali',
    },

    // 404
    notFound: {
      title: 'Page not found',
      desc: 'The page you are looking for does not exist.',
      back: 'Back to home',
    },
  },
};

export default translations;
