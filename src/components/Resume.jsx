// Resume Component
function Resume() {
    return (
      <div className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Resume
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <p className="text-gray-600 mb-8 leading-relaxed">
              Download my comprehensive resume to learn more about my technical skills, project experience, and professional background.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 font-semibold"
            >
              <span>📄</span>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    );
  }

export default Resume;