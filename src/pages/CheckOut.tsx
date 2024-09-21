/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import { TProduct } from "../types";
import { useCreateOrderMutation } from "../redux/features/orders/orderApi";

const CheckOut = () => {
  const { register, handleSubmit } = useForm();
  const [createProduct, { isLoading }] = useCreateOrderMutation();
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    // const total = location.state?.total || 0;
    const orderedProducts = location.state?.cartItems?.map(
      (product: TProduct) => ({
        productId: product._id,
        quantity: product.stockQuantity,
      })
    ) || [];
  
    const orderData = {
      ...data,
      orderedProducts,
      total: location.state?.total || 0,
    };

    console.log("Order Data being sent: ", orderData);
  
    try {
      const response = await createProduct(orderData);
      if (response) {
        navigate("/order-successful");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error creating order: ", error);
      toast.error("Order creation failed");
    }
  };

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
          {" "}
          <span className="text-red-600">Order </span>
        </h1>
        <p className="text-base font-medium leading-6 text-gray-600">
          {" "}
          {new Date().toLocaleString()}{" "}
        </p>
      </div>

      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            {/* collect user info  */}
            <form
              className="flex flex-col lg:flex-row justify-between items-center w-full gap-2 lg:gap-5 xl:gap-8  rounded-md "
              onSubmit={handleSubmit(onSubmit)}
            >
              <section className="flex-1 w-full bg-gray-50 p-7">
                <div className="flex flex-col justify-start items-start mb-3">
                  <label className="font-semibold">User Name</label>
                  <input
                    type="text"
                    className="bg-transparent outline-none border-b-2 border-gray-700 focus:border-blue-600 w-full py-1 rounded-sm"
                    {...register("userName")}
                  />
                </div>

                <div className="flex flex-col justify-start items-start mb-3">
                  <label className="font-semibold">Email</label>
                  <input
                    type="text"
                    className="bg-transparent outline-none border-b-2 border-gray-700 focus:border-blue-600 w-full py-1 rounded-sm"
                    {...register("email")}
                  />
                </div>

                <div className="flex flex-col justify-start items-start mb-3">
                  <label className="font-semibold">Phone</label>
                  <input
                    type="text"
                    className="bg-transparent outline-none border-b-2 border-gray-700 focus:border-blue-600 w-full py-1 rounded-sm"
                    {...register("phone")}
                  />
                </div>

                <div className="flex flex-col justify-start items-start mb-3">
                  <label className="font-semibold">Delivery Address</label>
                  <input
                    type="text"
                    className="bg-transparent outline-none border-b-2 border-gray-700 focus:border-blue-600 w-full py-1 rounded-sm"
                    {...register("deliveryAddress")}
                  />
                </div>

                <div className="flex flex-col justify-start items-start mb-3">
                  <label className="font-semibold">Payment Method</label>
                  <select
                    className=" max-w-xs outline p-2 mt-1 outline-black/20 rounded-sm outline-1 text-xs md:text-sm "
                    {...register("paymentMethod")}
                  >
                    <option value="cod">Cash on delivery</option>
                    <option value="stripe">Stripe Payment</option>
                  </select>
                </div>
              </section>

              <div className="flex-1 w-full h-full flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 space-y-6  bg-gray-50 relative">
                {/* loading white layer  */}
                {isLoading && (
                  <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-white/80 rounded-md flex justify-center items-center">
                    <ClipLoader
                      color="#000002"
                      loading={isLoading}
                      //  cssOverride={override}
                      size={60}
                      aria-label="Loading Spinner"
                      speedMultiplier={0.8}
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  Shipping
                </h3>
                <div className="flex justify-between items-start w-full">
                  <div className="flex justify-center items-center space-x-4">
                    <div className="w-8 h-8">
                      <img
                        className="w-full h-full"
                        alt="logo"
                        src="https://i.ibb.co/L8KSdNQ/image-3.png"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-center">
                      <p className="text-lg leading-6 font-semibold text-gray-800">
                        COD Delivery
                        <br />
                        <span className="font-normal">
                          Delivery with 24 Hours
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold leading-6 text-gray-800">
                    $4.00
                  </p>
                </div>
                <div className="w-full flex justify-center items-center">
                  <button
                    type="submit"
                    onSubmit={onSubmit}
                    className="hover:bg-gray-600 py-5 w-96 md:w-full bg-gray-700 text-base font-medium leading-4 text-white rounded"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
