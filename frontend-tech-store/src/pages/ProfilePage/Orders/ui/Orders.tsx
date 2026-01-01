export default function Orders() {
    // Mock data - replace with actual API call
    const orders = [
        {
            id: "ORD-001",
            status: "delivered",
            totalPrice: 1299.99,
            createdAt: "2024-01-15",
            items: [
                { name: "iPhone 15 Pro", quantity: 1, price: 999.99 },
                { name: "AirPods Pro", quantity: 1, price: 299.99 },
            ],
        },
        {
            id: "ORD-002",
            status: "shipped",
            totalPrice: 599.99,
            createdAt: "2024-01-20",
            items: [{ name: "MacBook Air", quantity: 1, price: 599.99 }],
        },
        {
            id: "ORD-003",
            status: "pending",
            totalPrice: 199.99,
            createdAt: "2024-01-25",
            items: [{ name: "Apple Watch", quantity: 1, price: 199.99 }],
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "delivered":
                return "bg-emerald-100 text-emerald-700 border-emerald-200";
            case "shipped":
                return "bg-blue-100 text-blue-700 border-blue-200";
            case "pending":
                return "bg-amber-100 text-amber-700 border-amber-200";
            case "paid":
                return "bg-green-100 text-green-700 border-green-200";
            default:
                return "bg-slate-100 text-slate-700 border-slate-200";
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case "delivered":
                return "Delivered";
            case "shipped":
                return "Shipped";
            case "pending":
                return "In progress";
            case "paid":
                return "Paid";
            default:
                return status;
        }
    };

    return (
        <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">History</p>
                        <h2 className="mt-2 text-3xl font-semibold text-slate-900">My orders</h2>
                    </div>
                    <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                        {orders.length} orders
                    </span>
                </div>

                {orders.length === 0 ? (
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-12 text-center">
                        <p className="text-6xl mb-4">📦</p>
                        <p className="text-lg font-semibold text-slate-700">You don’t have any orders yet</p>
                        <p className="mt-2 text-sm text-slate-500">Start shopping to see your orders here</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:shadow-lg"
                            >
                                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                    <div className="flex-1">
                                        <div className="mb-3 flex items-center gap-3">
                                            <h3 className="text-lg font-semibold text-slate-900">{order.id}</h3>
                                            <span
                                                className={`rounded-full border px-3 py-1 text-xs font-semibold ${getStatusColor(
                                                    order.status
                                                )}`}
                                            >
                                                {getStatusLabel(order.status)}
                                            </span>
                                        </div>
                                        <div className="space-y-2">
                                            {order.items.map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                                    <span className="font-medium">{item.name}</span>
                                                    <span className="text-slate-400">×</span>
                                                    <span>{item.quantity}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="mt-3 text-xs text-slate-500">
                                            Order date: {new Date(order.createdAt).toLocaleDateString("en-US")}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <p className="text-2xl font-bold text-slate-900">
                                            ${order.totalPrice.toFixed(2)}
                                        </p>
                                        <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}