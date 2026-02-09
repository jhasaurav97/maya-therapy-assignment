import Image from "next/image";

const SupportSection = () => {
  return (
    <section className="bg-(--bg-secondary)" id="support">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 min-h-162.5">
        {/* Left Image */}
        <div className="relative h-64 md:h-auto order-1">
          <Image
            src="/images/office2.jpeg"
            alt="Peaceful therapy space in Santa Monica"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-between order-2">
          {/* Text */}
          <div className="px-6 md:px-16 py-12 md:py-24 text-(--text-primary)">
            <h2 className="text-[28px] md:text-[46px] font-semibold leading-tight max-w-xl">
              You don’t have to carry
              <br />
              this alone.
            </h2>

            <p className="mt-6 text-[15px] md:text-[18px] font-medium text-(--text-muted) max-w-xl">
              Many of my clients come to therapy feeling “functional” on the
              outside, while struggling internally with:
            </p>

            {/* List */}
            <ul className="mt-6 space-y-3 list-disc list-inside text-[15px] md:text-[17px] font-medium max-w-xl text-(--text-primary)">
              <li>Chronic anxiety and constant overthinking</li>

              <li>Difficulty relaxing or sleeping</li>

              <li>Lingering effects of past trauma</li>

              <li>Emotional exhaustion and burnout</li>

              <li>Feeling disconnected from yourself</li>
            </ul>

            <p className="mt-6 text-[15px] md:text-[18px] font-medium leading-relaxed max-w-xl text-(--text-muted)">
              Through evidence-based, compassionate therapy, we’ll work together
              to help you feel more grounded, resilient, and confident in your
              daily life.
            </p>
          </div>

          {/* CTA Bar */}
          <div
            className="border-t border-(--border-main) text-center py-5
                       text-(--text-primary)
                       hover:bg-(--bg-accent)
                       hover:text-white transition"
          >
            <button className="text-[12px] font-semibold tracking-widest">
              START YOUR HEALING JOURNEY →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
