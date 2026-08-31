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
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-4xl font-bold text-gray-900">Get In Touch</h1>
        <p className="mt-4 text-gray-600">
          Have a question before booking a call? Send us a message and
          we&apos;ll get back to you shortly.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
        {/* Form */}
        <div>
          {submitted ? (
            <div className="rounded-2xl bg-gray-50 p-6 text-center">
              <p className="font-semibold text-gray-900">Thank you!</p>
              <p className="mt-2 text-sm text-gray-600">
                Your message has been sent. We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-gray-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-gray-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-gray-900 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact info */}
        <div className="flex flex-col justify-center gap-3 rounded-2xl bg-gray-50 p-6">
          <h3 className="text-sm font-semibold text-gray-900">
            Contact Info
          </h3>
          <p className="text-sm text-gray-600">{contactInfo.email}</p>
          <p className="text-sm text-gray-600">{contactInfo.phone}</p>
          <p className="text-sm text-gray-600">{contactInfo.location}</p>
        </div>
      </div>
    </div>
  );
}