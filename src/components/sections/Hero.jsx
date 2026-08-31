import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center bg-gray-900 text-white">
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          {siteConfig.tagline}
        </h1>
        <p className="mt-6 text-lg text-gray-200 sm:text-xl">
          {siteConfig.description}
        </p>
        <div className="mt-8">
          <Link
            href="/booking"
            className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
}