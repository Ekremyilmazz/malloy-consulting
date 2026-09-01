import { featuredBook } from "@/lib/constants";

export default function FeaturedBook() {
  return (
    <section className="border-t border-[#151A2E]/10 bg-[#F7F5F0] py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[0.8fr_1.2fr]">
        <div className="flex justify-center md:justify-start">
          <div className="flex h-72 w-52 items-center justify-center rounded-lg bg-[#151A2E] text-center text-xs text-[#F7F5F0]/40">
            Book Cover
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[#B08D57]">
            {featuredBook.edition}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-medium text-[#0F1220]">
            {featuredBook.title}
          </h2>
          <p className="mt-4 text-[#4A4E5C]">{featuredBook.tagline}</p>
          <p className="mt-2 text-sm italic text-[#4A4E5C]">
            {featuredBook.endorsement}
          </p>
          <p className="mt-4 text-sm text-[#4A4E5C]">
            {featuredBook.authorNote}
          </p>
          <a href={featuredBook.ctaUrl} className="mt-6 inline-block text-sm font-medium text-[#0F1220] underline decoration-[#B08D57] decoration-2 underline-offset-4 transition hover:text-[#B08D57]">
            {featuredBook.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}