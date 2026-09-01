"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function BookingPage() {
  useEffect(() => {
    let isMounted = true;

    (async function () {
      const cal = await getCalApi();
      if (isMounted) {
        cal("ui", {
          theme: "light",
          styles: { branding: { brandColor: "#B08D57" } },
        });
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="bg-[#F7F5F0]">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="max-w-xl">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-medium text-[#0F1220] sm:text-5xl">
            Book a Discovery Call
          </h1>
          <p className="mt-5 text-[#4A4E5C]">
            Pick a time that works for you. We&apos;ll spend 30 minutes
            getting to know your goals and how we can help.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-[#151A2E]/10">
          <Cal
            calLink="ekrem-yilmaz/discovery-call"
            style={{ width: "100%", height: "700px", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </div>
  );
}