import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../../entities/product/api/productApi";
import { useAddProductToCartMutation } from "../../../feature/cart/useAddProduct/api/useAddProduct";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id!);
  const [addToCart, { isLoading: isAdding }] = useAddProductToCartMutation();

  const handleAddToCart = async () => {
    if (!product) return;
    try {
      await addToCart(product.id.toString()).unwrap();
      alert("Product added to cart");
    } catch (e) {
      alert("Failed to add product to cart");
    }
  };

  if (isLoading) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-4">
        <div className="rounded-3xl border border-slate-100 bg-white px-8 py-6 text-slate-500 shadow-sm">
          Loading product...
        </div>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-4">
        <div className="rounded-3xl border border-rose-100 bg-rose-50 px-8 py-6 text-rose-600 shadow-sm">
          Failed to load product. Please try again later.
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 px-4 py-12">
      <div className="mx-auto grid w-full max-w-5xl gap-10 rounded-[32px] border border-slate-100 bg-white p-8 shadow-xl md:grid-cols-2">
        {/* Image gallery */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-3xl bg-slate-100">
            <img
              src={product.thumbnail || product.images?.[0]}
              alt={product.title}
              className="h-80 w-full object-cover"
            />
          </div>

          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {product.images.slice(0, 4).map((img, index) => (
                <div
                  key={index}
                  className="h-20 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50"
                >
                  <img src={img} alt={`${product.title} ${index + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              {product.brand}
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">{product.title}</h1>
            <p className="mt-2 text-sm text-slate-500 capitalize">{product.category}</p>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
              {product.discountPercentage > 0 && (
                <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600">
                  -{product.discountPercentage}%
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-amber-400">★</span>
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-slate-400">•</span>
              <span>{product.stock > 0 ? "In stock" : "Out of stock"}</span>
            </div>
          </div>

          <div className="space-y-1 text-sm text-slate-600">
            <p>
              <span className="font-semibold">Shipping:</span>{" "}
              {product.shippingInformation}
            </p>
            <p>
              <span className="font-semibold">Warranty:</span>{" "}
              {product.warrantyInformation}
            </p>
            <p>
              <span className="font-semibold">Return policy:</span>{" "}
              {product.returnPolicy}
            </p>
          </div>

          <div className="mt-2 flex flex-wrap gap-4">
            <button
              onClick={handleAddToCart}
              disabled={isAdding || product.stock === 0}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {product.stock === 0
                ? "Out of stock"
                : isAdding
                ? "Adding..."
                : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}