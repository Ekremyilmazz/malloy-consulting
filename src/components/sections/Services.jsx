import Link from "next/link";
import { services } from "@/lib/constants";

export default function Services() {
  return (
    <section className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[#0F1220] sm:text-4xl">
            Empower Your Leadership Journey
          </h2>
          <p className="mt-4 text-[#4A4E5C]">
            Tailored programs designed to elevate your leadership style and
            take you from good to great.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-[#151A2E]/10 pt-10 sm:grid-cols-3">
          {services.map((service) => (
            <div key={service.id}>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#0F1220]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-[#4A4E5C]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link
            href="/services"
            className="text-sm font-medium text-[#0F1220] underline decoration-[#B08D57] decoration-2 underline-offset-4 transition hover:text-[#B08D57]"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}