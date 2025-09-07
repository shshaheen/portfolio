// Projects Component
function Projects() {
    const projects = [
      {
        title: "Uber Clone",
        desc: "A comprehensive Flutter application featuring user authentication, product management, and secure payment integration.",
        tech: ["Flutter", "Dart", "Firebase", "Riverpod", "Bloc", "Provider"],
        live: "#",
        github: "#"
      },
      {
        title: "Zepto Clone",
        desc: "A clone of the popular e-commerce app Zepto with user authentication, product catalog, and secure payment processing.",
        tech: ["Flutter", "Dart", "Firebase", "Riverpod", "Bloc", "Provider"],
        live: "#",
        github: "#"
      }
    ];
  
    return (
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{p.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={p.live} 
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={p.github} 
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold"
                  >
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Projects;