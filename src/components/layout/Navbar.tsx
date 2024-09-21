import { Link, NavLink } from "react-router-dom";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { useAppSelector } from "../../redux/hooks";

const Navbar = () => {

  const cartItems = useAppSelector((state) => state.cart);
  
  return (
    <div className="navbar top-0 left-0 z-50 bg-white custom-shadow ">
   
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-bold"
                    : "text-black font-semibold hover:underline"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-bold"
                    : "text-black font-semibold hover:underline"
                }
              >
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product-management"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-bold"
                    : "text-black font-semibold hover:underline"
                }
              >
                Product Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-bold"
                    : "text-black font-semibold hover:underline"
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink
          to={"/"}
          className="btn text-blue-600 btn-ghost text-3xl font-extrabold tracking-wide uppercase relative transition duration-300 ease-in-out hover:text-blue-700 after:absolute after:content-[''] after:h-1 after:w-full after:bg-blue-600 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:origin-left hover:after:origin-right after:transition after:duration-300"
        >
          <img
            src="https://www.clipartmax.com/png/middle/105-1051406_online-shopping-png-transparent-images-online-shopping-logo-png.png"
            alt="Campers Shop Logo"
            className="w-14 h-12 mr-2"
          />
          CAMPERS SHOP
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex space-x-10">
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold"
                  : "text-black font-semibold hover:underline"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold"
                  : "text-black font-semibold hover:underline"
              }
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product-management"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold"
                  : "text-black font-semibold hover:underline"
              }
            >
              Product Management
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold"
                  : "text-black font-semibold hover:underline"
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end ">
      <div className="mr-3 md:mr-5 rounded-full text-xl md:text-[22px] lg:text-2xl text-black flex gap-5 md:gap-6 ">
                 
                  <div className="relative hover:bg-gray-100 rounded-full ">
                    {cartItems.length ? (
                      <p className="bg-blue-600 size-5 absolute -top-2 -right-3 text-sm text-white font-semibold flex items-center justify-center rounded-full">
                        {cartItems.length}
                      </p>
                    ) : (
                      ""
                    )}
                    <Link to={"/cart"}>
                      {" "}
                      <IoCartOutline />
                    </Link>
                  </div>
                    <IoHeartOutline />
                </div>
      </div>
    </div>
  );
};

export default Navbar;
