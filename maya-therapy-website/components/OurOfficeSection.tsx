import Image from "next/image";

const OurOfficeSection = () => {
  return (
    <section id="office" className="bg-(--bg-dark) py-20 md:py-28 border-b border-(--bg-secondary)">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[32px] md:text-[46px] font-semibold text-(--text-light)">
            A Calm Space for Healing
          </h2>

          <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-(--text-light)">
            My Santa Monica office is designed to feel quiet, private, and
            grounding. With natural light, comfortable seating, and a peaceful
            atmosphere, it offers a space where you can slow down, feel safe,
            and focus on your healing.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Image 1 */}
          <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-xl soft-shadow">
            <Image
              src="/images/office1.jpeg"
              alt="Therapy office in Santa Monica with natural light"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-xl soft-shadow">
            <Image
              src="/images/office2.jpeg"
              alt="Comfortable private therapy room in Santa Monica"
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6 text-(--text-light)">
            <h3 className="text-[22px] md:text-[26px] font-semibold">
              Visit Me In Person
            </h3>

            <p className="text-[15px] md:text-[16px] leading-relaxed text-(--text-light)">
              I offer in-person therapy sessions from my Santa Monica office,
              along with secure telehealth services for clients across
              California.
            </p>

            <div className="flex flex-col gap-2 text-[15px] md:text-[16px] font-medium">
              <p>
                📍 <span className="font-semibold">Location:</span> 123th Street
                45 W, Santa Monica, CA 90401
              </p>

              <p>
                🛋️ <span className="font-semibold">Environment:</span> Private,
                quiet, and thoughtfully designed
              </p>

              <p>
                🔒 <span className="font-semibold">Privacy:</span> Fully
                confidential and discreet setting
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOfficeSection;
