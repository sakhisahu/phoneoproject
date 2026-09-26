export const pricingPlans = [
  {
    id: 'silver',
    name: 'Silver',
    price: 99,
    billingCycle: 'month',
    quarterly: 282,
    yearly: 1010,
    bestFor: 'New & small shops',
    description: 'Perfect for small shops that need basic inventory management',
    features: [
      { name: 'IMEI-wise inventory management', included: true },
      { name: 'Unlimited users', included: true },
      { name: 'Unlimited devices', included: true },
      { name: 'Cloud backup', included: true },
      { name: 'Stock audit', included: true },
      { name: 'Premium labels', included: true },
      { name: 'Bulk upload', included: true },
      { name: 'Digital invoicing', included: false },
      { name: 'GST billing', included: false },
      { name: 'Accounting features', included: false },
      { name: 'WhatsApp bot', included: false },
      { name: 'Online storefront', included: false }
    ],
    cta: 'Start Free Trial',
    highlighted: false
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 299,
    billingCycle: 'month',
    quarterly: 852,
    yearly: 3050,
    bestFor: 'Growing shops',
    description: 'For shops that want to add billing and analytics',
    features: [
      { name: 'Everything in Silver', included: true },
      { name: 'Digital invoicing', included: true },
      { name: 'GST & Non-GST billing', included: true },
      { name: 'Advance analytics', included: true },
      { name: 'Dead stock alerts', included: true },
      { name: 'Personal website', included: true },
      { name: 'Staff mode login', included: true },
      { name: 'Accounting features', included: false },
      { name: 'WhatsApp bot', included: false },
      { name: 'Online storefront', included: false }
    ],
    cta: 'Start Free Trial',
    highlighted: false
  },
  {
    id: 'diamond',
    name: 'Diamond',
    price: 399,
    billingCycle: 'month',
    quarterly: 1137,
    yearly: 4070,
    bestFor: 'Accounting & ledger',
    description: 'Complete solution with accounting and ledger',
    features: [
      { name: 'Everything in Gold', included: true },
      { name: 'Accounting features', included: true },
      { name: 'Automated ledger', included: true },
      { name: 'Category creation', included: true },
      { name: 'Phoneo.in listing', included: true },
      { name: 'WhatsApp Smart Bot (limited time)', included: true },
      { name: 'Email reports', included: true },
      { name: 'Repair management', included: false },
      { name: 'Multi-branch support', included: false }
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 999,
    billingCycle: 'month',
    quarterly: 2847,
    yearly: 10190,
    bestFor: 'Multi-branch & custom',
    description: 'Advanced features including permanent WhatsApp bot',
    features: [
      { name: 'Everything in Diamond', included: true },
      { name: 'WhatsApp Smart Bot (permanent)', included: true },
      { name: 'Repair management (coming soon)', included: true },
      { name: 'Multi-branch support (coming soon)', included: true },
      { name: 'Custom integrations', included: false }
    ],
    cta: 'Start Free Trial',
    highlighted: false
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: null,
    billingCycle: 'custom',
    quarterly: null,
    yearly: null,
    bestFor: 'Custom requirements',
    description: 'Everything plus custom integrations and support',
    features: [
      { name: 'Everything in Premium', included: true },
      { name: 'Custom app integrations', included: true },
      { name: 'eCommerce integration', included: true },
      { name: 'WhatsApp integration', included: true },
      { name: 'Google Sheets integration', included: true },
      { name: 'Custom domain website', included: true },
      { name: 'Dedicated support', included: true }
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

export const getPricingPlans = () => pricingPlans;

export const getPlanById = (id) => {
  return pricingPlans.find(p => p.id === id);
};