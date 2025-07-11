const CommonTitle = ({ title = "", description = "", className = "" }) => {
  return (
    <div
      className={`space-y-8 ${className}`}
    >
      <h1
        className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {title}
      </h1>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto" data-aos="fade-up" data-aos-delay="150"></div>
      <p
        className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {description}
      </p>
    </div>
  );
};

export default CommonTitle;
