import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="bg-(--bg-secondary)">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 min-h-150">
        {/* Image */}
        <div className="relative h-80 md:h-auto order-1 md:order-2">
          <Image
            src="/images/Dr. Maya Reynolds.png"
            alt="Dr. Maya Reynolds, Licensed Clinical Psychologist in Santa Monica"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between order-2 md:order-1">
          {/* Text */}
          <div className="px-6 md:px-16 py-16 text-(--text-primary)">
            <h2 className="text-[34px] md:text-[46px] font-semibold leading-tight">
              Meet Dr. Maya Reynolds, PsyD
            </h2>

            <p className="mt-8 text-[16px] md:text-[18px] leading-relaxed max-w-xl text-(--text-muted)">
              I’m a licensed clinical psychologist based in Santa Monica,
              specializing in anxiety, trauma, and burnout in high-achieving
              adults who feel overwhelmed, emotionally drained, or stuck in
              overthinking.
            </p>

            <p className="mt-5 text-[16px] md:text-[18px] leading-relaxed max-w-xl text-(--text-muted)">
              My approach is warm, collaborative, and grounded. I integrate
              evidence-based methods including CBT, EMDR, mindfulness, and
              body-oriented techniques to help you feel more regulated,
              confident, and connected to yourself.
            </p>

            <p className="mt-5 text-[16px] md:text-[18px] leading-relaxed max-w-xl text-(--text-muted)">
              Whether you’re navigating anxiety, unresolved trauma, or chronic
              professional stress, therapy can become a space to slow down,
              restore balance, and build resilience over time.
            </p>
          </div>

          {/* CTA Bar */}
          <div
            className="
              border-t
              border-(--border-main)
              text-center
              py-6
              text-(--text-primary)
              hover:bg-(--bg-accent)
              hover:text-white
              transition
            "
          >
            <button className="text-[14px] font-semibold tracking-widest">
              BOOK A CONSULTATION →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
