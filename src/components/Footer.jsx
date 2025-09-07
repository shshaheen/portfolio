// Footer Component
function Footer() {
    return (
      <footer className="bg-gray-800 text-center py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center mb-4">
            <div className="w-16 h-0.5 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Shaheen</span>. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
export default Footer;