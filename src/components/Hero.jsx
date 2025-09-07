// Hero Component
function Hero() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-gray-50 to-white relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
            Hi, I'm <span className="text-blue-600">Shaheen</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-gray-800">Flutter Developer</span> specializing in building scalable mobile applications with clean, maintainable code
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 font-semibold"
            >
              View Projects
            </a>
            <a 
              href="#resume" 
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
 export default Hero; 