import { Link } from "react-router-dom";
import type { Product } from "../model/types";
import { useAddProductToCartMutation } from "../../../feature/cart/useAddProduct/api/useAddProduct";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [addProductToCart, { isLoading, isError, error }] = useAddProductToCartMutation();

  const handleAddToCart = async () => {
    try {
      await addProductToCart(product.id).unwrap();
      console.log("Product added to cart:", product.id);
    } catch (err) {
      console.error("Failed to add product:", err);
    }
  };

  const discounted =
    typeof product.discountPercentage === "number" && product.discountPercentage > 0;

  const finalPrice = discounted
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <Link to={`/products/${product.id}`} className="relative block overflow-hidden">
        <div className="aspect-[4/3] w-full bg-slate-100">
          <img
            src={product.thumbnail || product.images?.[0]}
            alt={product.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {discounted && (
          <div className="absolute left-3 top-3 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
            -{product.discountPercentage}%
          </div>
        )}
        {product.availabilityStatus && (
          <div className="absolute right-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
            {product.availabilityStatus}
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-3">
        <div className="space-y-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            {product.brand}
          </p>
          <Link
            to={`/products/${product.id}`}
            className="line-clamp-2 text-sm font-semibold text-slate-900 group-hover:text-rose-600"
          >
            {product.title}
          </Link>
          <p className="text-xs capitalize text-slate-500">{product.category}</p>
        </div>

        {/* Price & rating */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-slate-900">
                ${finalPrice.toFixed(2)}
              </span>
              {discounted && (
                <span className="text-xs text-slate-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs text-slate-600">
            <span className="text-amber-400">★</span>
            <span>{product.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-2 flex items-center gap-3">
          <button
            onClick={handleAddToCart}
            disabled={isLoading || product.stock === 0}
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {product.stock === 0
              ? "Out of stock"
              : isLoading
              ? "Adding..."
              : "Add to cart"}
          </button>

          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Details
          </Link>
        </div>

        {isError && (
          <p className="mt-1 text-xs text-rose-500">
            Failed to add to cart. {typeof error === "string" ? error : ""}
          </p>
        )}
      </div>
    </article>
  );
}
