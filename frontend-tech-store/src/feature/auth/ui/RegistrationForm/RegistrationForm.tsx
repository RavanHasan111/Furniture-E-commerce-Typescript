import { useState } from "react";
import { useRegisterMutation } from "../../model/authApi";
import type { RegisterRequest } from "../../model/type";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const [form, setForm] = useState<RegisterRequest>({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });

  const [register, { isLoading, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await register(form).unwrap();
      console.log("Form submitted:", response);
      alert(`Registration successful!\nWelcome, ${form.username}!`);

      setForm({
        name: "",
        surname: "",
        username: "",
        email: "",
        password: "",
      });
        navigate("/");
    } catch (err) {
      console.error("Registration error:", err);
      alert("Registration error!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[28px] border border-rose-100 bg-white/90 p-8 shadow-xl backdrop-blur"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-500">
          First name
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-500">
          Last name
          <input
            type="text"
            id="surname"
            name="surname"
            required
            value={form.surname}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
          />
        </label>
      </div>

      <label className="block space-y-2 text-sm font-medium text-slate-500">
        Username
        <input
          type="text"
          id="username"
          name="username"
          required
          value={form.username}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
        />
      </label>

      <label className="block space-y-2 text-sm font-medium text-slate-500">
        Email
        <input
          type="email"
          id="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
        />
      </label>

      <label className="block space-y-2 text-sm font-medium text-slate-500">
        Password
        <input
          type="password"
          id="password"
          name="password"
          required
          value={form.password}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
        />
      </label>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-red-500 py-3 text-lg font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {isLoading ? "Registering..." : "Register"}
      </button>

      {error && (
        <p className="rounded-xl bg-rose-50 px-4 py-2 text-sm text-rose-500">
          Registration error
        </p>
      )}
    </form>
  );
}
