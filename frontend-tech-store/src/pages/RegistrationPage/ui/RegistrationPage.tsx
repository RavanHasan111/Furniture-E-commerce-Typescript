import RegistrationForm from "../../../feature/auth/ui/RegistrationForm/RegistrationForm";

export default function RegistrationPage() {
  return (
    <section className="bg-gradient-to-br from-rose-50 via-white to-slate-100 px-4 py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 rounded-[36px] border border-rose-100 bg-white/80 p-10 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur-lg lg:grid-cols-2">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-rose-400">
            Create an account
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Join PANTO
          </h1>
          <p className="text-lg text-slate-500">
            Get personalized device selections, save your carts, and check out in one click.
          </p>
          <div className="rounded-3xl border border-rose-100 bg-rose-50 p-6 text-rose-700">
            <p className="font-medium">Account benefits:</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• Notifications about discounts and new releases</li>
              <li>• Real-time order tracking</li>
              <li>• Saved addresses and payment methods</li>
            </ul>
          </div>
        </div>

        <RegistrationForm />
      </div>
    </section>
  );
}
