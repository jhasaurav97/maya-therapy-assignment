const Footer = () => {
  return (
    <footer className="w-full">

      {/* Main Footer */}
      <div className="bg-(--bg-primary) py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between gap-16 text-(--text-primary)">

          {/* Left */}
          <div className="flex flex-col gap-3 text-[15px] md:text-[16px] font-medium">

            <h3 className="text-[26px] md:text-[34px] font-semibold mb-2">
              Dr. Maya Reynolds, PsyD
            </h3>

            <p>123th Street 45 W</p>
            <p>Santa Monica, CA 90401</p>

            <a
              href="mailto:contact@mayareynoldspsych.com"
              className="underline mt-4"
            >
              contact@mayareynoldspsych.com
            </a>

            <a href="tel:13105550198" className="underline">
              (310) 555-0198
            </a>

          </div>

          {/* Right */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-32">

            {/* Hours */}
            <div className="flex flex-col gap-2 text-[15px] md:text-[16px] font-medium md:items-center">

              <h4 className="text-[22px] md:text-[26px] font-semibold mb-2">
                Hours
              </h4>

              <p>Monday – Friday</p>
              <p>9:00 AM – 6:00 PM</p>

            </div>

            {/* Links */}
            <div className="flex flex-col gap-2 text-[15px] md:text-[16px] font-medium md:items-center">

              <h4 className="text-[22px] md:text-[26px] font-semibold mb-2">
                Explore
              </h4>

              <a href="/" className="underline">
                Home
              </a>

              <a href="#services" className="underline">
                Services
              </a>

              <a href="#about" className="underline">
                About
              </a>

              <a href="#contact" className="underline">
                Contact
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-(--bg-secondary) pt-8 text-center text-(--text-primary)">

        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-4">

          {/* Policies */}
          <div className="flex flex-wrap gap-4 justify-center text-[14px] font-medium">

            <a href="#" className="underline">
              Privacy Policy
            </a>

            <a href="#" className="underline">
              Good Faith Estimate
            </a>

            <a href="#" className="underline">
              Terms & Conditions
            </a>

            <a href="#" className="underline">
              Disclaimer
            </a>

          </div>

          {/* Credits */}
          <p className="text-[14px] text-(--text-muted)">
            Website designed for Dr. Maya Reynolds • Santa Monica, CA
          </p>

          {/* Copyright */}
          <p className="pt-6 pb-4 text-[14px] font-medium text-(--text-muted)">
            © {new Date().getFullYear()} Maya Reynolds Psychology Practice, LLC. All
            rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
