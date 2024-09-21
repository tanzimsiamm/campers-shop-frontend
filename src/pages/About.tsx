import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <section className="about-us my-16 px-6 lg:px-20 text-gray-800">
      {/* Mission Statement */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At Campers Shop, we strive to offer the finest outdoor equipment to adventurers everywhere. Our commitment to quality, sustainability, and customer satisfaction drives everything we do, making the outdoors more accessible for everyone.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
        <div>
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">Contact Us</h3>
          <ul className="text-lg text-gray-700 leading-loose">
            <li><strong>Phone:</strong> +123 456 789</li>
            <li><strong>Email:</strong> info@campersshop.com</li>
            <li><strong>Address:</strong> 123 Adventure Lane, Nature City, Earth</li>
          </ul>
        </div>

        {/* Google Map */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">Our Location</h3>
          <div className="shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.000065515902!2d144.95373511587296!3d-37.81720927975185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1632930340011!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-semibold text-gray-900 mb-6">Follow Us</h3>
        <div className="flex justify-center space-x-8 text-4xl text-gray-600">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Team Members */}
      <div className="team-section">
        <h3 className="text-3xl font-semibold text-gray-900 text-center mb-12">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="team-member text-center p-6 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGcZoh8oFxxLODywTUCwVy4aaHSzflR13VA&s"
              alt="John Siam"
              className="rounded-full mx-auto mb-4 w-40 h-40 object-cover border-4 border-gray-300"
            />
            <h4 className="text-2xl font-bold text-gray-900 mb-2">John Siam</h4>
            <p className="text-gray-600">CEO & Founder</p>
            <p className="text-gray-500 text-sm">John has over 20 years of experience in outdoor gear and adventure products, driven by his passion for exploration.</p>
          </div>

          {/* Team Member 2 */}
          <div className="team-member text-center p-6 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnoPN8K0ROp9fSFAthzNm1c77VKBe5T22jtg&s"
              alt="Jane Smith"
              className="rounded-full mx-auto mb-4 w-40 h-40 object-cover border-4 border-gray-300"
            />
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Jane Smith</h4>
            <p className="text-gray-600">Lead Designer</p>
            <p className="text-gray-500 text-sm">Jane’s innovative designs have revolutionized our product line with a focus on functionality and style.</p>
          </div>

          {/* Team Member 3 */}
          <div className="team-member text-center p-6 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6XqYA4LrfbuBuk9PuDTpY-xyuC5xw1HgLww&s"
              alt="Alice Johnson"
              className="rounded-full mx-auto mb-4 w-40 h-40 object-cover border-4 border-gray-300"
            />
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Alice Johnson</h4>
            <p className="text-gray-600">Marketing Director</p>
            <p className="text-gray-500 text-sm">Alice has built a strong brand presence through innovative marketing strategies and a keen eye for market trends.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
