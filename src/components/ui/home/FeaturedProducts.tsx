import { Link } from "react-router-dom";
import { useGetFeaturedProductsQuery } from "../../../redux/features/products/productApi";
import { TProduct } from "../../../types";

function FeaturedProducts() {
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
      <h2 className="text-4xl font-bold text-center mb-8">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product: TProduct) => (
          <div key={product._id} className="bg-white shadow-lg rounded-lg p-6">
            {/* Product Image */}
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />

            {/* Product Info */}
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {product.name}
            </h3>
            <p className="text-gray-600">{product.description.slice(0, 80)}...</p>
            <p className="text-lg font-bold text-blue-600 mt-2">${product.price}</p>

            {/* Action Button */}
            <Link
              to={`/product/${product._id}`}
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

export default FeaturedProducts;
