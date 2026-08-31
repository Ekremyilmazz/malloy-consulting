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
          styles: { branding: { brandColor: "#111827" } },
        });
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Book a Discovery Call
        </h1>
        <p className="mt-4 text-gray-600">
          Pick a time that works for you. We&apos;ll spend 30 minutes
          getting to know your goals and how we can help.
        </p>
      </div>

      <div className="mt-12">
        <Cal
          calLink="ekrem-yilmaz/discovery-call"
          style={{ width: "100%", height: "700px", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </div>
  );
}