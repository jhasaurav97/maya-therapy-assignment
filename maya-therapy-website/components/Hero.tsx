import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-(--bg-primary) pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-16 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <div className="rounded-t-[220px] md:rounded-t-[320px] overflow-hidden w-52 h-80 md:w-105 md:h-140 soft-shadow">
            <Image
              src="/images/office1.jpeg"
              alt="Dr. Maya Reynolds therapy office in Santa Monica"
              width={420}
              height={560}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="text-(--text-primary) px-2 md:px-8 flex flex-col items-center md:items-start text-center md:text-left">
          {/* H1 - SEO Optimized */}
          <h1 className="text-[36px] md:text-[60px] font-semibold leading-tight tracking-tight">
            Anxiety & Trauma Therapist
            <br className="hidden md:block" />
            in Santa Monica, CA
          </h1>

          {/* Subheading */}
          <p className="text-[15px] md:text-[18px] mt-6 text-(--text-muted) max-w-xl leading-relaxed">
            Compassionate, evidence-based therapy for adults feeling
            overwhelmed, burned out, or emotionally exhausted. Offering
            in-person sessions in Santa Monica and secure telehealth across
            California.
          </p>

          {/* CTA */}
          <button
            className="
              mt-10
              px-8
              py-4
              border
              border-(--border-main)
              text-[14px]
              font-semibold
              tracking-widest
              text-(--text-primary)
              hover:bg-(--bg-accent)
              hover:text-white
              transition
            "
          >
            SCHEDULE A FREE CONSULT →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
