import { TModalProps } from "../../../types";

const SearchBar = ({ setFilterQuery }: TModalProps) => {
  return (
    <div className="bg-blue-500 h-[180px] lg:h-[200px] xl:h-[220px] mb-3 md:mb-8 font-play flex items-center justify-center">
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md space-y-2 lg:space-y-5">
          <h1 className="text-3xl lg:text-5xl font-bold text-white">All Products</h1>
          <p className="text-sm md:text-base text-white">
            Discover our unique collection of camping gear and accessories.
          </p>

          <div className="relative flex items-center mx-auto w-56 md:w-64 h-10 lg:h-12 rounded-sm focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              onChange={(e) =>
                setFilterQuery((prev) => ({
                  ...prev,
                  searchValue: e.target.value,
                }))
              }
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search products..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
