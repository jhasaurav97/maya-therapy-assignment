import Image from 'next/image';

const SupportSection = () => {
  return (
    <section className="bg-[#cfcdd6]">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 min-h-162">
        {/* Left image */}
        <div className="relative h-65 md:h-auto order-1">
          <Image
            src="/images/support.png"
            alt="Support"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-between order-2">
          {/* Text */}
          <div className="px-6 md:px-16 py-12 md:py-24 text-[#223614]">
            <h2 className="text-[30px] md:text-[48px] font-semibold leading-tight max-w-xl">
              You don’t have to do
              <br />
              this all <em className="not-italic">alone.</em>
            </h2>
            <p className="mt-6 text-[16px] md:text-[18px] font-medium max-w-xl">
              If you are facing any of these, there’s hope:
            </p>
            {/* List */}
            <ul className="mt-6 space-y-2 list-disc list-inside text-[16px] md:text-[18px] font-medium max-w-xl">
              <li>Persistent feelings of sadness or hopelessness</li>
              <li>Trouble focusing or making decisions</li>
              <li>Difficulty maintaining relationships</li>
              <li>Feeling constantly exhausted or unmotivated</li>
              <li>A pervasive sense of being overwhelmed</li>
            </ul>
            <p className="mt-6 text-[16px] md:text-[18px] font-medium leading-relaxed max-w-xl">
              With empathy and guidance, we'll work together to navigate the
              challenges life throws your way.
            </p>
          </div>
          {/* CTA Bar */}
          <div className="border-t border-[#223614] text-center py-5 text-[#223614] hover:bg-[#223614] hover:text-white transition">
            <button className="text-[12px] font-medium tracking-widest">WORK WITH ME →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
