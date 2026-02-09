const CtaSection = () => {
  return (
    <section className="bg-[#7e7b46] min-h-[50vh] flex items-center justify-center text-center px-8 py-24">
      <div className="max-w-175 flex flex-col items-center gap-6">
        {/* Title */}
        <h2 className="text-[38px] md:text-[44px] font-semibold text-white">
          Get started today.
        </h2>
        {/* Text */}
        <p className="max-w-130 mx-auto text-[18px] leading-loose font-normal text-white">
          Ready to take the first step towards a happier, healthier you? Contact
          me to book your first session. I look forward to starting this
          therapeutic journey with you.
        </p>
        {/* Button */}
        <button className="mt-8 border border-white px-8 py-3 text-[14px] font-semibold tracking-wide text-white hover:bg-white hover:text-[#7e7b46] transition">
          GET IN TOUCH →
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
