import { Link } from "react-router-dom";
import type { Product } from "../../../../entities/product/model/types";

export default function Wishlist() {
    // Mock data - replace with actual API call
    const wishlistItems: Product[] = [
        {
            id: "1",
            title: "iPhone 15 Pro",
            description: "The latest Apple smartphone with a titanium body",
            category: "smartphones",
            price: 999.99,
            discountPercentage: 5,
            rating: 4.8,
            stock: 15,
            tags: ["apple", "premium"],
            brand: "Apple",
            sku: "IP15PRO",
            weight: 187,
            dimensions: { width: 70.6, height: 146.6, depth: 8.25 },
            warrantyInformation: "1 year warranty",
            shippingInformation: "Ships in 1-2 days",
            availabilityStatus: "In Stock",
            reviews: [],
            returnPolicy: "30 days return policy",
            minimumOrderQuantity: 1,
            meta: {
                createdAt: "2024-01-01",
                updatedAt: "2024-01-01",
                barcode: "123456",
                qrCode: "qr123",
            },
            thumbnail: "https://via.placeholder.com/300",
            images: ["https://via.placeholder.com/300"],
        },
        {
            id: "2",
            title: "MacBook Air M2",
            description: "Ultra-thin laptop with the M2 chip",
            category: "laptops",
            price: 1299.99,
            discountPercentage: 0,
            rating: 4.9,
            stock: 8,
            tags: ["apple", "laptop"],
            brand: "Apple",
            sku: "MBA-M2",
            weight: 1240,
            dimensions: { width: 304.1, height: 215, depth: 11.3 },
            warrantyInformation: "1 year warranty",
            shippingInformation: "Ships in 3-5 days",
            availabilityStatus: "In Stock",
            reviews: [],
            returnPolicy: "30 days return policy",
            minimumOrderQuantity: 1,
            meta: {
                createdAt: "2024-01-01",
                updatedAt: "2024-01-01",
                barcode: "123457",
                qrCode: "qr124",
            },
            thumbnail: "https://via.placeholder.com/300",
            images: ["https://via.placeholder.com/300"],
        },
        {
            id: "3",
            title: "AirPods Pro",
            description: "Wireless earbuds with active noise cancellation",
            category: "audio",
            price: 249.99,
            discountPercentage: 10,
            rating: 4.7,
            stock: 25,
            tags: ["apple", "audio"],
            brand: "Apple",
            sku: "APP",
            weight: 56,
            dimensions: { width: 60.6, height: 21.7, depth: 24 },
            warrantyInformation: "1 year warranty",
            shippingInformation: "Ships in 1-2 days",
            availabilityStatus: "In Stock",
            reviews: [],
            returnPolicy: "30 days return policy",
            minimumOrderQuantity: 1,
            meta: {
                createdAt: "2024-01-01",
                updatedAt: "2024-01-01",
                barcode: "123458",
                qrCode: "qr125",
            },
            thumbnail: "https://via.placeholder.com/300",
            images: ["https://via.placeholder.com/300"],
        },
    ];

    const calculateDiscountedPrice = (price: number, discount: number) => {
        return price * (1 - discount / 100);
    };

    return (
        <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Favorites</p>
                        <h2 className="mt-2 text-3xl font-semibold text-slate-900">My wishlist</h2>
                    </div>
                    <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                        {wishlistItems.length} items
                    </span>
                </div>

                {wishlistItems.length === 0 ? (
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-12 text-center">
                        <p className="text-6xl mb-4">❤️</p>
                        <p className="text-lg font-semibold text-slate-700">Your wishlist is empty</p>
                        <p className="mt-2 text-sm text-slate-500">Add items to favorites so you don’t lose them</p>
                        <Link
                            to="/shop"
                            className="mt-4 inline-block rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                            Go to shop
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {wishlistItems.map((product) => {
                            const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercentage);
                            return (
                                <div
                                    key={product.id}
                                    className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-xl"
                                >
                                    <Link to={`/products/${product.id}`}>
                                        <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-slate-100">
                                            <img
                                                src={product.thumbnail || "https://via.placeholder.com/300"}
                                                alt={product.title}
                                                className="h-full w-full object-cover transition group-hover:scale-105"
                                            />
                                            {product.discountPercentage > 0 && (
                                                <span className="absolute right-2 top-2 rounded-full bg-rose-500 px-2.5 py-1 text-xs font-semibold text-white">
                                                    -{product.discountPercentage}%
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-slate-900 group-hover:text-rose-600 transition">
                                            {product.title}
                                        </h3>
                                        <p className="mb-3 line-clamp-2 text-sm text-slate-600">{product.description}</p>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="flex items-center gap-1 text-sm text-slate-600">
                                                <span className="text-amber-400">★</span>
                                                {product.rating}
                                            </span>
                                            <span className="text-slate-300">•</span>
                                            <span className="text-sm text-slate-600">{product.brand}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-baseline gap-2">
                                                {product.discountPercentage > 0 ? (
                                                    <>
                                                        <span className="text-xl font-bold text-slate-900">
                                                            ${discountedPrice.toFixed(2)}
                                                        </span>
                                                        <span className="text-sm text-slate-400 line-through">
                                                            ${product.price.toFixed(2)}
                                                        </span>
                                                    </>
                                                ) : (
                                                    <span className="text-xl font-bold text-slate-900">
                                                        ${product.price.toFixed(2)}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="mt-4 flex gap-2">
                                        <button className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                                            Add to cart
                                        </button>
                                        <button className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm font-semibold text-rose-700 transition hover:bg-rose-100">
                                            ❤️
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}