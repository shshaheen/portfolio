// Experience Component
function Experience() {
  const jobs = [
    {
      role: "Frontend developer",
      company: "Rozana Ecommerce Pvt Ltd",
      duration: "Jun 2025 - Present",
      tasks: [
        "Built responsive Flutter components for enterprise applications",
        "Collaborated with backend team to integrate RESTful APIs",
        "Enhanced UI/UX design system using TailwindCSS"
      ]
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8">
          {jobs.map((job, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {job.role}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold">{job.company}</p>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                  {job.duration}
                </span>
              </div>
              
              <div className="space-y-3">
                {job.tasks.map((task, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{task}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
