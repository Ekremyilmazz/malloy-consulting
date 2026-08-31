import Link from "next/link";
import { services } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
        <p className="mt-4 text-gray-600">
          Tailored programs designed to elevate your leadership style and
          take you from good to great.
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              {service.title}
            </h2>
            <p className="mt-3 text-gray-600">{service.description}</p>

            <ul className="mt-5 flex flex-col gap-2">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <span className="text-gray-400">•</span>
                  {benefit}
                </li>
              ))}
            </ul>

            <Link
              href="/booking"
              className="mt-6 inline-block text-sm font-semibold text-gray-900 underline underline-offset-4 hover:text-gray-600"
            >
              Book a call about this →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}