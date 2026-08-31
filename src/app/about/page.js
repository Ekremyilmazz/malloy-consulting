import { aboutContent } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900">
        {aboutContent.heading}
      </h1>
      <p className="mt-6 text-lg text-gray-700">{aboutContent.intro}</p>
      <p className="mt-4 text-gray-600">{aboutContent.body}</p>

      <div className="mt-12 rounded-2xl bg-gray-50 p-8">
        <h2 className="text-xl font-semibold text-gray-900">
          {aboutContent.founder.name}
        </h2>
        <p className="text-sm font-medium text-gray-500">
          {aboutContent.founder.title}
        </p>
        <p className="mt-4 text-gray-600">{aboutContent.founder.bio}</p>
      </div>
    </div>
  );
}