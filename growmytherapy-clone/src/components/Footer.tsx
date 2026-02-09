
const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main footer */}
      <div className="bg-[#fbf6f1] py-24">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between gap-16 text-[#223614]">
          {/* Left */}
          <div className="flex flex-col gap-4 text-[19px] font-semibold">
            <h3 className="text-[42px] font-semibold mb-2">Lilac Template</h3>
            <p>123 Example Road</p>
            <p>Minneapolis, MN</p>
            <a href="mailto:email@example.com" className="underline mt-4">
              email@example.com
            </a>
            <a href="tel:5555555555" className="underline">
              (555) 555-5555
            </a>
          </div>
          {/* Right */}
          <div className="flex flex-col md:flex-row gap-16 md:gap-48">
            <div className="flex flex-col gap-3 text-[19px] font-semibold md:items-center">
              <h4 className="text-[42px] font-semibold mb-2">Hours</h4>
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
            <div className="flex flex-col gap-3 text-[19px] font-semibold md:items-center">
              <h4 className="text-[42px] font-semibold mb-2">Find</h4>
              <a href="/" className="underline">
                Home
              </a>
              <a href="/contact" className="underline">
                Contact
              </a>
              <a href="/blog" className="underline">
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#e5e0da] pt-10 text-center text-[#223614]">
        <div className="max-w-225 mx-auto px-6 flex flex-col gap-4">
          {/* Policies */}
          <div className="flex flex-wrap gap-4 justify-center text-[#000000]">
            <a href="#" className="underline text-[16px] font-medium">
              Privacy & Cookies Policy
            </a>
            <a href="#" className="underline text-[16px] font-medium">
              Good Faith Estimate
            </a>
            <a href="#" className="underline text-[16px] font-medium">
              Website Terms & Conditions
            </a>
            <a href="#" className="underline text-[16px] font-medium">
              Disclaimer
            </a>
          </div>
          {/* Credits */}
          <p className="text-[16px]">
            Website Template Credits:{" "}
            <a href="#" className="underline text-[#000000] font-medium">
              Go Bloom Creative
            </a>
          </p>
          {/* Copyrights */}
          <p className="pt-12 pb-4 text-[16px] font-medium">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
