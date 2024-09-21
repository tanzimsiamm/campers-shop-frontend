import { useGetFeaturedProductsQuery } from "../../../redux/features/products/productApi";
import { TProduct } from "../../../types";
import { NavLink } from "react-router-dom";

function CategoriesSection() {
  const { data, isLoading } = useGetFeaturedProductsQuery(undefined);
  const products: TProduct[] = data?.data || [];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!products.length) {
    return <p>No featured products available</p>;
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product: TProduct) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg p-6 relative"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                {/* Product Category inside image */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-1 px-3 rounded-md">
                  {product.category}
                </div>
              </div>

              {/* Shop Now Button */}
              <NavLink
                to={`/products`}
                className="block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center shadow-lg transition duration-300 ease-in-out"
              >
                Shop Now
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
