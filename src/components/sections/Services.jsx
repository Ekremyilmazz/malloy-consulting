import { services } from "@/lib/constants";

export default function Services() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Empower Your Leadership Journey
          </h2>
          <p className="mt-4 text-gray-600">
            Tailored programs designed to elevate your leadership style and
            take you from good to great.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}