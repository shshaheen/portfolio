// Contact Component
function Contact() {
    return (
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
            <p className="mb-8 text-gray-600 text-lg leading-relaxed">
              I'm always interested in discussing new opportunities and collaborations. 
              Feel free to reach out through any of the channels below.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4">
              <a 
                href="mailto:youremail@example.com" 
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
              >
                <span className="font-semibold text-gray-800">Email</span>
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
              >
               
                <span className="font-semibold text-gray-800">LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com" 
                target="_blank" 
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
              >
                
                <span className="font-semibold text-gray-800">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Contact;