import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-[#fbf6f1] pt-28 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-4 grid grid-cols-1 md:grid-cols-2 md:gap-16 items-center md:items-start">
        {/* left Image */}
        <div className="flex justify-center md:justify-start">
          <div className="rounded-t-[200px] md:rounded-t-[300px] overflow-hidden w-44.5 h-67.25 md:w-136 md:h-200">
            <Image
              src="/images/hero01.png"
              alt="Hero"
              width={420}
              height={560}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        {/* Right content */}
        <div className="text-[#223614] md:py-12 px-8 flex flex-col items-center text-center ">
          <h1 className="text-[44px] md:text-[65px] font-semibold leading-tight md:mt-28 md:mr-14">
            Live your life <br /> in full bloom
          </h1>
          <p className="text-[17px] md:text-lg mt-6 text-[#3a4a2b] font-semibold">
            Therapy for Adults in Minneapolis, MN.
          </p>
          <button className="text-[14px] font-bold md:font-semibold mt-10 px-8 py-4 border border-[#223614] tracking-widest hover:bg-[#223614] hover:text-white transition">
            CONNECT WITH ME →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
