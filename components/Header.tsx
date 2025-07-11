"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn } from "lucide-react";
import SplitPayicon from "../public/splitpay-icon.webp";
import playStore from "../public/header-google-icon.webp";
import appStore from "../public/header-app-store-icon.webp";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navigation = [
    { name: "Features", href: "#features", isExternal: false },
    { name: "How it works", href: "#how-it-works", isExternal: false },
    { name: "Reviews", href: "#reviews", isExternal: false },
    { name: "FAQ", href: "#faq", isExternal: false },
    { name: "Blogs", href: "/blogs", isExternal: true },
  ];

  // const scrollOrNavigate = (href: string, isExternal: boolean) => {
  //   if (isExternal) {
  //     router.push(href);
  //   } else {
  //     const id = href.replace("#", "");
  //     if (pathname !== "/") {
  //       router.push("/" + href);
  //       return;
  //     }
  //     const section = document.getElementById(id);
  //     if (section) {
  //       section.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  //   setIsMenuOpen(false);
  // };

  const scrollOrNavigate = (href: string, isExternal: boolean) => {
    const id = href.replace("#", "");
  
    if (isExternal) {
      router.push(href);
      setIsMenuOpen(false);
      return;
    }
  
    if (pathname !== "/") {
      // Save target in sessionStorage
      sessionStorage.setItem("scrollTarget", id);
      router.push("/");
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView(); // 🔥 No smooth scrolling
      }
    }
  
    setIsMenuOpen(false);
  };
  
  return (
    <header className=" bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-0 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center">
              <img
                src={SplitPayicon.src}
                alt="SplitPay Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-base sm:text-xl font-bold text-gray-900">
                SplitPay
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollOrNavigate(item.href, item.isExternal)}
                className="text-gray-600 hover:opacity-75 px-2 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://play.google.com/store/apps/details?id=daily.expensemanager.financemanager&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={playStore.src}
                  alt="Get it on Google Play"
                  className="h-8 w-auto"
                />
              </a>

              <a
                href="https://apps.apple.com/in/app/splitpay-group-expenses/id6741799224?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={appStore.src}
                  alt="Download on the App Store"
                  className="h-8 w-auto"
                />
              </a>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 border-t border-gray-100 pt-4">
            <div className="space-y-2 px-2 pb-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollOrNavigate(item.href, item.isExternal)}
                  className="block w-full text-left text-sm text-gray-600 hover:text-cyan-600 px-3 py-2"
                >
                  {item.name}
                </button>
              ))}

              {/* Login and Store Buttons */}
              <div className="pt-4 px-3 flex flex-wrap gap-3">
                {/* Google Play Store */}
                <a
                  href="https://play.google.com/store/apps/details?id=daily.expensemanager.financemanager&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={playStore.src}
                    alt="Get it on Google Play"
                    className="h-10 w-auto"
                  />
                </a>

                {/* Apple App Store */}
                <a
                  href="https://apps.apple.com/in/app/splitpay-group-expenses/id6741799224?l=en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={appStore.src}
                    alt="Download on the App Store"
                    className="h-10 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
