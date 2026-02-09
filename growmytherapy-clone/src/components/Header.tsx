"use client";

import { useEffect, useState } from "react";

const Header = () => {
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
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0  w-full bg-[#fbf6f1] z-50 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          {/* Mobile button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl text-[#223614]"
          >
            ☰
          </button>
          {/* Logo */}
          <h1 className="text-[18px] md:text-[34px] text-[#223614] font-semibold ">
            Lilac Template
          </h1>

          {/* Desktop */}
          <nav className="hidden md:flex gap-12 text-[18px] text-[#223614] font-semibold">
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-[#fbf6f1] z-999 flex flex-col">
          {/* Top */}
          <div className="flex justify-between items-center px-8 py-5">
            <button onClick={() => setOpen(false)} className="text-2xl">
              ✕
            </button>
            <p className="text-[17px] text-[#223614] font-semibold">
              Lilac Template
            </p>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col justify-center items-center gap-8 text-[#223614] text-[34px] font-semibold">
            <a onClick={() => setOpen(false)}>Blog</a>
            <a onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
