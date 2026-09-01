import { aboutContent } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="bg-[#F7F5F0]">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr]">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-medium text-[#0F1220] sm:text-5xl">
            {aboutContent.heading}
          </h1>

          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl font-medium leading-snug text-[#0F1220]">
              {aboutContent.intro}
            </p>
            <p className="mt-6 text-[#4A4E5C]">{aboutContent.body}</p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-[#151A2E]/10 pt-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-lg font-medium text-[#0F1220]">
              {aboutContent.founder.name}
            </h2>
            <p className="mt-1 text-sm text-[#4A4E5C]">
              {aboutContent.founder.title}
            </p>
          </div>
          <p className="text-[#4A4E5C]">{aboutContent.founder.bio}</p>
        </div>
      </div>
    </div>
  );
}