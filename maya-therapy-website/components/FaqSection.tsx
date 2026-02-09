"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "Do you accept insurance?",
    a: "I am currently an out-of-network provider and do not accept insurance directly. However, I can provide superbills upon request so you may seek reimbursement from your insurance company.",
  },
  {
    q: "Do you offer online therapy?",
    a: "Yes. I offer secure telehealth sessions for clients located anywhere in California, in addition to in-person therapy at my Santa Monica office.",
  },
  {
    q: "What issues do you specialize in?",
    a: "I specialize in anxiety, trauma, burnout, perfectionism, and chronic stress, especially for high-achieving professionals and adults who feel emotionally overwhelmed.",
  },
  {
    q: "What therapy approaches do you use?",
    a: "My work integrates evidence-based methods including Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    q: "How do I get started?",
    a: "You can begin by scheduling a free consultation through the contact form. We’ll discuss your goals and determine whether we’re a good fit.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-(--bg-secondary) py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
        {/* Image */}
        <div className="flex justify-center order-1">
          <div className="relative w-52 h-72 md:w-100 md:h-160 overflow-hidden rounded-t-[180px] md:rounded-t-[260px] soft-shadow">
            <Image
              src="/images/faq-main.jpg"
              alt="Calm therapy space in Santa Monica"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-2">
          {/* Title */}
          <h2 className="text-[30px] md:text-[46px] font-semibold text-(--text-primary) mb-2">
            Frequently Asked Questions
          </h2>

          {/* Divider */}
          <div className="w-full h-px bg-(--border-main) mt-6 md:mt-8" />

          {/* FAQ Items */}
          <div className="flex flex-col divide-y divide-(--border-main) mt-4">
            {faqs.map((item, index) => {
              const isOpen = open === index;

              return (
                <div key={index} className="py-5 md:py-6">
                  {/* Question */}
                  <button
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="w-full flex items-start gap-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    {/* Icon */}
                    <span
                      className="relative w-6 h-6 mt-2 shrink-0"
                      style={{ perspective: "600px" }}
                    >
                      {/* Horizontal */}
                      <span className="absolute top-1/2 left-0 w-full h-px bg-(--text-primary)" />

                      {/* Vertical */}
                      <span
                        className={`absolute left-1/2 top-0 h-full w-px bg-(--text-primary) transition-transform duration-300 origin-center ${
                          isOpen ? "rotate-y-90" : "rotate-y-0"
                        }`}
                        style={{ transformStyle: "preserve-3d" }}
                      />
                    </span>

                    {/* Text */}
                    <span className="text-[18px] md:text-[26px] font-medium text-(--text-primary) group-hover:text-(--bg-accent) transition">
                      {item.q}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 mt-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-[14px] md:text-[15px] leading-relaxed text-(--text-muted) max-w-xl">
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
