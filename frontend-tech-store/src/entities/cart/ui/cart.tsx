import { useNavigate } from "react-router-dom";
import { useGetCartDataQuery } from "../api/cartApi";

export default function Cart() {
  const navigate = useNavigate();
  const { data: cartData, isLoading, isError, refetch } = useGetCartDataQuery();

  if (isLoading) {
    return (
      <div className="rounded-[32px] border border-slate-100 bg-white p-10 text-slate-500 shadow-xl">
        Loading cart...
      </div>
    );
  }

  if (isError || !cartData) {
    return (
      <div className="rounded-[32px] border border-rose-100 bg-rose-50 p-10 text-rose-600">
        Failed to load cart.
        <button onClick={() => refetch()} className="ml-3 underline">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <div className="overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-xl">
        <div className="hidden grid-cols-12 gap-4 border-b border-slate-100 px-8 py-4 text-xs uppercase tracking-[0.3em] text-slate-400 md:grid">
          <span className="col-span-5">Product</span>
          <span className="col-span-2 text-center">Price</span>
          <span className="col-span-2 text-center">Quantity</span>
          <span className="col-span-1 text-center">Discount</span>
          <span className="col-span-2 text-center">Total</span>
        </div>

        <ul className="divide-y divide-slate-100">
          {cartData.items?.map((item) => (
            <li
              key={item.id}
              className="grid grid-cols-1 gap-4 px-6 py-6 transition hover:bg-slate-50 md:grid-cols-12 md:items-center"
            >
              <div className="col-span-5 flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-2xl bg-slate-100">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-500">ID: {item.id}</p>
                </div>
              </div>

              <p className="col-span-2 text-center text-lg font-semibold text-slate-900">
                {item.price} {cartData.currency}
              </p>

              <p className="col-span-2 text-center text-lg text-slate-900">{item.quantity}</p>

              <p className="col-span-1 text-center text-sm text-rose-500">
                {item.discount ? `-${item.discount * 100}%` : "—"}
              </p>

              <p className="col-span-2 text-center text-lg font-semibold text-slate-900">
                {item.totalPrice} {cartData.currency}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <aside className="space-y-5 rounded-[32px] border border-slate-100 bg-white p-8 shadow-xl">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Summary</p>
          <div className="flex items-center justify-between text-slate-500">
            <span>Subtotal</span>
            <span className="font-semibold text-slate-900">
              {cartData.subtotal} {cartData.currency}
            </span>
          </div>
          <div className="flex items-center justify-between text-slate-500">
            <span>Discounts</span>
            <span className="font-semibold text-rose-500">
              -{cartData.discountTotal} {cartData.currency}
            </span>
          </div>
          <div className="flex items-center justify-between text-slate-500">
            <span>Delivery</span>
            <span className="font-semibold text-slate-900">
              {cartData.deliveryPrice} {cartData.currency}
            </span>
          </div>
          <div className="flex items-center justify-between text-lg font-semibold text-slate-900">
            <span>Total</span>
            <span>
              {cartData.totalPrice} {cartData.currency}
            </span>
          </div>
          {cartData.couponCode && (
            <p className="text-sm text-slate-500">Promo code: {cartData.couponCode}</p>
          )}
        </div>

        <button
          onClick={() => navigate("/checkout")}
          className="w-full rounded-2xl bg-slate-900 py-3 text-lg font-semibold text-white transition hover:opacity-90"
        >
          Proceed to checkout
        </button>
      </aside>
    </div>
  );
}
