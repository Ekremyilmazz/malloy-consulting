import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Get In Touch</h2>
        <p className="mt-4 text-gray-300">
          Ready to transform your leadership and make a real impact? Reach
          out now and let&apos;s start this journey together.
        </p>
        <div className="mt-8">
          <Link
            href="/booking"
            className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            Book Your Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
}