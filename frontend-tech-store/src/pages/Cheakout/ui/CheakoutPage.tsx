import Checkout from "../../../feature/cheakout/ui/Cheakout";

export default function CheakoutPage() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Step 02</p>
          <h1 className="mt-2 text-3xl font-semibold">Checkout</h1>
          <p className="mt-2 max-w-2xl text-slate-300">
            Review your shipping details and complete payment. We will send you a confirmation email with delivery status.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white/90 shadow-xl backdrop-blur">
          <Checkout />
        </div>
      </div>
    </section>
  );
}