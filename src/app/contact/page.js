"use client";

import { useState } from "react";
import { contactInfo } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-[#F7F5F0]">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.4fr]">
          {/* Left: heading + info */}
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-medium text-[#0F1220] sm:text-5xl">
              Get In Touch
            </h1>
            <p className="mt-5 text-[#4A4E5C]">
              Have a question before booking a call? Send a message and
              we&apos;ll get back to you shortly.
            </p>

            <div className="mt-10 flex flex-col gap-2 border-t border-[#151A2E]/10 pt-8 text-sm text-[#4A4E5C]">
              <p>{contactInfo.email}</p>
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.location}</p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="border-t border-[#151A2E]/10 pt-8">
                <p className="font-[family-name:var(--font-display)] text-xl font-medium text-[#0F1220]">
                  Thank you!
                </p>
                <p className="mt-2 text-sm text-[#4A4E5C]">
                  Your message has been sent. We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="text-sm font-medium text-[#0F1220]">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-2 w-full border-b border-[#151A2E]/20 bg-transparent py-2 text-sm text-[#0F1220] focus:border-[#B08D57] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#0F1220]">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-2 w-full border-b border-[#151A2E]/20 bg-transparent py-2 text-sm text-[#0F1220] focus:border-[#B08D57] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#0F1220]">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="mt-2 w-full border-b border-[#151A2E]/20 bg-transparent py-2 text-sm text-[#0F1220] focus:border-[#B08D57] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-fit rounded-full bg-[#151A2E] px-6 py-3 text-sm font-medium text-[#F7F5F0] transition hover:bg-[#0F1220]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}