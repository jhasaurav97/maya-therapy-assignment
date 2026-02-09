import Image from "next/image";

const IntroSection = () => {
  return (
    <section className="bg-[#e5e0da] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Images */}
        <div className="relative flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-60 h-85 md:w-105 md:h-140">
            {/* Main image */}
            <div className="absolute top-0 right-6 md:right-12 w-full h-full overflow-hidden rounded-t-[200px] md:rounded-t-[300px]">
              <Image
                src="/images/intro-main.png"
                alt="Therapy flowers"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Circle image */}
            <div className="absolute -bottom-8 right-0 w-28 h-28 md:w-55 md:h-55 rounded-full overflow-hidden">
              <Image
                src="/images/intro-circle.png"
                alt="White flowers"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
        {/* Left content */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-xl order-2 md:order-1 text-left mt-12 pl-8">
          <h2 className="text-[38px] md:text-[46px] font-semibold leading-tight text-[#223614]">
            Hi, I’m Lilac.
          </h2>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#223614] font-medium">
            I'm committed to providing a safe and supportive environment where
            we can explore your thoughts, feelings, and behaviors. With empathy
            and guidance, we'll work together to navigate the challenges life
            throws your way.
          </p>
          <div className="w-full text-center mt-8">
            <button className="text-[#223614] border border-[#223614] px-7 py-3 text-[14px] font-bold tracking-wider hover:bg-[#223614] hover:text-white transition">
              LET&apos;S CHAT →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
