const CtaSection = () => {
  return (
    <section
      id="contact"
      className="bg-(--bg-accent) min-h-[50vh] flex items-center justify-center text-center px-6 py-24"
    >
      <div className="max-w-3xl flex flex-col items-center gap-6">
        {/* Title */}
        <h2 className="text-[32px] md:text-[44px] font-semibold text-white">
          Start Your Healing Journey Today
        </h2>

        {/* Text */}
        <p className="max-w-2xl mx-auto text-[16px] md:text-[18px] leading-relaxed font-medium text-white/90">
          If you’re feeling overwhelmed by anxiety, trauma, or burnout, you
          don’t have to navigate it alone. Schedule a consultation with Dr. Maya
          Reynolds in Santa Monica and take the first step toward greater
          balance and resilience.
        </p>

        {/* Button */}
        <button
          className="
            mt-8
            border border-white
            px-8 py-3
            text-[14px] font-semibold tracking-widest
            text-white
            hover:bg-white
            hover:text-(--bg-dark)
            transition
          "
        >
          BOOK A CONSULTATION →
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
