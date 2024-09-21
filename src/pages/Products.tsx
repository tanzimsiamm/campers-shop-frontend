import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../redux/features/products/productApi";
import { TProduct } from "../types";
import SearchBar from "../components/ui/productManagement/SearchBar";
import { MoonLoader } from "react-spinners";
import ProductCard from "../components/ui/productManagement/ProductCard";
import { useLocation } from "react-router-dom";

const Products = () => {
  const [filterQuery, setFilterQuery] = useState({});
  const { pathname } = useLocation();
  const { data, isFetching } = useGetProductsQuery(filterQuery);
  const products: TProduct[] = data?.data || [];

  // Scroll to top when the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Function to reset the filter query
  const resetFilterQuery = () => {
    setFilterQuery({});
  };

  return (
    <section className="my-2 md:my-6 lg:my-8">
      <SearchBar setFilterQuery={setFilterQuery} />

      {isFetching && (
        <MoonLoader
          color="#000002"
          size={60}
          className="absolute top-72 md:top-2/4 left-2/4"
          aria-label="Loading Spinner"
          speedMultiplier={0.8}
        />
      )}

      <section>
        {/* Filtering Section */}
        <div className="flex justify-between md:justify-end my-6 gap-3 flex-wrap-reverse">
          {/* Sort by Price */}
          <select
            onChange={(e) =>
              setFilterQuery((prev) => ({
                ...prev,
                sortByPrice: e.target.value,
              }))
            }
            className="max-w-xs outline p-2 outline-black/20 rounded-sm outline-1 text-xs md:text-sm"
            defaultValue="Sort by Price"
          >
            <option disabled>Sort by Price</option>
            <option value="1">Low to High</option>
            <option value="-1">High to Low</option>
          </select>

          {/* Filter by Price */}
          <select
            onChange={(e) =>
              setFilterQuery((prev) => ({
                ...prev,
                priceRange: e.target.value,
              }))
            }
            className="max-w-xs outline p-2 outline-black/20 rounded-sm outline-1 text-xs md:text-sm"
            defaultValue="Filter by Price"
          >
            <option disabled>Filter by Price</option>
            <option value="0-20">0 - 20$</option>
            <option value="20-40">20 - 40$</option>
            <option value="40-60">40 - 60$</option>
            <option value="60-80">60 - 80$</option>
            <option value="80-100">80 - 100$</option>
            <option value="0-0">Custom</option>
          </select>

          {/* Filter by Category */}
          <select
            onChange={(e) =>
              setFilterQuery((prev) => ({
                ...prev,
                category: e.target.value,
              }))
            }
            className="max-w-xs outline p-2 outline-black/20 rounded-sm outline-1 text-xs md:text-sm"
            defaultValue="Filter by Category"
          >
            <option disabled>Filter by Category</option>
            <option value="mobile phones">Mobile Phones</option>
            <option value="computers & laptops">Computers & Laptops</option>
            <option value="wearables">Wearables</option>
            <option value="audio">Audio</option>
            <option value="home appliances">Home Appliances</option>
            <option value="sports & outdoors">Sports & Outdoors</option>
            <option value="television">Television</option>
          </select>

          {/* Reset button */}
          <button
            onClick={resetFilterQuery}
            className="px-2 md:px-8 text-sm lg:text-base py-2 md:py-2 font-semibold text-gray-800 rounded transition bg-gray-100 hover:bg-gray-200"
          >
            Reset
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-7 mb-8 md:mb-16 xl:mt-20">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {/* No Products Found */}
        {!products.length && (
          <p className="text-base md:text-lg mt-4 text-center">
            No Products Found
          </p>
        )}
      </section>
    </section>
  );
};

export default Products;
