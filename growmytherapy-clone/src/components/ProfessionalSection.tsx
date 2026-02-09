"use client";

import { title } from "process";
import { useState } from "react";

const items = [
  {
    title: "Education",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Licensure",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Certifications",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
];

const ProfessionalSection = () => {
    const [open, setOpen] = useState<number | null>(null);

    return (
      <section className="bg-[#e5e0da] min-h-[50vh] flex items-center pt-18 pb-24">
        <div className="max-w-2xl mx-auto px-8 w-full">
          {/* Title */}
          <h2 className="text-[36px] font-bold text-center text-[#223614] mb-6">
            My Professional Background
          </h2>
          {/* divider */}
          <div className="w-full h-px bg-[#223614] mt-2" />
          {/* Items */}
          <div className="flex flex-col divide-y divide-[#223614]">
            {items.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={index} className="py-5">
                  <button
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="w-full flex items-center justify-between"
                  >
                    <span className="text-[20px] font-semibold text-[#223614]">
                      {item.title}
                    </span>
                    {/* Plus minus */}
                    <span className="relative w-4 h-4">
                      {/* Horizontal */}
                      <span className="absolute top-1/2 left-0 w-full h-px bg-[#223614]"></span>
                      {/* Vertical */}
                      <span
                        className={`absolute left-1/2 top-0 h-full w-px bg-[#223614] transition-transform duration-300 ${isOpen ? "rotate-y-90" : "rotate-y-0"}`}
                      ></span>
                    </span>
                  </button>
                  {/* Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-4" : "max-h-0"}`}
                  >
                    <p className="max-w-105 mx-auto text-[18px] text-[#223614] font-medium leading-[1.7]">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* divider */}
          <div className="w-full h-px bg-[#223614] mt-2" />
        </div>
      </section>
    );
}

export default ProfessionalSection;
