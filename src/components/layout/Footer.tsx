const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">123 Camping Street, Outdoor City, USA</p>
            <p className="text-gray-300">Phone: (555) 123-4567</p>
            <p className="text-gray-300">Email: info@campersshop.com</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.304h-3.123v-3.622h3.123v-2.672c0-3.1 1.892-4.785 4.655-4.785 1.324 0 2.461.099 2.792.143v3.237l-1.917.001c-1.503 0-1.796.715-1.796 1.764v2.312h3.589l-.467 3.622h-3.122v9.305h6.127c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.324-1.325z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.937 9.937 0 0 1-2.828.775 4.958 4.958 0 0 0 2.165-2.723c-.951.555-2.005.959-3.127 1.176a4.922 4.922 0 0 0-8.384 4.482 13.978 13.978 0 0 1-10.15-5.148 4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.215 2.188 4.098a4.904 4.904 0 0 1-2.23-.616v.061a4.926 4.926 0 0 0 3.946 4.829 4.9 4.9 0 0 1-2.224.084 4.926 4.926 0 0 0 4.6 3.416 9.867 9.867 0 0 1-7.29 2.03 13.928 13.928 0 0 0 7.548 2.212c9.057 0 14.01-7.502 14.01-14.01 0-.213-.005-.426-.014-.637a10.006 10.006 0 0 0 2.459-2.548z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.313 3.608 1.288.975.975 1.226 2.243 1.288 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.313 2.633-1.288 3.608-.975.975-2.243 1.226-3.608 1.288-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.313-3.608-1.288-.975-.975-1.226-2.243-1.288-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.313-2.633 1.288-3.608.975-.975 2.243-1.226 3.608-1.288 1.266-.058 1.646-.069 4.85-.069m0-2.163c-3.259 0-3.667.012-4.947.07-1.431.065-2.687.317-3.682 1.313-.995.995-1.248 2.251-1.313 3.682-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.065 1.431.317 2.687 1.313 3.682.995.995 2.251 1.248 3.682 1.313 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.431-.065 2.687-.317 3.682-1.313.995-.995 1.248-2.251 1.313-3.682.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.065-1.431-.317-2.687-1.313-3.682-.995-.995-2.251-1.248-3.682-1.313-1.28-.058-1.688-.07-4.947-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Relevant Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/shop" className="hover:text-gray-300 transition duration-300">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300 transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-gray-300 transition duration-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300 transition duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gray-300 transition duration-300">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="text-center mt-8 text-gray-500">
          <p>&copy; {new Date().getFullYear()} Campers Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
