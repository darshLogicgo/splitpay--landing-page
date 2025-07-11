import Link from "next/link";
import { Smartphone, Twitter, Linkedin, Instagram } from "lucide-react";
import SplitPayicon from "../public/splitpay-icon.webp";
import playStore from "../public/playstoreButton.webp";
import appStore from "../public/appleButton.webp";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 mr-2">
                <img src={SplitPayicon.src} alt="SplitPay Icon" />
              </div>
              <span className="text-2xl font-bold">SplitPay</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Making group expense management simple and stress-free — whether
              it's splitting dinner bills, travel costs, or shared
              subscriptions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Download App</h4>
            <div className="space-y-2 flex flex-col">
              <div
                className="flex flex-col gap-4 mb-8"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=daily.expensemanager.financemanager&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[120px] h-[38px] overflow-hidden rounded-[9999px] group bg-black"
                >
                  <img
                    src={playStore.src}
                    alt="Google Play"
                    className="absolute inset-0 w-full h-full object-contain px-6 transition-transform duration-300 group-hover:-translate-y-full"
                  />
                  <img
                    src={playStore.src}
                    alt="Google Play Hover"
                    className="absolute inset-0 w-full h-full object-contain px-6 transition-transform duration-300 translate-y-full group-hover:translate-y-0"
                  />
                </a>

                {/* App Store */}
                <a
                  href="https://apps.apple.com/in/app/splitpay-group-expenses/id6741799224?l=en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[120px] h-[38px] overflow-hidden rounded-[9999px] group bg-black"
                >
                  <img
                    src={appStore.src}
                    alt="App Store"
                    className="absolute inset-0 w-full h-full object-contain px-6 transition-transform duration-300 group-hover:-translate-y-full"
                  />
                  <img
                    src={appStore.src}
                    alt="App Store Hover"
                    className="absolute inset-0 w-full h-full object-contain px-6 transition-transform duration-300 translate-y-full group-hover:translate-y-0"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SplitPay. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
