import Image from 'next/image';

type Specialty = {
    title: string;
    description: string;
    image: string;
}

const Specialities: Specialty[] = [
  {
    title: "Self-Esteem",
    description:
      "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image: "/images/spec1.png",
  },
  {
    title: "Relationships",
    description:
      "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image: "/images/spec2.png",
  },
  {
    title: "Burnout",
    description:
      "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image: "/images/spec3.png",
  },
];

const SpecialtiesSection = () => {
  return (
    <section className="bg-[#fbf6f1] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Title */}
        <h2 className="text-center text-[32px] md:text-[48px] font-semibold text-[#223614] mb-12 md:mb-20">
          My Specialties
        </h2>
        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Specialities.map((item, index) => (
            <div
              className="border border-[#223614] bg-[#e9e5dd] flex flex-col justify-between px-6 md:px-8 pt-6 md:pt-8 pb-8 md:pb-10"
              key={index}
            >
              {/* title */}
              <h3 className="text-xl md:text-[22px] font-semibold text-[#223614]">
                {item.title}
              </h3>
              {/* description */}
              <p className="mt-4 text-sm md:text-[15px] font-medium leading-relaxed text-[#223614]">
                {item.description}
                  </p>
                  {/* Image */}
                  <div className='mt-8 md:mt-10 flex justify-center'>
                  <div className="relative w-40 h-40 md:w-55 md:h-55 rounded-full overflow-hidden">
                      <Image 
                          src={item.image}
                          alt={item.title}
                          fill
                          className='object-cover'
                      />
                  </div>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialtiesSection;
