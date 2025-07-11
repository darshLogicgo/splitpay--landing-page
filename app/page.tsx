"use client";

import {
  Check,
  CreditCard,
  DollarSign,
  Receipt,
  Share2,
  Star,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Avatar1 from "../public/avatar1.webp";
import Avatar2 from "../public/avatar2.webp";
import Avatar3 from "../public/avatar3.webp";
import Avatar4 from "../public/avatar4.webp";
import Avatar5 from "../public/avatar5.jpg";
import Avatar6 from "../public/avatar3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { faqQuestions } from "@/data/faq-questions";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import playStore from "../public/playstoreButton.webp";
import appStore from "../public/appleButton.webp";
import { useRouter, useSearchParams } from "next/navigation";

export const reviews = [
  {
    name: "Lucas Meyer",
    location: "Zurich, Switzerland",
    image: Avatar1.src,
    alt: "User 1",
    fallback: "LM",
    borderColor: "border-cyan-200",
    message:
      "“SplitPay made our Goa trip super simple. It kept everything organized and helped us avoid awkward money discussions.”",
  },
  {
    name: "Chloe Martin",
    location: "Paris, France",
    image: Avatar2.src,
    alt: "User 2",
    fallback: "CM",
    borderColor: "border-purple-200",
    message:
      "“We used SplitPay during our group vacation and it was incredibly helpful. Everyone could track their expenses easily.”",
  },
  {
    name: "Diego Ramos",
    location: "Madrid, Spain",
    image: Avatar3.src,
    alt: "User 3",
    fallback: "DR",
    borderColor: "border-pink-200",
    message:
      "“It’s the best app we’ve used for expense splitting. Very clean interface and all balances were clear from the start.”",
  },
  {
    name: "Emily Chen",
    location: "Singapore",
    image: Avatar4.src,
    alt: "User 4",
    fallback: "EC",
    borderColor: "border-blue-200",
    message:
      "“Great experience with SplitPay! Our team trip was smooth and no one had to worry about paying extra or less.”",
  },
  {
    name: "Jake Wilson",
    location: "New York, USA",
    image: Avatar5.src,
    alt: "User 5",
    fallback: "JW",
    borderColor: "border-green-200",
    message:
      "“SplitPay made everything seamless. From tracking to settling bills, everything worked just the way we wanted it to.”",
  },
  {
    name: "Lina Hoffmann",
    location: "Berlin, Germany",
    image: Avatar6.src,
    alt: "User 6",
    fallback: "LH",
    borderColor: "border-yellow-200",
    message:
      "“We’ve been using SplitPay regularly. It’s reliable, accurate, and makes cost sharing in groups so effortless.”",
  },
];

export default function SplitPayLanding() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (target) {
      const el = document.getElementById(target);
      if (el) {
        // 🔥 Instant jump without scroll animation
        el.scrollIntoView(); 
        sessionStorage.removeItem("scrollTarget");
      }
    }
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-6 sm:py-14 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div data-aos="fade-up" data-aos-delay="0"></div>

                <div data-aos="fade-up" data-aos-delay="100">
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Effortlessly track and manage group
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                      Expenses
                    </span>
                  </h1>
                </div>

                <div data-aos="fade-up" data-aos-delay="200">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    The easiest way to manage your income and expenses, track
                    spending, and take control of your financial life.
                  </p>
                </div>
              </div>

              <div
                className="flex flex-row gap-4 mb-8"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=daily.expensemanager.financemanager&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[160px] h-[48px] overflow-hidden rounded-[9999px] group bg-black"
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
                  className="relative w-[160px] h-[48px] overflow-hidden rounded-[9999px] group bg-black"
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

              <div className="flex items-center space-x-6">
                {/* Avatar Group: Animate from left */}
                <div
                  className="flex -space-x-2"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  <Avatar className="border-2 border-white h-12 w-12 ">
                    <AvatarImage src={Avatar1?.src} alt="User 1" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white h-12 w-12">
                    <AvatarImage src={Avatar2?.src} alt="User 2" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white h-12 w-12">
                    <AvatarImage src={Avatar3?.src} alt="User 3" />
                    <AvatarFallback>U3</AvatarFallback>
                  </Avatar>
                </div>

                {/* Rating + Text: Animate from right */}
                <div data-aos="fade-left" data-aos-delay="600">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="font-semibold text-gray-900 ml-2">
                      4.9
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">50k+ Happy Users</p>
                </div>
              </div>
            </div>

            {/* Main Card with animated images */}
            <div
              className="relative mx-auto w-full max-w-xs sm:max-w-md mt-10 lg:mt-0"
              data-aos="zoom-in"
            >
              {/* Main Card (existing) */}
              <div className="relative z-10">
                <Card className="bg-white/90 backdrop-blur-sm border-cyan-100 shadow-2xl w-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                          Trip to Bali
                        </h3>
                        <Badge className="bg-green-100 text-green-700 text-xs sm:text-sm">
                          Settled
                        </Badge>
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 gap-2 sm:gap-40 bg-cyan-50 rounded-lg">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xs sm:text-sm font-semibold">
                              J
                            </div>
                            <span className="text-gray-700 text-sm sm:text-base">
                              John paid for dinner
                            </span>
                          </div>
                          <span className="font-semibold text-gray-900 text-sm sm:text-base">
                            $120.00
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 gap-2 sm:gap-40 bg-cyan-50 rounded-lg">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs sm:text-sm font-semibold">
                              S
                            </div>
                            <span className="text-gray-700 text-sm sm:text-base">
                              Sarah paid for hotel
                            </span>
                          </div>
                          <span className="font-semibold text-gray-900 text-sm sm:text-base">
                            $300.00
                          </span>
                        </div>
                      </div>
                      <div className="pt-2 sm:pt-3 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 text-sm sm:text-base">
                            You owe Sarah:
                          </span>
                          <span className="font-bold text-cyan-600 text-base sm:text-lg">
                            $60.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              {/* Animated Placeholder Images */}
              {[
                {
                  top: "-2rem",
                  right: "-2rem",
                  size: "w-20 h-20",
                  from: "from-cyan-200",
                  to: "to-blue-300",
                  opacity: "opacity-60",
                  delay: 600,
                },
                {
                  bottom: "-2.5rem",
                  left: "-2.5rem",
                  size: "w-32 h-32",
                  from: "from-blue-200",
                  to: "to-purple-300",
                  opacity: "opacity-40",
                  delay: 800,
                },
              ].map((pos, idx) => (
                <div
                  key={idx}
                  className={`absolute hidden md:block up-down-animation rounded-full bg-gradient-to-br ${pos.size} ${pos.from} ${pos.to} ${pos.opacity}`}
                  style={{ ...pos, zIndex: 1 }}
                  data-aos="zoom-in"
                  data-aos-delay={pos.delay}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-10 sm:py-14 md:py-20 px-4 bg-white/50 scroll-mt-10"
      >
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16" data-aos="fade-up">
            <Badge className="bg-cyan-100 text-cyan-700">Features</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Everything you need to split expenses
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make group expense management simple
              and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="border-cyan-100 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Track Income & Expenses
                </h3>
                <p className="text-gray-600">
                  Add and manage your income and expense entries daily with
                  clear transaction history.
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-cyan-100 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Receipt className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Filter & Analyze
                </h3>
                <p className="text-gray-600">
                  Filter transactions by date and category to get precise
                  reports anytime.
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-cyan-100 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Visual Reports
                </h3>
                <p className="text-gray-600">
                  View your spending distribution with informative charts and
                  category-wise reports.
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-cyan-100 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Debt & Savings Insights
                </h3>
                <p className="text-gray-600">
                  Calculate your debt and savings automatically based on your
                  income and expenses.
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-cyan-100 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Multiple Currencies Supported
                </h3>
                <p className="text-gray-600">
                  Track income and expenses in multiple currencies — ideal for
                  travelers and freelancers.
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-cyan-100 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Secure Your Data
                </h3>
                <p className="text-gray-600">
                  Protect your financial data with PIN or Pattern Lock.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-10 sm:py-14 md:py-20 px-4 scroll-mt-10"
      >
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16" data-aos="fade-up">
            <Badge className="bg-blue-100 text-blue-700">How It Works</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Split expenses in 3 simple steps
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started with SplitPay is quick and easy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="text-center space-y-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Create a Group
              </h3>
              <p className="text-gray-600">
                Start by creating a group and inviting your friends, roommates,
                or travel companions.
              </p>
            </div>

            <div
              className="text-center space-y-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Add Expenses
              </h3>
              <p className="text-gray-600">
                Add expenses by taking photos of receipts or entering them
                manually. Choose how to split.
              </p>
            </div>

            <div
              className="text-center space-y-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Settle Up</h3>
              <p className="text-gray-600">
                See who owes what and settle up instantly with integrated
                payment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section
        id="reviews"
        className="py-10 sm:py-14 md:py-20 scroll-mt-10 bg-white "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What Users Say
              </h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted by thousands of users worldwide
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400" className="text-center">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              slidesPerGroup={1}
              autoplay={{
                delay: 1000,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                },
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                },
              }}
              className="pb-0 sm:pb-6"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <Card className="w-full max-w-[400px] mx-auto h-[200px] p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
                    {/* Header: Avatar + Name + Location + Stars */}
                    <div className="flex justify-between items-start mb-0">
                      {/* Left: Avatar + Name + Location */}
                      <div className="flex items-center">
                        <Avatar
                          className={`w-12 h-12 mr-3 ${review.borderColor}`}
                        >
                          <AvatarImage src={review.image} alt={review.alt} />
                          <AvatarFallback>{review.fallback}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <h4 className="font-semibold text-gray-900">
                            {review.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {review.location}
                          </p>
                        </div>
                      </div>
                      {/* Right: Stars aligned to top */}
                      <div className="flex items-center mt-1 space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-3 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                    {/* Comment */}
                    <p className="text-gray-700 italic text-sm leading-relaxed line-clamp-4">
                      {review.message}
                    </p>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Pagination Dots (if needed, can add Swiper pagination here) */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-10 sm:py-14 md:py-20 bg-gray-50 scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading with animation */}
          <div className="text-center mb-16">
            <div data-aos="fade-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-base sm:text-xl text-gray-600">
                Got questions? We've got answers.
              </p>
            </div>
          </div>

          {/* FAQs with animation */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqQuestions.map((faq, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-lg border border-gray-200 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
