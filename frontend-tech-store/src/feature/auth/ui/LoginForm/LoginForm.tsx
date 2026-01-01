import { useState } from "react";
import { useLoginMutation } from "../../model/authApi";
import type { LoginRequest } from "../../model/type";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [form, setForm] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login(form).unwrap();
      alert("Login successful");
      console.log("Form submitted:", response);

      setForm({
        email: "",
        password: "",
      });
        navigate("/");
    } catch (err) {
      console.error("login error:", err);
      alert("login error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[24px] border border-white/10 bg-white text-slate-900 p-8 shadow-xl transition duration-200 ease-out sm:space-y-6"
    >
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-500">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm font-medium text-slate-500">
          <label htmlFor="password">Password</label>
          <button type="button" className="text-rose-500 hover:text-rose-400">
            Forgot?
          </button>
        </div>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={form.password}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-red-500 py-3 text-lg font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </button>

      {error && (
        <p className="rounded-xl bg-rose-50 px-4 py-2 text-sm text-rose-500">
          Login error
        </p>
      )}
    </form>
  );
}
