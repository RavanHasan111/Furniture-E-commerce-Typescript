import { useGetProductsQuery } from "../../../entities/product/api/productApi";
import ProductsList from "../../../widgets/ProductsList/ui/ProductsList";
import { useState } from "react";
import type { SortParams } from "../../../feature/sort";
import SortSelect from "../../../feature/sort/ui/SortSelect";
import { ProductFilters } from "../../../feature/filter";
import type { FilterState, FilterParams } from "../../../feature/filter";

export default function ShopPage() {
  const [sortParams, setSortParams] = useState<SortParams | undefined>(undefined);
  const [filterState, setFilterState] = useState<FilterState>({
    selectedCategory: undefined,
    selectedBrand: undefined,
    ratingRange: undefined,
  });

  const filterParams: FilterParams = {
    category: filterState.selectedCategory,
    brand: filterState.selectedBrand,
    minRating: filterState.ratingRange?.min,
    maxRating: filterState.ratingRange?.max,
  };

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetProductsQuery({
    sortParams,
    filterParams: Object.values(filterParams).some((value) => value !== undefined)
      ? filterParams
      : undefined,
  });

  function handleSortChange(sortBy: string, order: string) {
    setSortParams({
      sortBy: sortBy as "price",
      order: order as "asc" | "desc",
    });
  }

  function handleFilterChange(newFilterState: FilterState) {
    setFilterState(newFilterState);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-4xl font-bold text-red-700 mb-8 text-center">
        🛋️ Shop Our Collection
      </h1>

      <div className="flex justify-end mb-6">
        <SortSelect
          onSortChange={handleSortChange}
          currentSort={sortParams ? `${sortParams.sortBy}-${sortParams.order}` : undefined}
        />
      </div>

      {isLoading && (
        <div className="text-center text-lg text-gray-600 animate-pulse">
          Loading products...
        </div>
      )}
      {isError && (
        <div className="text-center text-red-600 font-semibold">
          Error loading products: {error?.toString()}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        <div className="lg:col-span-1 bg-white rounded-2xl shadow-md p-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Filters</h2>
          <ProductFilters filterState={filterState} onFilterChange={handleFilterChange} />
        </div>

        <div className="lg:col-span-5 bg-white rounded-2xl shadow-md p-6">
          {products ? (
            <ProductsList products={products} />
          ) : (
            !isLoading && (
              <div className="text-center text-gray-500 text-lg mt-10">
                No products found 😔
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
