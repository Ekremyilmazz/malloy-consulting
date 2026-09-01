import Link from "next/link";
import { siteConfig, stats } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="bg-[#151A2E] text-[#F7F5F0]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-[1.3fr_1fr] md:py-32">
        {/* Left: main content */}
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.1] sm:text-5xl md:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-md text-lg text-[#F7F5F0]/70">
            {siteConfig.description}
          </p>
          <div className="mt-10">
            <Link
              href="/booking"
              className="inline-block rounded-full bg-[#B08D57] px-8 py-3.5 text-sm font-medium text-[#151A2E] transition hover:bg-[#c49f68]"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>

        {/* Right: stat highlight */}
        <div className="flex flex-col justify-center gap-8 border-t border-[#F7F5F0]/10 pt-8 md:border-t-0 md:border-l md:pl-12 md:pt-0">
          {stats.map((stat) => (
            <div key={stat.id}>
              <p className="font-[family-name:var(--font-display)] text-3xl font-medium text-[#B08D57]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[#F7F5F0]/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}