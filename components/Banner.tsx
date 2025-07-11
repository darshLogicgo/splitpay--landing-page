import { BookOpen } from "lucide-react";
import CommonTitle from "./CommonTitle";

const Banner = ({ title = "", description = "" }) => {
  return (
    <section className="pt-16 pb-12 px-4 bg-gray-50/50 text-center relative ">
      {/* Icon with notification dot */}
      <div className="inline-flex items-center justify-center mb-8" data-aos="fade-up">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl flex items-center justify-center border border-white/60 shadow-lg shadow-blue-100/50">
            <BookOpen className="text-blue-600 w-11 h-11" />
          </div>
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      <CommonTitle title={title} description={description} />
    </section>
  );
};

export default Banner;
