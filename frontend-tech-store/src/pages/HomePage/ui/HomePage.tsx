import { Link } from "react-router-dom";
import Carousel from "../../../shared/ui/Carousel/Carousel";
import { useGetProductsQuery } from "../../../entities/product/api/productApi";
import ProductsList from "../../../widgets/ProductsList/ui/ProductsList";

export default function HomePage() {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-slate-50">
      {/* Hero section */}
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-12 pt-16 md:flex-row md:items-center">
        <div className="md:w-1/2 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-600">
            PANTO
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Elevate your tech setup
            <span className="block text-rose-500">with devices you’ll love</span>
          </h1>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg">
            Discover curated smartphones, laptops, audio gear and accessories from top brands.
            Fast delivery, secure payment, and 24/7 support included.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="rounded-2xl bg-gradient-to-r from-rose-500 to-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
            >
              Shop now
            </Link>
            <Link
              to="/about"
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              Learn more about us
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="text-lg">🚚</span>
              <span>Fast delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🔐</span>
              <span>Secure payments</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">💬</span>
              <span>24/7 support</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="overflow-hidden rounded-[32px] border border-rose-100 bg-white shadow-xl">
            <Carousel />
          </div>
        </div>
      </section>

      {/* Browse by category */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Browse
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-900">
              Popular categories
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-sm font-semibold text-rose-600 hover:text-rose-500"
          >
            View all products →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Link
            to="/shop"
            className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
              📱
            </div>
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-rose-600">
              Smartphones
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Flagship and budget phones from leading brands.
            </p>
          </Link>

          <Link
            to="/shop"
            className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
              💻
            </div>
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-rose-600">
              Laptops
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Ultrabooks, gaming laptops and workstations.
            </p>
          </Link>

          <Link
            to="/shop"
            className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
              🎧
            </div>
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-rose-600">
              Audio
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Headphones, earbuds and speakers for any lifestyle.
            </p>
          </Link>

          <Link
            to="/shop"
            className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
              ⚙️
            </div>
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-rose-600">
              Accessories
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Chargers, cases, cables and more must‑have gear.
            </p>
          </Link>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Featured
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-900">
              New & popular products
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-sm font-semibold text-rose-600 hover:text-rose-500"
          >
            Explore full catalog →
          </Link>
        </div>

        {isLoading && (
          <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center text-slate-500 shadow-sm">
            Loading featured products...
          </div>
        )}

        {isError && (
          <div className="rounded-2xl border border-rose-100 bg-rose-50 p-6 text-center text-rose-600 shadow-sm">
            Failed to load products. Please try again later.
          </div>
        )}

        {products && products.length > 0 && (
          <ProductsList products={products.slice(0, 8)} />
        )}

        {products && products.length === 0 && !isLoading && !isError && (
          <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center text-slate-500 shadow-sm">
            No products available yet. Please check back soon.
          </div>
        )}
      </section>
    </div>
  );
}