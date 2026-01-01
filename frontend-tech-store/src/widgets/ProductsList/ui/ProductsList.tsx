import ProductCard from "../../../entities/product/ui/ProductCard";
import type { Product } from "../../../entities/product/model/types";

interface ProductsListProps {
  products: Product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  if (!products || products.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center text-slate-500 shadow-sm">
        No products found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}