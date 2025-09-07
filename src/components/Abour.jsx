function About() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
          <p className="text-lg leading-relaxed text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            I'm a passionate <span className="font-semibold text-blue-600">Flutter Developer</span> with a B.Tech background. with a focus on building cross-platform 
          mobile apps with elegant UI and robust functionality. With experience in Dart, Firebase, REST APIs, and state management 
          (Provider, Riverpod, Bloc), I deliver apps that combine design and performance.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
            {["Flutter", "Dart", "Firebase", "REST APIs", "Riverpod", "Bloc", "Provider"].map((skill) => (
              <div 
                key={skill} 
                className="bg-white px-4 py-3 rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 text-center"
              >
                <span className="font-semibold text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;