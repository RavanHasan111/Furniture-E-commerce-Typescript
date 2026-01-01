export default function FAQPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-slate-50 px-4 py-12">
      <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-100 bg-white p-8 shadow-xl">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Help Center
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            Frequently asked questions
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Here you can find quick answers about ordering, delivery and account basics. This
            page is static for now and can be expanded later with real content and features.
          </p>
        </div>

        <div className="space-y-6 text-sm text-slate-700">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
            <h2 className="text-base font-semibold text-slate-900">
              How does ordering work?
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Browse our catalog, add products to your cart and proceed to checkout. On this demo
              version, the flow is simplified and focuses on the look &amp; feel of the store.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
            <h2 className="text-base font-semibold text-slate-900">
              What about delivery and returns?
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Delivery, warranty and return details are shown on each product page. In this static
              FAQ section you can later add your real store policies and links.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
            <h2 className="text-base font-semibold text-slate-900">
              Can I manage my account here?
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              The profile area is designed for orders, wishlist and notifications. For now this
              page only explains the concept and doesn&apos;t include advanced account tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


