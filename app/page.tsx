export default function Home() {
  const faqs = [
    {
      q: 'How does it connect to my Shopify store?',
      a: 'You install our Shopify app in one click. We use the official Shopify API to read your inventory and sales data — read-only, no changes made to your store.'
    },
    {
      q: 'What counts as "dead inventory"?',
      a: 'Any SKU with zero sales in the past 60 days, or whose sell-through rate puts it on track to sit unsold for 6+ months. You can customize these thresholds.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel from your dashboard with one click. No contracts, no cancellation fees, no questions asked.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify Inventory Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Find dead inventory<br />
          <span className="text-[#58a6ff]">costing you money</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Shopify store and instantly see which products are tying up cash. Get automated markdown recommendations and reorder suggestions — so you stop bleeding money on slow stock.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start Free Trial — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: '62%', label: 'of Shopify stores have dead stock they don\'t know about' },
            { stat: '$8,400', label: 'average cash freed up in the first 30 days' },
            { stat: '< 2 min', label: 'to connect your store and get your first report' }
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-extrabold text-[#58a6ff] mb-1">{stat}</div>
              <div className="text-sm text-[#8b949e]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, honest pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stop wasting money on dead stock</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Full Shopify store analysis',
              'Dead stock detection & alerts',
              'Markdown & discount recommendations',
              'Reorder point suggestions',
              'Weekly email digest',
              'Unlimited SKUs'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started — 7 Days Free
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Shopify Inventory Waste Detector. All rights reserved.
      </footer>
    </main>
  )
}
