import Image from "next/image";

type Specialty = {
  title: string;
  description: string;
  image: string;
};

const specialties: Specialty[] = [
  {
    title: "Anxiety & Overthinking",
    description:
      "Support for chronic worry, panic, emotional tension, and constant overthinking.",
    image: "/images/anxiety.jpg",
  },
  {
    title: "Trauma & Emotional Healing",
    description:
      "EMDR-informed and trauma-focused therapy to help you feel safe, grounded, and regulated.",
    image: "/images/trauma.jpg",
  },
  {
    title: "Burnout & High-Achiever Stress",
    description:
      "Help for professionals facing exhaustion, perfectionism, and chronic pressure.",
    image: "/images/burnout.jpg",
  },
];

const SpecialtiesSection = () => {
  return (
    <section id="services" className="bg-(--bg-primary) py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Title */}
        <h2 className="text-center text-[32px] md:text-[48px] font-semibold text-(--text-primary) mb-12 md:mb-20">
          Areas of Support
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="
                border
                border-(--border-main)
                bg-(--bg-secondary)
                flex
                flex-col
                justify-between
                px-6
                md:px-8
                pt-6
                md:pt-8
                pb-8
                md:pb-10
                soft-shadow
                hover:-translate-y-1
                transition
              "
            >
              {/* Title */}
              <h3 className="text-[20px] md:text-[22px] font-semibold text-(--text-primary)">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-(--text-muted)">
                {item.description}
              </p>

              {/* Image */}
              <div className="mt-8 md:mt-10 flex justify-center">
                <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
