export const products = [
  {
    id: 1,
    name: 'Phoneo',
    slug: 'phoneo',
    logo: '/assets/logos/phoneo-logo.png',
    website: 'seller.phoneo.in',
    description: 'Mobile shop management software built specifically for Indian retailers',
    tagline: 'Mobile retailers deserve better',
    features: [
      'IMEI-wise inventory tracking',
      'GST & Non-GST billing',
      'Customer credit/udhari management',
      'Staff commission tracking',
      'WhatsApp AI Bot',
      'Online storefront',
      'Repair job cards',
      'Multi-branch support'
    ]
  },
  {
    id: 2,
    name: 'Vyapar',
    slug: 'vyapar',
    logo: '/assets/logos/vyapar-logo.png',
    website: 'vyapar.in',
    description: 'General-purpose billing and inventory software for small businesses',
    tagline: 'GST billing made easy',
    features: [
      'GST invoicing',
      'Inventory management',
      'Customer tracking',
      'Basic analytics',
      'Mobile app',
      'API integrations'
    ]
  },
  {
    id: 3,
    name: 'TallyPrime',
    slug: 'tally',
    logo: '/assets/logos/tally-logo.png',
    website: 'tally.com',
    description: 'Enterprise accounting and ERP solution',
    tagline: 'Accounting made simple',
    features: [
      'Advanced accounting',
      'Income tax compliance',
      'Multi-entity support',
      'Customization',
      'Enterprise-grade security'
    ]
  },
  {
    id: 4,
    name: 'BUSY',
    slug: 'busy',
    logo: '/assets/logos/busy-logo.png',
    website: 'busy.in',
    description: 'Retail and accounting ERP for businesses',
    tagline: 'Business management simplified',
    features: [
      'Retail billing',
      'Accounting',
      'Multi-location support',
      'Inventory management',
      'Advanced reporting'
    ]
  }
];

export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

export const getProductById = (id) => {
  return products.find(p => p.id === id);
};