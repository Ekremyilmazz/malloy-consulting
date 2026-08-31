import { stats } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.id} className="text-center">
            <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
              {stat.label}
            </p>
            <p className="mt-3 text-sm text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}