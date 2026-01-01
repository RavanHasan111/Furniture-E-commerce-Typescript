export default function ContactPage() {
  return (
    <section className="bg-gradient-to-br from-rose-100 via-white to-sky-100 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-start">
        <div className="space-y-6 md:w-2/5">
          <p className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1 text-sm font-semibold text-rose-600">
            We’re here 24/7
          </p>
          <h1 className="text-4xl font-semibold text-gray-900">
            Contacts
          </h1>
          <p className="text-lg text-gray-600">
            Contact us in any way that is convenient for you — we reply within one business day.
          </p>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-rose-100 bg-white/90 p-5 shadow-sm">
              <p className="text-sm uppercase tracking-wide text-gray-500">Office</p>
              <p className="text-lg font-medium text-gray-900">Almaty, Technology street, 42</p>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-white/90 p-5 shadow-sm">
              <p className="text-sm uppercase tracking-wide text-gray-500">Email</p>
              <a href="mailto:support@techstore.kz" className="text-lg font-medium text-gray-900 hover:text-rose-500">
                support@techstore.kz
              </a>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-white/90 p-5 shadow-sm">
              <p className="text-sm uppercase tracking-wide text-gray-500">Phone</p>
              <a href="tel:+77000000000" className="text-lg font-medium text-gray-900 hover:text-rose-500">
                +7 (700) 000-00-00
              </a>
            </div>
          </div>
        </div>

        <form className="w-full rounded-[32px] border border-rose-100 bg-white/80 p-8 shadow-2xl backdrop-blur md:w-3/5">
          <h2 className="text-2xl font-semibold text-gray-900">Write to us</h2>
          <p className="mb-6 text-gray-500">
            Fill out the form and we will contact you as soon as possible.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-sm font-medium text-gray-700">
              First name
              <input
                type="text"
                className="mt-1 w-full rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                placeholder="Your first name"
              />
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Last name
              <input
                type="text"
                className="mt-1 w-full rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                placeholder="Your last name"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-medium text-gray-700">
            Email
            <input
              type="email"
              className="mt-1 w-full rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
              placeholder="you@email.com"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-gray-700">
            Message
            <textarea
              className="mt-1 w-full rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
              rows={5}
              placeholder="Tell us how we can help"
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-rose-500 to-red-500 py-3 text-lg font-semibold text-white transition hover:opacity-90"
            >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

