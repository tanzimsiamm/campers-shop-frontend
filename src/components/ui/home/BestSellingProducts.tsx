import { Link } from "react-router-dom";
import { TProduct } from "../../../types";
import { useGetBestSellingProductsQuery } from "../../../redux/features/products/productApi";
import ProductCard from "../productManagement/ProductCard";

const BestSellingProducts = () => {
  const { data } = useGetBestSellingProductsQuery(undefined);
  const products: TProduct[] = data?.data || [];
  return (
    <section className="my-8 md:my-16 lg:my-24">
      <h1 className="text-[26px] md:text-3xl lg:text-[40px] text-gray-700 text-center">
        Explore Top Camping Gear
      </h1>
      <p className="text-center text-sm md:text-lg max-w-[1040px] mx-auto text-gray-600 mt-0 md:mt-2 mb-10 md:mb-16 lg:mb-20 font-play">
        Discover the best-selling camping essentials designed for every outdoor
        enthusiast. Gear up for your next adventure with high-quality, reliable
        products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-7  mb-8 md:mb-12">
        {products?.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {products?.length && (
        <div className="flex justify-center mt-20">
          <Link to={`/products`}>
            {" "}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
              {" "}
              See All{" "}
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default BestSellingProducts;
