export default function Notifications() {
    // Mock data - replace with actual API call
    const notifications = [
        {
            id: "1",
            type: "order",
            title: "Заказ доставлен",
            message: "Ваш заказ ORD-001 успешно доставлен. Спасибо за покупку!",
            date: "2024-01-15T10:30:00",
            read: false,
        },
        {
            id: "2",
            type: "promotion",
            title: "Специальное предложение",
            message: "Скидка 20% на все смартфоны до конца месяца!",
            date: "2024-01-20T14:15:00",
            read: false,
        },
        {
            id: "3",
            type: "order",
            title: "Заказ отправлен",
            message: "Ваш заказ ORD-002 отправлен. Отслеживайте доставку в личном кабинете.",
            date: "2024-01-22T09:00:00",
            read: true,
        },
        {
            id: "4",
            type: "system",
            title: "Обновление профиля",
            message: "Ваш профиль был успешно обновлен.",
            date: "2024-01-18T16:45:00",
            read: true,
        },
    ];

    const getNotificationIcon = (type: string) => {
        switch (type) {
            case "order":
                return "📦";
            case "promotion":
                return "🎉";
            case "system":
                return "⚙️";
            default:
                return "🔔";
        }
    };

    const getNotificationColor = (type: string) => {
        switch (type) {
            case "order":
                return "bg-blue-50 border-blue-100";
            case "promotion":
                return "bg-rose-50 border-rose-100";
            case "system":
                return "bg-slate-50 border-slate-100";
            default:
                return "bg-slate-50 border-slate-100";
        }
    };

    const unreadCount = notifications.filter((n) => !n.read).length;

    return (
        <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Уведомления</p>
                        <h2 className="mt-2 text-3xl font-semibold text-slate-900">Центр уведомлений</h2>
                    </div>
                    {unreadCount > 0 && (
                        <span className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white">
                            {unreadCount} новых
                        </span>
                    )}
                </div>

                {notifications.length === 0 ? (
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-12 text-center">
                        <p className="text-6xl mb-4">🔔</p>
                        <p className="text-lg font-semibold text-slate-700">Нет уведомлений</p>
                        <p className="mt-2 text-sm text-slate-500">Здесь будут появляться важные обновления</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`rounded-2xl border p-5 transition hover:shadow-md ${
                                    notification.read
                                        ? "bg-white border-slate-100"
                                        : `${getNotificationColor(notification.type)} border-2`
                                }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                                        {getNotificationIcon(notification.type)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-semibold text-slate-900">{notification.title}</h3>
                                                    {!notification.read && (
                                                        <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                                                    )}
                                                </div>
                                                <p className="mt-1 text-sm text-slate-600">{notification.message}</p>
                                                <p className="mt-2 text-xs text-slate-400">
                                                    {new Date(notification.date).toLocaleString("ru-RU", {
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric",
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                    })}
                                                </p>
                                            </div>
                                            <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                                                {notification.read ? "Прочитано" : "Отметить"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {notifications.length > 0 && (
                    <div className="mt-6 flex justify-end">
                        <button className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                            Отметить все как прочитанные
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}