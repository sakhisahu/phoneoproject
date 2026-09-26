// Branded inline SVG cover so every article always shows an image (no missing files).
const cover = (label, c1, c2) =>
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'>` +
      `<defs><linearGradient id='g' x1='0' y1='0' x2='800' y2='450' gradientUnits='userSpaceOnUse'>` +
      `<stop stop-color='${c1}'/><stop offset='1' stop-color='${c2}'/></linearGradient></defs>` +
      `<rect width='800' height='450' fill='url(#g)'/>` +
      `<g fill='#ffffff'><rect x='40' y='40' width='30' height='30' rx='8' opacity='0.9'/>` +
      `<rect x='47' y='45' width='16' height='20' rx='2' fill='${c1}'/></g>` +
      `<text x='84' y='63' font-family='Segoe UI,Arial,sans-serif' font-size='24' font-weight='700' fill='#ffffff'>PhoneHub</text>` +
      `<text x='40' y='250' font-family='Segoe UI,Arial,sans-serif' font-size='56' font-weight='800' fill='#ffffff'>${label}</text>` +
      `<rect x='40' y='285' width='120' height='6' rx='3' fill='#ffffff' opacity='0.85'/>` +
    `</svg>`
  );

export const blogArticles = [
  {
    id: 1,
    title: 'PhoneHub Pricing 2026: Plans, Features, Pricing Comparison & Which Plan Is Best for Your Mobile Shop?',
    slug: 'phonehub-pricing-2026-plans-features-comparison',
    author: 'PhoneHub Team',
    publishedAt: '2026-08-08',
    readTime: 11,
    category: 'pricing',
    featured: true,
    excerpt: 'Complete guide to PhoneHub pricing plans, features at each tier, and how to choose the right plan for your mobile shop.',
    image: cover('Pricing 2026', '#10b981', '#0ea5e9'),
    content: `
      <h2>PhoneHub Pricing at a Glance</h2>
      <p>PhoneHub offers five plans — Silver, Gold, Diamond, Premium and Enterprise. All paid plans start with a 7-day free trial and no credit card is needed to begin. You can upgrade, downgrade, or cancel any time from your dashboard.</p>

      <table>
        <tr>
          <th>Plan</th>
          <th>Monthly</th>
          <th>Quarterly</th>
          <th>Yearly</th>
          <th>Best For</th>
        </tr>
        <tr>
          <td>Silver</td>
          <td>₹99</td>
          <td>₹282</td>
          <td>₹1,010</td>
          <td>New & small shops</td>
        </tr>
        <tr>
          <td>Gold</td>
          <td>₹299</td>
          <td>₹852</td>
          <td>₹3,050</td>
          <td>Growing shops</td>
        </tr>
        <tr>
          <td>Diamond</td>
          <td>₹399</td>
          <td>₹1,137</td>
          <td>₹4,070</td>
          <td>Accounting & ledger</td>
        </tr>
        <tr>
          <td>Premium</td>
          <td>₹999</td>
          <td>₹2,847</td>
          <td>₹10,190</td>
          <td>Multi-branch & custom</td>
        </tr>
        <tr>
          <td>Enterprise</td>
          <td>Custom</td>
          <td>Custom</td>
          <td>Custom</td>
          <td>Custom requirements</td>
        </tr>
      </table>

      <h3>PhoneHub Silver Plan — ₹99/month</h3>
      <p>Silver is PhoneHub's entry-level paid plan and a great starting point for a single-counter shop:</p>
      <ul>
        <li>Unlimited Users</li>
        <li>Unlimited Device</li>
        <li>Cloud Backup</li>
        <li>Stock Audit</li>
        <li>Premium Labels</li>
        <li>Bulk Upload</li>
        <li>Market Explorer</li>
        <li>Social Sharing Post — 5/month</li>
      </ul>

      <h3>PhoneHub Gold Plan — ₹299/month</h3>
      <p>Gold adds analytics and an online presence on top of everything Silver offers:</p>
      <ul>
        <li>Everything in Silver</li>
        <li>Digital Invoice</li>
        <li>Advance Analytics</li>
        <li>Dead Stock Alert</li>
        <li>Personal Website</li>
        <li>Staff Mode Login</li>
        <li>Social Sharing Post — 10/month</li>
      </ul>

      <h3>PhoneHub Diamond Plan — ₹399/month</h3>
      <p>Diamond is built for shops that want to run their books — not just their billing — inside PhoneHub:</p>
      <ul>
        <li>Everything in Gold</li>
        <li>Accounting Features</li>
        <li>Automated Ledger</li>
        <li>Category Creation</li>
        <li>PhoneHub.in Listing</li>
        <li>WhatsApp Smart Bot — Limited Time Offer</li>
        <li>Email Report</li>
        <li>Social Sharing Post — 15/month</li>
      </ul>

      <h3>PhoneHub Premium Plan — ₹999/month</h3>
      <p>Premium is PhoneHub's highest self-serve tier with permanent WhatsApp bot and upcoming features:</p>
      <ul>
        <li>Everything in Diamond</li>
        <li>WhatsApp Smart Bot — Permanent</li>
        <li>Repair Management (Upcoming)</li>
        <li>Multi-branch Support (Upcoming)</li>
      </ul>

      <h3>PhoneHub Enterprise Plan — Custom Pricing</h3>
      <p>Enterprise is for multi-branch operations and custom integrations:</p>
      <ul>
        <li>Everything in Premium</li>
        <li>App integrations (eCommerce, WhatsApp, Google Sheets)</li>
        <li>Custom-domain branded website</li>
        <li>Fully custom requirements</li>
      </ul>

      <h2>Monthly vs Quarterly vs Yearly Pricing</h2>
      <p>Quarterly billing saves 5% instantly, and yearly billing saves 15% instantly, compared to the monthly rate. For a shop that already knows PhoneHub is a keeper, yearly billing is the cheapest route and removes monthly renewal friction.</p>

      <h2>Is PhoneHub Worth the Price?</h2>
      <p>At ₹99–₹999 a month, PhoneHub costs less than a single lost or misplaced phone, a billing mistake, or a day's wages for extra bookkeeping help. Most shops recover the subscription cost in the first week just from cleaner stock tracking.</p>

      <h2>Which PhoneHub Plan Should You Choose?</h2>
      <p>Choose Silver if you're just starting out, Gold once you want analytics and an online storefront, Diamond when you need proper accounting and ledgers, and Premium or Enterprise when you scale to multiple branches.</p>
    `,
    metaDescription: 'Complete PhoneHub pricing guide for 2026. Compare Silver, Gold, Diamond, Premium and Enterprise plans with features and pricing.',
    metaKeywords: ['PhoneHub pricing', 'billing software', 'GST billing', 'mobile shop software']
  },
  {
    id: 2,
    title: 'PhoneHub vs Vyapar: Best Billing Software for Mobile Shops (2026)',
    slug: 'phonehub-vs-vyapar-pricing',
    author: 'PhoneHub Team',
    publishedAt: '2026-08-15',
    readTime: 10,
    category: 'comparison',
    featured: true,
    excerpt: 'Detailed comparison between PhoneHub and Vyapar. See which billing software is better for your mobile shop.',
    image: cover('vs Vyapar', '#6366f1', '#0ea5e9'),
    content: `
      <h2>PhoneHub vs Vyapar: Which is Better?</h2>
      <p>Vyapar is a general small-business billing software. PhoneHub is specifically built for mobile shops. Here's a detailed comparison.</p>

      <h3>Pricing Comparison</h3>
      <p>PhoneHub: ₹99-₹999/month | Vyapar: ₹500-₹2000+/month</p>
      <p>PhoneHub is significantly cheaper and more flexible with monthly, quarterly, and yearly billing options.</p>

      <h3>Mobile Shop Features</h3>
      <p><strong>PhoneHub has IMEI tracking</strong> - Every phone is tracked individually by its IMEI number. Vyapar doesn't have this.</p>
      <p><strong>PhoneHub supports second-hand phones</strong> - Full support for buying and selling used phones. Vyapar is limited.</p>
      <p><strong>PhoneHub has repair job cards</strong> - Coming soon. Vyapar doesn't support this.</p>

      <h3>Key Differences</h3>
      <ul>
        <li>IMEI Tracking: PhoneHub ✅ | Vyapar ❌</li>
        <li>Second-hand Phone Support: PhoneHub ✅ | Vyapar ❌</li>
        <li>WhatsApp Bot: PhoneHub ✅ | Vyapar ❌</li>
        <li>Online Store: PhoneHub ✅ | Vyapar ❌</li>
        <li>Price: PhoneHub ₹99 | Vyapar ₹500+</li>
      </ul>

      <h2>Verdict</h2>
      <p><strong>PhoneHub is the clear winner for mobile shops.</strong> It's specifically built for your needs, more affordable, and includes features Vyapar doesn't have.</p>
    `,
    metaDescription: 'PhoneHub vs Vyapar comparison. PhoneHub has IMEI tracking, cheaper pricing, WhatsApp bot. Better for mobile shops than Vyapar.',
    metaKeywords: ['PhoneHub vs Vyapar', 'billing software comparison', 'mobile shop software']
  },
  {
    id: 3,
    title: 'Tally vs Mobile Shop Software: Which Is Better?',
    slug: 'tally-vs-mobile-shop-software',
    author: 'PhoneHub Team',
    publishedAt: '2026-07-20',
    readTime: 8,
    category: 'comparison',
    featured: false,
    excerpt: 'Compare Tally Prime with mobile shop software like PhoneHub. See which is better for mobile retailers.',
    image: cover('vs Tally', '#f59e0b', '#ef4444'),
    content: `
      <h2>Tally vs Mobile Shop Software</h2>
      <p>Tally is a powerful general accounting tool, but not specifically designed for managing phone inventory and warranty/IMEI requirements unique to mobile retail.</p>

      <h3>Pricing</h3>
      <p>Tally: ₹4000-₹15000+/year | PhoneHub: ₹99-₹999/month</p>

      <h3>Mobile Shop Features</h3>
      <p>PhoneHub has features Tally doesn't:</p>
      <ul>
        <li>IMEI Tracking</li>
        <li>Second-hand Phone Support</li>
        <li>Warranty Management</li>
        <li>Repair Job Cards</li>
      </ul>

      <h3>When to Use Each</h3>
      <p><strong>Use PhoneHub if:</strong> You run a mobile shop and need IMEI tracking, billing, and inventory management.</p>
      <p><strong>Use Tally if:</strong> You run a large enterprise with complex accounting needs.</p>

      <h2>Verdict</h2>
      <p>PhoneHub for mobile shops, Tally for enterprises.</p>
    `,
    metaDescription: 'Tally vs PhoneHub: Tally for enterprises, PhoneHub for mobile shops. Compare features and pricing.',
    metaKeywords: ['Tally vs PhoneHub', 'accounting software', 'mobile shop software']
  },
  {
    id: 4,
    title: 'PhoneHub vs BUSY: Best Software for Mobile Shops (2026)',
    slug: 'phonehub-vs-busy-comparison',
    author: 'PhoneHub Team',
    publishedAt: '2026-06-10',
    readTime: 9,
    category: 'comparison',
    featured: true,
    excerpt: 'BUSY vs PhoneHub: Which software is best for mobile retailers? Compare features, pricing, and ease of use.',
    image: cover('vs BUSY', '#8b5cf6', '#ec4899'),
    content: `
      <h2>PhoneHub vs BUSY</h2>
      <p>BUSY is a general retail ERP. PhoneHub is specifically built for mobile shops. Here's how they compare.</p>

      <h3>Pricing & Affordability</h3>
      <p>PhoneHub: ₹99-₹999/month | BUSY: ₹500-₹5000+/month</p>
      <p>PhoneHub is 5-50x cheaper than BUSY, making it perfect for small mobile shops.</p>

      <h3>Mobile Shop Features</h3>
      <ul>
        <li><strong>IMEI Tracking:</strong> PhoneHub ✅ | BUSY ❌</li>
        <li><strong>Second-hand Phone Support:</strong> PhoneHub ✅ | BUSY ❌</li>
        <li><strong>Repair Management:</strong> PhoneHub ✅ (Coming) | BUSY ❌</li>
        <li><strong>WhatsApp Bot:</strong> PhoneHub ✅ | BUSY ❌</li>
        <li><strong>Online Store:</strong> PhoneHub ✅ | BUSY ❌</li>
      </ul>

      <h3>Ease of Use</h3>
      <p>PhoneHub: Setup in 15-30 minutes</p>
      <p>BUSY: Needs 2-3 days setup and training</p>

      <h2>Verdict</h2>
      <p><strong>PhoneHub wins for mobile shops.</strong> BUSY is overkill and lacks mobile-specific features.</p>
    `,
    metaDescription: 'PhoneHub vs BUSY: PhoneHub is cheaper (₹99-₹999 vs ₹500+), has IMEI tracking, WhatsApp bot. Better for mobile shops.',
    metaKeywords: ['PhoneHub vs BUSY', 'mobile shop software', 'billing software comparison']
  },
  {
    id: 5,
    title: 'Mobile Shop Staff Management Software: Manage Staff Salary Without Disputes',
    slug: 'mobile-shop-staff-management-salary',
    author: 'PhoneHub Team',
    publishedAt: '2026-05-15',
    readTime: 7,
    category: 'management',
    featured: false,
    excerpt: 'How to manage staff salary and commission in a mobile shop without disputes using PhoneHub.',
    image: cover('Staff Management', '#0ea5e9', '#14b8a6'),
    content: `
      <h2>Staff Salary Management Made Easy</h2>
      <p>One of the biggest pain points for mobile shop owners is calculating staff salary with commissions accurately.</p>

      <h3>How PhoneHub Helps</h3>
      <ul>
        <li>Track each staff member's sales automatically</li>
        <li>Calculate commission based on percentage</li>
        <li>Deduct other expenses automatically</li>
        <li>Generate salary slips</li>
        <li>No more disputes</li>
      </ul>

      <h3>Features</h3>
      <ul>
        <li>Unlimited staff logins with section-wise access</li>
        <li>Sales tracking by staff member</li>
        <li>Commission calculation</li>
        <li>Salary slip generation</li>
        <li>Payment tracking</li>
      </ul>

      <h2>Try PhoneHub Today</h2>
      <p>Start your 7-day free trial now. No credit card required.</p>
    `,
    metaDescription: 'Staff salary management without disputes using PhoneHub. Automatic commission calculation, salary slips, payment tracking.',
    metaKeywords: ['staff management', 'salary calculation', 'commission', 'mobile shop']
  },
  {
    id: 6,
    title: 'GST Billing for Mobile Shops: How to Bill GST Correctly',
    slug: 'gst-billing-mobile-shops',
    author: 'PhoneHub Team',
    publishedAt: '2026-04-20',
    readTime: 6,
    category: 'billing',
    featured: false,
    excerpt: 'Complete guide to GST billing for mobile phone shops. Learn correct HSN codes, tax rates, and how to file GST returns.',
    image: cover('GST Billing', '#22c55e', '#0891b2'),
    content: `
      <h2>GST Billing for Mobile Shops</h2>
      <p>GST billing can be confusing for mobile shop owners. Here's a complete guide.</p>

      <h3>HSN Codes for Mobile Shops</h3>
      <ul>
        <li>Mobile phones: HSN 8517.62</li>
        <li>Chargers: HSN 8504.40</li>
        <li>Screen protectors: HSN 7007.90</li>
        <li>Phone covers: HSN 4202.21</li>
      </ul>

      <h3>GST Rates</h3>
      <ul>
        <li>Phones: 12% or 18%</li>
        <li>Accessories: 5%, 12%, or 18%</li>
      </ul>

      <h3>How PhoneHub Helps</h3>
      <ul>
        <li>Auto-fill HSN codes</li>
        <li>Auto-calculate GST</li>
        <li>Generate GST-compliant bills</li>
        <li>File GST returns easily</li>
      </ul>

      <h2>Start with PhoneHub</h2>
      <p>Try PhoneHub's GST billing features for free.</p>
    `,
    metaDescription: 'GST billing guide for mobile shops. HSN codes, tax rates, billing process, and how PhoneHub automates GST billing.',
    metaKeywords: ['GST billing', 'HSN codes', 'mobile shop', 'tax compliance']
  },
  {
    id: 7,
    title: 'IMEI Tracking for Mobile Shops: Never Lose a Phone in Your Inventory Again',
    slug: 'imei-tracking-mobile-shops',
    author: 'PhoneHub Team',
    publishedAt: '2026-09-05',
    readTime: 8,
    category: 'management',
    featured: true,
    excerpt: 'Learn how IMEI-level tracking in PhoneHub gives you complete control over every handset from purchase to sale.',
    image: cover('IMEI Tracking', '#10b981', '#6366f1'),
    content: `
      <h2>Why IMEI Tracking Matters</h2>
      <p>Every phone has a unique 15-digit IMEI number. Tracking stock at the IMEI level — instead of just "5 units of Model X" — means you always know exactly which handset is in stock, which was sold, to whom, at what price, and under what warranty.</p>

      <h3>What IMEI Tracking Solves</h3>
      <ul>
        <li>Instantly find any phone in your inventory by scanning its IMEI</li>
        <li>Prevent staff theft — every unit is accounted for individually</li>
        <li>Match warranty claims to the exact device you sold</li>
        <li>Know the true purchase cost and margin of each handset</li>
        <li>Handle returns and exchanges without confusion</li>
      </ul>

      <h3>How PhoneHub Does It</h3>
      <p>When you add stock, PhoneHub captures the IMEI (scan or type). At billing, you pick the exact IMEI being sold, so the unit automatically leaves your inventory and is tied to that customer and invoice.</p>

      <h3>Bonus: Blacklist & Duplicate Checks</h3>
      <p>PhoneHub warns you if an IMEI is entered twice, helping you catch data-entry mistakes and duplicate stock entries before they distort your reports.</p>

      <h2>Start Tracking by IMEI</h2>
      <p>Turn on IMEI tracking in minutes with your 7-day free trial.</p>
    `,
    metaDescription: 'IMEI tracking for mobile shops with PhoneHub. Track every handset individually from purchase to sale, prevent theft, and manage warranties.',
    metaKeywords: ['IMEI tracking', 'mobile inventory', 'phone stock management', 'PhoneHub']
  },
  {
    id: 8,
    title: 'Mobile Shop Inventory Management: Stop Dead Stock From Eating Your Profits',
    slug: 'mobile-shop-inventory-management',
    author: 'PhoneHub Team',
    publishedAt: '2026-09-12',
    readTime: 9,
    category: 'management',
    featured: false,
    excerpt: 'Dead stock ties up cash. Learn how PhoneHub inventory tools help you buy smarter and sell faster.',
    image: cover('Inventory', '#f97316', '#eab308'),
    content: `
      <h2>Inventory Is Where Mobile Shops Lose Money</h2>
      <p>In a fast-moving market, a phone that sits unsold for 60 days loses value every week. Good inventory management is the difference between a healthy margin and a slow bleed.</p>

      <h3>Common Inventory Problems</h3>
      <ul>
        <li>Cash stuck in slow-moving models</li>
        <li>Best-sellers going out of stock unexpectedly</li>
        <li>No clear picture of what actually sells</li>
        <li>Manual counting errors during audits</li>
      </ul>

      <h3>How PhoneHub Helps</h3>
      <ul>
        <li><strong>Dead Stock Alerts</strong> — get notified about units aging past your threshold</li>
        <li><strong>Stock Audit</strong> — reconcile physical stock with system stock quickly</li>
        <li><strong>Bulk Upload</strong> — add large batches of inventory in one go</li>
        <li><strong>Advance Analytics</strong> — see your fastest and slowest movers</li>
      </ul>

      <h3>A Simple Weekly Routine</h3>
      <p>Every Monday, review dead-stock alerts and top sellers. Push aging units with an offer, and reorder the fast movers before they run out. Ten minutes a week keeps your cash working.</p>

      <h2>Take Control of Your Stock</h2>
      <p>Start your PhoneHub free trial and clear dead stock before it clears your profits.</p>
    `,
    metaDescription: 'Mobile shop inventory management with PhoneHub. Dead stock alerts, stock audit, bulk upload, and analytics to protect your margins.',
    metaKeywords: ['inventory management', 'dead stock', 'mobile shop', 'stock audit']
  },
  {
    id: 9,
    title: 'WhatsApp Smart Bot for Mobile Shops: Sell and Support on Autopilot',
    slug: 'whatsapp-smart-bot-mobile-shops',
    author: 'PhoneHub Team',
    publishedAt: '2026-09-18',
    readTime: 7,
    category: 'management',
    featured: true,
    excerpt: 'Send bills, payment reminders, and offers automatically over WhatsApp with PhoneHub Smart Bot.',
    image: cover('WhatsApp Bot', '#22c55e', '#16a34a'),
    content: `
      <h2>Your Customers Already Live on WhatsApp</h2>
      <p>Instead of chasing customers with calls, let PhoneHub's WhatsApp Smart Bot handle the routine messaging for you — automatically and instantly.</p>

      <h3>What the Bot Can Do</h3>
      <ul>
        <li>Send digital invoices right after a sale</li>
        <li>Automatic payment reminders for credit customers</li>
        <li>Share festival and clearance offers to your customer list</li>
        <li>Send warranty and service reminders</li>
        <li>Answer common questions like price and availability</li>
      </ul>

      <h3>Why It Works</h3>
      <p>WhatsApp messages get opened far more often than SMS or email. Automated, timely messages mean faster payments, more repeat visits, and less manual follow-up work for you and your staff.</p>

      <h3>Availability</h3>
      <p>The WhatsApp Smart Bot is included on the Diamond plan (limited-time) and permanently on Premium.</p>

      <h2>Put Your Follow-ups on Autopilot</h2>
      <p>Try PhoneHub and let the Smart Bot do the chasing for you.</p>
    `,
    metaDescription: 'PhoneHub WhatsApp Smart Bot for mobile shops. Automate invoices, payment reminders, and offers over WhatsApp.',
    metaKeywords: ['WhatsApp bot', 'payment reminders', 'mobile shop marketing', 'PhoneHub']
  },
  {
    id: 10,
    title: 'How to Buy and Sell Second-Hand Phones Profitably (With Full Tracking)',
    slug: 'second-hand-phone-business-guide',
    author: 'PhoneHub Team',
    publishedAt: '2026-09-22',
    readTime: 8,
    category: 'management',
    featured: false,
    excerpt: 'Used phones offer big margins but big risks. Here is how to run a clean second-hand business with PhoneHub.',
    image: cover('Second-Hand', '#14b8a6', '#6366f1'),
    content: `
      <h2>The Second-Hand Opportunity</h2>
      <p>Refurbished and used phones carry some of the highest margins in mobile retail — but only if you track condition, cost, and IMEI carefully.</p>

      <h3>The Risks of Doing It Manually</h3>
      <ul>
        <li>Buying stolen or blacklisted handsets</li>
        <li>Losing track of purchase cost and true margin</li>
        <li>Disputes over device condition at resale</li>
        <li>No proof of who you bought a device from</li>
      </ul>

      <h3>How PhoneHub Handles Used Phones</h3>
      <ul>
        <li>Record each purchase with IMEI, seller details, and condition notes</li>
        <li>Track your buying price vs selling price per unit</li>
        <li>Full purchase-to-sale history for every device</li>
        <li>Warranty and return terms tied to each handset</li>
      </ul>

      <h3>A Healthy Buying Checklist</h3>
      <p>Verify the IMEI, check for activation locks, note visible damage, capture seller ID, and record the agreed price — all in one PhoneHub entry so nothing is lost.</p>

      <h2>Run a Clean Used-Phone Business</h2>
      <p>Start with PhoneHub and track every second-hand device end to end.</p>
    `,
    metaDescription: 'Guide to buying and selling second-hand phones profitably with PhoneHub. Track IMEI, condition, cost, and margin on every used device.',
    metaKeywords: ['second-hand phones', 'used phone business', 'refurbished phones', 'IMEI tracking']
  },
  {
    id: 11,
    title: 'Get Your Mobile Shop Online: Build a Store and Website With PhoneHub',
    slug: 'mobile-shop-online-store-website',
    author: 'PhoneHub Team',
    publishedAt: '2026-09-25',
    readTime: 7,
    category: 'management',
    featured: true,
    excerpt: 'Turn your inventory into an online storefront and personal website without any coding, using PhoneHub.',
    image: cover('Online Store', '#0ea5e9', '#8b5cf6'),
    content: `
      <h2>Your Shop Deserves an Online Presence</h2>
      <p>Customers search online before they buy. With PhoneHub you can publish a personal website and online store straight from the inventory you already manage — no developer needed.</p>

      <h3>What You Get</h3>
      <ul>
        <li>A personal website for your shop (Gold plan and above)</li>
        <li>An online store that reflects your live inventory</li>
        <li>A PhoneHub.in listing so nearby customers can find you (Diamond)</li>
        <li>Custom-domain branded website on Enterprise</li>
      </ul>

      <h3>Why It Matters</h3>
      <p>An online storefront builds trust, lets customers check availability before visiting, and turns social media traffic into real footfall and orders.</p>

      <h3>Set Up in Minutes</h3>
      <p>Because your products are already in PhoneHub, publishing your store is mostly a matter of choosing what to show. Update stock once and it reflects everywhere.</p>

      <h2>Go Online Today</h2>
      <p>Start your PhoneHub free trial and launch your store this week.</p>
    `,
    metaDescription: 'Build an online store and website for your mobile shop with PhoneHub. Publish your live inventory online with no coding.',
    metaKeywords: ['online store', 'mobile shop website', 'ecommerce', 'PhoneHub']
  }
];

export const getBlogArticles = () => blogArticles;

export const getBlogBySlug = (slug) => {
  return blogArticles.find(a => a.slug === slug);
};

export const getBlogByCategory = (category) => {
  return blogArticles.filter(a => a.category === category);
};

export const getFeaturedBlogs = () => {
  return blogArticles.filter(a => a.featured);
};

export const getLatestBlogs = (limit = 6) => {
  return [...blogArticles]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, limit);
};
