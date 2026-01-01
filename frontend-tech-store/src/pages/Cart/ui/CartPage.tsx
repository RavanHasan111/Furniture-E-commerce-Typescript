import Cart from "../../../entities/cart/ui/cart";

export default function CartPage() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-100 px-4 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="rounded-[36px] border border-slate-100 bg-white/70 p-10 shadow-xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Shopping bag</p>
          <h1 className="mt-2 text-4xl font-semibold text-slate-900">Your cart</h1>
          <p className="mt-3 max-w-2xl text-slate-500">
            Review your items before placing an order. Discounts and delivery are calculated automatically.
          </p>
        </div>

        <Cart />
      </div>
    </section>
  );
}
