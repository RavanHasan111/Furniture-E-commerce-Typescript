import LoginForm from "../../../feature/auth/ui/LoginForm/LoginForm";

export default function Login() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-16 text-white">
      <div className="grid w-full max-w-5xl gap-12 rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-[0_20px_70px_rgba(15,23,42,0.4)] backdrop-blur-lg md:grid-cols-2">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-slate-300">
            PANTO
          </p>
          <h1 className="text-4xl font-semibold leading-snug">
            Welcome back,
            <span className="block text-rose-200">sign in to continue shopping</span>
          </h1>
          <p className="text-slate-200">
            Manage your orders, track deliveries, and get personalized recommendations.
          </p>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
              Secure sign-in
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
              Synced cart and profile
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
              Access to order history
            </li>
          </ul>
        </div>

        <LoginForm />
      </div>
    </section>
  );
}
