"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mainLinks = navLinks.filter((link) => link.href !== "/booking");
  const bookingLink = navLinks.find((link) => link.href === "/booking");

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-[#F7F5F0]/90 backdrop-blur-md transition-shadow ${
        scrolled
          ? "border-[#151A2E]/10 shadow-[0_1px_20px_rgba(15,18,32,0.06)]"
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-2xl font-medium text-[#0F1220]"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex gap-8">
            {mainLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition ${
                      isActive
                        ? "text-[#0F1220]"
                        : "text-[#4A4E5C] hover:text-[#0F1220]"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`mt-1 block h-[2px] rounded-full bg-[#B08D57] transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {bookingLink && (
            <Link
              href={bookingLink.href}
              className="rounded-full bg-[#151A2E] px-5 py-2.5 text-sm font-medium text-[#F7F5F0] transition hover:bg-[#0F1220]"
            >
              {bookingLink.label}
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-2xl text-[#0F1220]">☰</span>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-[#151A2E]/10 px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {mainLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium ${
                      isActive ? "text-[#0F1220]" : "text-[#4A4E5C]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {bookingLink && (
            <Link
              href={bookingLink.href}
              onClick={() => setIsOpen(false)}
              className="mt-6 block rounded-full bg-[#151A2E] px-5 py-3 text-center text-sm font-medium text-[#F7F5F0]"
            >
              {bookingLink.label}
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
