import { useState } from "react";
import { useGetCartDataQuery } from "../../../entities/cart/api/cartApi";
import type { CardData, CheckoutFormData, OrderRequest } from "../model/types";
import { useCreateOrderMutation } from "../api/cheakoutApi";

export default function Checkout() {
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    city: "",
    country: "",
    region: "",
    address: "",
  });

  const [cardData, setCardData] = useState<CardData>({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const { data: getCartData } = useGetCartDataQuery();
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate that all required fields are filled
    const requiredFields = [
      "email",
      "firstName",
      "lastName",
      "city",
      "country",
      "region",
      "address",
    ];

    for (const field of requiredFields) {
      if (!formData[field as keyof CheckoutFormData]) {
        alert("Please fill in all required shipping fields.");
        return;
      }
    }

    if (!cardData.cardNumber || !cardData.expiry || !cardData.cvv) {
      alert("Please fill in your card details.");
      return;
    }

    if (!getCartData?.items?.length) {
      alert("Your cart is empty. Please add items before paying.");
      return;
    }

    const order: OrderRequest = {
      customer: {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
      shippingAddress: {
        country: formData.country,
        region: formData.region,
        city: formData.city,
        address: formData.address,
        company: formData.company,
      },
      items:
        getCartData?.items?.map((item) => ({
          productId: item.id.toString(),
          quantity: item.quantity,
          price: item.price,
        })) || [],
      payment: {
        method: "card",
        cardNumber: cardData.cardNumber,
        expiry: cardData.expiry,
        cvv: cardData.cvv,
      },
    };

    createOrder(order)
      .unwrap()
      .then((response) => {
        alert("Payment successful!");
        console.log(response);
      })
      .catch((err) => {
        console.error("Payment error:", err);
        alert("An error occurred during payment.");
      });
  };

  return (
    <div className="space-y-6 p-8">
      <div className="mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-[2rem] border border-slate-100 bg-white/90 shadow-xl backdrop-blur md:grid-cols-2">
        {/* Left side */}
        <div className="border-b border-slate-100 p-8 md:border-b-0 md:border-r">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Shipping address</h2>
          <form className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
              required
            />
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company (optional)"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
              required
            />
            <input
              type="text"
              name="region"
              placeholder="Region / State"
              value={formData.region}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
              required
            />
          </form>
        </div>

        {/* Right side */}
        <div className="p-8">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Payment</h2>

        {/* Order total */}
          <div className="mb-6 rounded-2xl bg-slate-50 p-5">
            <div className="flex items-center justify-between text-slate-500">
              <p className="text-sm uppercase tracking-[0.3em]">Total</p>
              <span className="text-xs text-slate-400">{getCartData?.items?.length || 0} items</span>
            </div>
            <p className="text-3xl font-bold text-slate-900">{getCartData?.totalPrice}$</p>
          </div>

          {/* Payment method */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card number"
              value={cardData.cardNumber}
              onChange={handleCardChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
              required
            />
            <div className="flex space-x-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={cardData.expiry}
                onChange={handleCardChange}
                className="w-1/2 rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                required
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={cardData.cvv}
                onChange={handleCardChange}
                className="w-1/2 rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 py-3 text-lg font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
            >
              {isLoading ? "Processing..." : "Pay now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
