import Link from "next/link";
import { siteConfig, navLinks, contactInfo } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {siteConfig.name}
            </h3>
            <p className="mt-2 max-w-xs text-sm text-gray-600">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Menu</h4>
            <ul className="mt-3 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
              <li>{contactInfo.email}</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}