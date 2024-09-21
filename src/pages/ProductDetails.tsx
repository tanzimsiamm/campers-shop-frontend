import { useParams } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import {
  BsCart2,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";

import { ClipLoader } from "react-spinners";
import { useAppDispatch } from "../redux/hooks";
import { toast } from "sonner";
import { useGetSingleProductQuery } from "../redux/features/products/productApi";
import { TCartItem, TProduct } from "../types";
import { addProductToCart } from "../redux/features/todoSlice";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

export default function ProductDetails() {
  const params = useParams();
  const { data, isLoading } = useGetSingleProductQuery(
    params.productId as string
  );
  const dispatch = useAppDispatch();
  const product: TProduct = data?.data;

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return (
      <ClipLoader
        color="#000002"
        size={60}
        className="absolute top-28 left-2/4"
        aria-label="Loading Spinner"
        speedMultiplier={0.8}
      />
    );
  }

  if (!product) return <p>Product not found.</p>;

  const {
    _id,
    name,
    images,
    price,
    ratings,
    stockQuantity,
    description,
    category,
  } = product;

  const handleAddProductToCart = () => {
    const productData: TCartItem = {
      _id: _id!,
      name,
      price,
      image: images[0],
      quantity,
      stockQuantity,
      date: new Date().toDateString(),
    };
  
    // Check if the data looks correct
    console.log("Product added to cart: ", productData);
  
    dispatch(addProductToCart(productData));
    toast.success("Product is added to the cart");
  };

  // Image Carousel navigation
  const prevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="max-w-[1300px] mx-auto px-4 my-2 md:my-14 lg:my-20 mb-10">
      <div className="flex flex-col md:flex-row justify-around gap-4 md:gap-12 lg:gap-20">
        {/* Custom Image Carousel */}
        <div className="bg-gray-100 p-6 flex-1 flex flex-col items-center">
          <div className="w-full mb-4 relative">
            <img
              src={images[selectedImage]}
              alt={name}
              className="w-full object-cover h-96"
            />
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 text-2xl bg-gray-600 text-white p-2"
            >
              {"<"}
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 text-2xl bg-gray-600 text-white p-2"
            >
              {">"}
            </button>
          </div>
          <div className="flex space-x-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumbnail-${index}`}
                className={`w-16 h-16 object-cover cursor-pointer border ${
                  selectedImage === index
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="flex flex-col gap-5 flex-1">
          <p className="text-blue-600 py-1 text-sm px-3 border w-32 border-blue-600">
            {stockQuantity} In Stock
          </p>
          <h2 className="text-[28px] lg:text-4xl font-semibold font-play">
            {name}
          </h2>
          <p className="text-gray-600">{description}</p>
          <h3 className="text-[25px] font-semibold">{`$${price}`}</h3>

          {/* Quantity Selector */}
          <div className="flex items-center justify-around text-lg lg:text-2xl py-1 lg:py-2 px-2 border w-32 lg:w-44">
            <AiOutlineMinus
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="cursor-pointer"
            />
            <p className="border-l border-r py-0 px-3">{quantity}</p>
            <IoMdAdd
              onClick={() =>
                setQuantity((q) => (q < stockQuantity ? q + 1 : q))
              }
              className="cursor-pointer"
            />
          </div>

          <div className="flex gap-3 items-center uppercase font-semibold">
            <p className="capitalize">Category:</p>
            <b className="text-gray-600 border border-gray-300 py-1 px-3 rounded uppercase font-medium">
              {category}
            </b>
          </div>

          {/* Rating */}
          <div className="flex gap-3">
            <p className="capitalize font-semibold">Rating:</p>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill={star <= ratings ? "#fbbf24" : "#d1d5db"}
                >
                  <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46552 6.64193 8.82553 5.99623L9.15316 5.40838Z" />
                </svg>
              ))}
            </div>
            <p>({ratings})</p>
          </div>

          <div className="flex gap-2">
          <button
              onClick={handleAddProductToCart}
              className="bg-blue-600 disabled:bg-gray-300 py-4 px-14 text-white rounded font-semibold transition-all flex items-center gap-2 hover:bg-gray-700 text-sm md:text-base disabled:cursor-not-allowed"
              disabled={stockQuantity < 1}
            >
              {" "}
              <BsCart2 className="text-xl" />
              Add to cart{" "}
            </button>
            <p className="flex items-center justify-center p-4 border rounded">
              <GiSelfLove />
            </p>
          </div>

          <div className="border-t py-5 mt-5 space-y-2 w-[100%]">
            <h4>
              <b>Warranty:</b> 6 months warranty
            </h4>
            <h4 className="flex items-center gap-3 text-xl">
              <b className="text-blue-600">Share:</b>
              <BsFacebook className="text-blue-600" />
              <FaXTwitter className="text-sky-500" />
              <BsLinkedin className="text-lime-600" />
              <BsInstagram className="text-pink-600" />
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
