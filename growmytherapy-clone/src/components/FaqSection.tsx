"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "Do you take insurance?",
    a: "At this time, I do not accept insurance. I am considered an out-of-network provider and can provide superbills upon request.",
  },
  {
    q: "What are your rates?",
    a: "Individual sessions are typically 50 minutes. Please contact me directly for current session rates and availability.",
  },
  {
    q: "Do you have any openings?",
    a: "Availability may change. Please reach out through the contact form to learn about current openings.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#fbf6f1] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Image */}
        <div className="flex justify-center md:justify-start order-1">
          <div className="relative w-55 h-80 md:w-90 md:h-130 overflow-hidden rounded-t-[180px] md:rounded-t-[260px]">
            <Image
              src="/images/faq-main.png"
              alt="FAQ flowers"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right content */}
        <div className="order-2">
          {/* Title */}
          <h2 className="text-[32px] md:text-[50px] font-bold text-[#223614] mb-2">
            FAQs
          </h2>

          {/* divider */}
          <div className="w-full h-px bg-[#223614] mt-6 md:mt-10" />

          {/* FAQ items */}
          <div className="flex flex-col divide-y divide-[#223614]">
            {faqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={index} className="py-5 md:py-6">
                  {/* Question */}
                  <button
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="w-full flex items-center gap-8 text-left"
                  >
                    {/* Plus icon */}
                    <span
                      className={`relative w-7 h-7 shrink-0}`}
                      style={{ perspective: "600px" }}
                    >
                      {/* Horizontal Line (Always Visible) */}
                      <span className="absolute top-1/2 left-0 w-full h-px bg-[#223614]" />
                      {/* Vertical Line (3D Flip) */}
                      <span
                        className={`absolute left-1/2 top-0 h-full w-px bg-[#223614] transition-transform duration-300 origin-center ${isOpen ? "rotate-y-90" : "rotate-y-0"}`}
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </span>
                    {/* Question Text */}
                    <span className="text-[20px] md:text-[38px] font-semibold md:font-bold text-[#223614]">
                      {item.q}
                    </span>
                  </button>
                  {/* Answer */}
                  <div
                    className={`overflow-hidden transform-all duration-300 ${isOpen ? "max-h-40 mt-4" : "max-h-0"}`}
                  >
                    <p className="text-sm md:text-[15px] leading-relaxed text-[#223614] max-w-xl">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
