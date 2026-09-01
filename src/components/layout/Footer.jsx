import Link from "next/link";
import { siteConfig, navLinks, contactInfo } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-[#151A2E] text-[#F7F5F0]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-medium">
              {siteConfig.name}
            </h3>
            <p className="mt-3 text-sm text-[#F7F5F0]/60">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-[#F7F5F0]/40">Menu</h4>
            <ul className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F7F5F0]/80 transition hover:text-[#B08D57]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-[#F7F5F0]/40">Contact</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-[#F7F5F0]/80">
              <li>{contactInfo.email}</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-[#F7F5F0]/10 pt-6 text-sm text-[#F7F5F0]/40">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}