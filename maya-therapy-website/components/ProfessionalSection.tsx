"use client";

import { useState } from "react";

const items = [
  {
    title: "Education",
    content:
      "Doctor of Psychology (PsyD) in Clinical Psychology from an APA-accredited graduate program. Advanced training in adult psychotherapy, trauma treatment, and evidence-based clinical practice.",
  },
  {
    title: "Licensure",
    content:
      "Licensed Clinical Psychologist in the state of California. Licensed to provide in-person therapy in Santa Monica and secure telehealth services statewide.",
  },
  {
    title: "Certifications & Training",
    content:
      "Advanced training in Cognitive Behavioral Therapy (CBT), EMDR for trauma treatment, mindfulness-based interventions, and body-oriented therapeutic techniques. Ongoing professional development in trauma-informed care.",
  },
];

const ProfessionalSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="credentials"
      className="bg-(--bg-primary) min-h-[50vh] flex items-center py-20 md:py-28"
    >
      <div className="max-w-2xl mx-auto px-6 md:px-8 w-full">
        {/* Title */}
        <h2 className="text-[30px] md:text-[42px] font-semibold text-center text-(--text-primary) mb-6">
          Professional Background
        </h2>

        {/* Top Divider */}
        <div className="w-full h-px bg-(--border-main)" />

        {/* Items */}
        <div className="flex flex-col divide-y divide-(--border-main)">
          {items.map((item, index) => {
            const isOpen = open === index;

            return (
              <div key={index} className="py-5 md:py-6">
                {/* Header */}
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-[18px] md:text-[22px] font-medium text-(--text-primary) group-hover:text-(--bg-accent) transition">
                    {item.title}
                  </span>

                  {/* Plus / Minus */}
                  <span
                    className="relative w-5 h-5 shrink-0"
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
                </button>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="max-w-xl mx-auto text-[14px] md:text-[16px] text-(--text-muted) font-medium leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Divider */}
        <div className="w-full h-px bg-(--border-main)" />
      </div>
    </section>
  );
};

export default ProfessionalSection;
