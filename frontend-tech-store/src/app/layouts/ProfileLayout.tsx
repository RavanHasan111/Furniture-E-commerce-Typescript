import { Link, Outlet, useLocation } from "react-router-dom";

export default function ProfileLayout() {
    const location = useLocation();

    const navItems = [
        { path: "/profile/", label: "Профиль", icon: "👤" },
        { path: "/profile/orders", label: "Заказы", icon: "📦" },
        { path: "/profile/notifications", label: "Уведомления", icon: "🔔" },
        { path: "/profile/wishlist", label: "Избранное", icon: "❤️" },
    ];

    const isActive = (path: string) => {
        if (path === "/profile/") {
            return location.pathname === "/profile" || location.pathname === "/profile/";
        }
        return location.pathname === path;
    };

    return (
        <section className="min-h-screen bg-slate-50 px-4 py-16">
            <div className="mx-auto w-full max-w-7xl">
                <div className="mb-8 rounded-[36px] bg-slate-900 p-10 text-white shadow-2xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Dashboard</p>
                    <h1 className="mt-2 text-4xl font-semibold">Личный кабинет</h1>
                    <p className="mt-3 max-w-2xl text-slate-300">
                        Управляйте личными данными, адресами и настройками уведомлений. Все заказы и подписки синхронизированы.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-4">
                    <aside className="lg:col-span-1">
                        <nav className="sticky top-8 rounded-[32px] border border-slate-100 bg-white p-6 shadow-xl">
                            <ul className="space-y-2">
                                {navItems.map((item) => (
                                    <li key={item.path}>
                                        <Link
                                            to={item.path}
                                            className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
                                                isActive(item.path)
                                                    ? "bg-slate-900 text-white shadow-lg"
                                                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                                            }`}
                                        >
                                            <span className="text-lg">{item.icon}</span>
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>

                    <main className="lg:col-span-3">
                        <Outlet />
                    </main>
                </div>
            </div>
        </section>
    );
}