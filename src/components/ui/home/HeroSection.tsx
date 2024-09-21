import { NavLink } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="relative bg-gray-800 text-white overflow-hidden my-4 ">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661774910035-05257f7d73a6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D"
            alt="Camping Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
  
        {/* Content */}
        <div className="relative container mx-auto px-6 py-32 lg:py-48 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Explore the Great Outdoors
          </h1>
          <p className="text-lg lg:text-2xl mb-8">
            Find the best camping gear and accessories to make your adventures
            unforgettable.
          </p>
          <div className="flex justify-center gap-4">
            <NavLink
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
            >
              Shop Now
            </NavLink>
          </div>
        </div>
      </section>
    );
};

export default HeroSection;