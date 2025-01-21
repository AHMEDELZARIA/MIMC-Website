"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { Logo, InstagramIcon } from "@/components/icons";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/program", label: "Program Details" },
  // { href: "/bazaar", label: "Bazaar" },
  // { href: "/sponsors", label: "Sponsors" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[rgba(87,3,38,0.7)] backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <a className="flex items-center gap-2" href="/">
            <Logo />
          </a>
        </div>

        {/* Desktop Navigation (visible on large screens) */}
        <ul className="hidden lg:flex gap-10 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className={clsx(
                  "text-[#F0FFC9] font-semibold relative transition-all duration-300 ease-in-out",
                  pathname === item.href
                    ? "text-[#F0FFC9] font-bold"
                    : "opacity-70 hover:opacity-100",
                )}
                href={item.href}
              >
                {item.label}
                {/* Smooth underline animation */}
                <span
                  className={clsx(
                    "absolute left-0 -bottom-1 w-full h-[2px] bg-[#F0FFC9] transform transition-transform duration-300 ease-in-out",
                    pathname === item.href ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Right-side Icons */}
        <div className="flex items-center gap-3">
          {/* Instagram Icon */}
          <a
            aria-label="Instagram"
            className="text-white hover:scale-110 transition-transform duration-300"
            href="https://instagram.com/macmsa_mimc/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>

          {/* Mail Icon */}
          <a
            aria-label="Email Us"
            className="text-white hover:scale-110 transition-transform duration-300"
            href="mailto:mimc@macmsa.com?subject=MIMC%20Question"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 6.75l8.25 6 8.25-6M3 8.25v7.5a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 15.75v-7.5a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 8.25z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* BUY NOW */}
          <a
            className="px-4 py-1 text-[#F0FFC9] border-2 border-[#F0FFC9] font-semibold hover:bg-[#F0FFC9] hover:text-[#570326] transition-all"
            href="/buy-tickets"
          >
            BUY NOW
          </a>

          {/* Burger Menu (visible on small screens) */}
          <button
            aria-label="Toggle Menu"
            className={clsx(
              "lg:hidden text-[#F0FFC9] focus:outline-none transition-transform duration-300",
              isOpen ? "rotate-90" : "rotate-0",
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16m-7 6h7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Collapsible Mobile Menu (visible on small screens) */}
      <div
        className={clsx(
          "lg:hidden bg-[#570326] overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-[500px] py-4" : "max-h-0",
        )}
      >
        <ul className="flex flex-col gap-4 px-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className={clsx(
                  "text-[#F0FFC9] font-medium relative transition-all duration-300 ease-in-out",
                  pathname === item.href
                    ? "text-white font-bold"
                    : "opacity-80 hover:opacity-100",
                )}
                href={item.href}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.label}
                {/* Underline for active tab */}
                <span
                  className={clsx(
                    "absolute left-0 -bottom-1 w-full h-[2px] bg-[#F0FFC9] transform transition-transform duration-300 ease-in-out",
                    pathname === item.href ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
