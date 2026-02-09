import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-[#e9e5dd]">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 min-h-150">
        {/* Image */}
        <div className="relative h-70 md:h-auto order-1 md:order-2">
          <Image
            src="/images/hero02.png"
            alt="Lifestyle"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-between order-2 md:order-1">
          {/* Text */}
          <div className="px-6 md:px-16 pt-6 pb-48 md:py-24 text-[#223614]">
            <h2 className="text-[34px] md:text-[45px] font-semibold">
              Live a fulfilling life.
            </h2>
            <p className="mt-8 font-medium text-[17px] md:text-[19px] leading-relaxed max-w-xl">
              Life can be challenging—especially when you're trying to balance
              your personal and professional life.
            </p>
            <p className="mt-4 font-medium text-[17px] md:text-[19px] leading-relaxed max-w-xl">
              It's easy to feel like you're alone in facing these challenges,
              but I want you to know that I'm here to help.
            </p>
          </div>
          {/* CTA bar */}
          <div className="border-t border-[#223614] text-center py-5 text-[#223614] hover:bg-[#223614] hover:text-white transition">
            <button className="text-[15px] font-semibold tracking-widest">
              GET IN TOUCH →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;