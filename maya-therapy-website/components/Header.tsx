"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 w-full bg-(--bg-secondary) z-50 transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl text-(--text-primary)"
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Logo */}
          <h1 className="text-[16px] md:text-[28px] text-(--text-primary) font-semibold tracking-wide">
            Dr. Maya Reynolds, PsyD
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 text-[16px] text-(--text-primary) font-medium">
            <a
              href="#services"
              className="hover:text-(--bg-accent) transition"
            >
              Services
            </a>

            <a
              href="#about"
              className="hover:text-(--bg-accent) transition"
            >
              About
            </a>

            <a
              href="#contact"
              className="hover:text-(--bg-accent) transition"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-(--bg-secondary) z-999 flex flex-col">
          {/* Top */}
          <div className="flex justify-between items-center px-6 py-4">
            <button
              onClick={() => setOpen(false)}
              className="text-2xl text-(--text-primary)"
              aria-label="Close menu"
            >
              ✕
            </button>

            <p className="text-[16px] text-(--text-primary) font-medium">
              Dr. Maya Reynolds
            </p>

            <div className="w-6" />
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col justify-center items-center gap-8 text-(--text-primary) text-[28px] font-medium">
            <a onClick={() => setOpen(false)} href="#services">
              Services
            </a>

            <a onClick={() => setOpen(false)} href="#about">
              About
            </a>

            <a onClick={() => setOpen(false)} href="#contact">
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}
