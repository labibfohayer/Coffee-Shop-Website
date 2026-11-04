import { SIGNATURE_COFFEES, POPULAR_COLLECTIONS } from './coffeeData';

export const DEFAULT_SITE_CONTENT = {
  // Global Brand
  brand: {
    name: 'Coffee Peyala',
    nameBn: 'কফি পেয়ালা',
    established: 'EST. SPECIALTY • 2026',
    logoUrl: '/assets/logo.png',
    faviconUrl: '/favicon.png'
  },

  // Hero Section
  hero: {
    tagline: 'Mirpur, Dhaka • Artisanal Roastery',
    headlinePart1: 'A slow',
    headlinePart2: 'ritual,',
    headlineItalic: 'poured with intent.',
    miniPreviewImage: '/assets/mini_espresso_preview.png',
    description: 'Coffee Peyala is a premium specialty coffee house in Mirpur, Dhaka — handcrafting single-origin espresso, delicate pour-overs, and signature brews.',
    exploreBtnText: 'EXPLORE MORE',
    deliveryBtnText: 'GET DELIVERY',
    heroCupImage: '/assets/coffee_peyala_cup.png',
    originFootnote: 'Origin: Ethiopia • Colombia • Kenya',
    tickerBadges: [
      'Best Coffee Shop 2025',
      'Q-Grader Baristas',
      'Direct Trade Origins',
      'Featured in Monocle'
    ]
  },

  // About Section
  about: {
    sectionTag: 'About us',
    headline: 'A café built by coffee people.',
    description: 'We opened Coffee Peyala in 2018 with a small La Marzocco, a stubborn belief in single-origin espresso, and a cozy corner shop with good sunlight in Mirpur, Dhaka. Seven years later, bringing uncompromising specialty coffee to everyone.',
    storyLinkText: 'Read our story',
    latteImage: '/assets/about_latte.png',
    machineImage: '/assets/about_machine.png',
    features: [
      {
        title: 'PREMIUM BEANS',
        desc: 'We source the finest single-origin beans directly from ethical micro-lots around the world.'
      },
      {
        title: 'EXPERTLY CRAFTED',
        desc: 'Our certified Q-baristas calibrate grinder microns and extraction seconds for every cup.'
      },
      {
        title: 'SUSTAINABLE',
        desc: 'We are committed to 100% compostable cups, fair-trade premiums, and zero bean wastage.'
      }
    ],
    stats: [
      { number: '2018', label: 'Brewing Happiness' },
      { number: '25+', label: 'Passionate baristas' },
      { number: '100%', label: 'Arabica beans' },
      { number: '15K+', label: 'Happy customers' }
    ]
  },

  // Atmosphere / Interior Banner
  atmosphere: {
    headline: 'Elevated Coffee',
    subheadline: 'Where Every sip Feels Like Home',
    buttonText: 'Reserve Your Table',
    backgroundImage: '/assets/cafe_interior.png',
    pills: [
      '8:00 AM – 11:30 PM',
      'Private Pods & Co-Working',
      'Instant Confirmation'
    ]
  },

  // Signature Coffees (List)
  signatureCoffees: SIGNATURE_COFFEES,

  // Popular Collections
  popularCollections: POPULAR_COLLECTIONS,

  // Newsletter Section
  newsletter: {
    headline: 'Stay up to date',
    description: 'Signup our newsletter to get update information, news, insight or promotions from our Mirpur roastery.',
    cupImage: '/assets/newsletter_cup.png',
    buttonText: 'Subscribe'
  },

  // Footer & Contact Information
  contact: {
    tagline: 'Mirpur’s premier artisanal coffee house. Dedicated to the craft of slow-poured single origins and cozy community conversations in Dhaka.',
    address: 'Plot 24, Road 3, Block-A, Section-10, Mirpur, Dhaka 1216',
    phone: '+880 1712-345678 / +880 1823-998877',
    email: 'mirpur@coffeepeyala.com',
    hours: 'Saturday – Friday: 8:00 AM – 11:30 PM',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    copyright: '© 2026 Coffee Peyala (কফি পেয়ালা). All rights reserved.',
    footerNote: 'Handcrafted with passion in Mirpur, Dhaka ☕'
  }
};

const STORAGE_KEY = 'COFFEE_PEYALA_CMS_CONTENT_V2';

export function loadSiteContent() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...DEFAULT_SITE_CONTENT, ...parsed };
    }
  } catch (err) {
    console.error('Failed to parse saved site content:', err);
  }
  return DEFAULT_SITE_CONTENT;
}

export function saveSiteContent(content) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    return true;
  } catch (err) {
    console.error('Failed to save site content to localStorage:', err);
    return false;
  }
}

export function resetSiteContent() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return DEFAULT_SITE_CONTENT;
  } catch (err) {
    console.error('Failed to reset content:', err);
    return DEFAULT_SITE_CONTENT;
  }
}
