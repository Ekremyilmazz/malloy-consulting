import Link from "next/link";
import { services } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <div className="bg-[#F7F5F0]">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="max-w-xl">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-medium text-[#0F1220] sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-5 text-lg text-[#4A4E5C]">
            Tailored programs designed to elevate your leadership style and
            take you from good to great.
          </p>
        </div>

        <div className="mt-16 flex flex-col divide-y divide-[#151A2E]/10 border-t border-[#151A2E]/10">
          {services.map((service) => (
            <div
              key={service.id}
              className="grid grid-cols-1 gap-6 py-12 md:grid-cols-[1fr_1.4fr]"
            >
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium text-[#0F1220]">
                {service.title}
              </h2>

              <div>
                <p className="text-[#4A4E5C]">{service.description}</p>

                <ul className="mt-5 flex flex-col gap-2">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-sm text-[#4A4E5C]"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#B08D57]" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking"
                  className="mt-6 inline-block text-sm font-medium text-[#0F1220] underline decoration-[#B08D57] decoration-2 underline-offset-4 transition hover:text-[#B08D57]"
                >
                  Book a call about this
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}