import { useGetProfileInfoQuery } from "../api/profileApi";

type ProfileData = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  username?: string;
};

const detailGroups: { label: string; valueKey: keyof ProfileData }[] = [
  { label: "First name", valueKey: "name" },
  { label: "Email", valueKey: "email" },
  { label: "Phone", valueKey: "phone" },
  { label: "Address", valueKey: "address" },
  { label: "City", valueKey: "city" },
  { label: "State / Region", valueKey: "state" },
  { label: "ZIP code", valueKey: "zip" },
  { label: "Country", valueKey: "country" },
  { label: "Username", valueKey: "username" },
];

export default function Profile() {
  const { data, isLoading, error } = useGetProfileInfoQuery();

  if (isLoading) {
    return (
      <div className="rounded-[32px] border border-slate-100 bg-white p-10 shadow-xl">
        <div className="h-6 w-32 animate-pulse rounded-full bg-slate-100" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="space-y-3 rounded-2xl border border-slate-100 p-4">
              <div className="h-3 w-20 animate-pulse rounded-full bg-slate-100" />
              <div className="h-5 w-full animate-pulse rounded-full bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="rounded-[32px] border border-rose-100 bg-rose-50 p-10 text-rose-600">
        Failed to load profile. Please try again later.
      </div>
    );
  }

  return (
    <div className="rounded-[32px] border border-slate-100 bg-white p-10 shadow-xl">
      <div className="flex flex-col gap-3 border-b border-slate-100 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Account</p>
          <h2 className="text-3xl font-semibold text-slate-900">{data.name}</h2>
          <p className="text-slate-500">{data.email}</p>
        </div>
        <button className="w-full rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 md:w-auto">
          Edit
        </button>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {detailGroups.map(({ label, valueKey }) => (
          <div key={valueKey as string} className="rounded-2xl border border-slate-100 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</p>
            <p className="mt-2 text-lg font-medium text-slate-900">
              {(data as ProfileData)[valueKey] ?? "—"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}