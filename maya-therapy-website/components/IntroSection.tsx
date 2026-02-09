import Image from "next/image";

const IntroSection = () => {
  return (
    <section className="bg-(--bg-primary) py-20 md:py-28" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Images */}
        <div className="relative flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-60 h-80 md:w-105 md:h-140">
            {/* Main Image (Maya) */}
            <div className="absolute top-0 right-6 md:right-12 w-full h-full overflow-hidden rounded-t-[220px] md:rounded-t-[300px] soft-shadow">
              <Image
                src="/images/Dr. Maya Reynolds.png"
                alt="Dr. Maya Reynolds, Licensed Clinical Psychologist in Santa Monica"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Accent Circle (Nature / Calm) */}
            <div className="absolute -bottom-8 right-0 w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden soft-shadow">
              <Image
                src="/images/coastal.jpg"
                alt="California coastal landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-xl order-2 md:order-1 text-left mt-10 md:mt-0">
          <h2 className="text-[34px] md:text-[46px] font-semibold leading-tight text-(--text-primary)">
            Hi, I’m Dr. Maya Reynolds.
          </h2>

          <p className="text-[15px] md:text-[18px] leading-relaxed font-medium text-(--text-muted)">
            I’m a licensed clinical psychologist in Santa Monica, California,
            specializing in anxiety, trauma, and burnout for high-achieving
            adults who feel emotionally overwhelmed or stuck in constant
            overthinking.
          </p>

          <p className="text-[15px] md:text-[18px] leading-relaxed font-medium text-(--text-muted)">
            My approach is warm, collaborative, and grounded in evidence-based
            therapies like CBT, EMDR, and mindfulness-based practices. Together,
            we’ll work toward greater clarity, emotional balance, and
            resilience.
          </p>

          <div className="mt-6 md:mt-8">
            <button
              className="text-(--text-primary)
                         border border-(--border-main)
                         px-7 py-3
                         text-[13px] md:text-[14px]
                         font-semibold tracking-widest
                         hover:bg-(--bg-accent)
                         hover:text-white
                         transition"
            >
              BOOK A CONSULTATION →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
