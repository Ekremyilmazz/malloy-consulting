import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="bg-[#151A2E] py-24 text-[#F7F5F0]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
        <div className="max-w-lg">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium sm:text-4xl">
            Ready to lead differently?
          </h2>
          <p className="mt-4 text-[#F7F5F0]/70">
            A 30-minute conversation is where it starts. No pressure, no
            pitch — just a clear look at where you are and where you want
            to be.
          </p>
        </div>

        <Link
          href="/booking"
          className="inline-block shrink-0 rounded-full bg-[#B08D57] px-8 py-3.5 text-sm font-medium text-[#151A2E] transition hover:bg-[#c49f68]"
        >
          Book Your Discovery Call
        </Link>
      </div>
    </section>
  );
}