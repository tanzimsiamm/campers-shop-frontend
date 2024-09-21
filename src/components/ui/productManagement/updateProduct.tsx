/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import { useEffect } from "react";
import { TProduct } from "../../../types";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../../redux/features/products/productApi";

type TModalProps = {
  productId: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UpdateProduct({
  open,
  setOpen,
  productId,
}: TModalProps) {
  const { register, handleSubmit, reset } = useForm();
  const [updateProduct, { isLoading: updateLoading }] =
    useUpdateProductMutation();
  const {
    data,
    isLoading: dataLoading,
    isSuccess,
  } = useGetSingleProductQuery(productId);
  const product: TProduct = data?.data;

  // Set the default values dynamically
  useEffect(() => {
    if (isSuccess) {
      reset({
        productName: product.name,
        category: product.category,
        stockQuantity: product.stockQuantity,
        price: product.price,
        description: product.description,
        ratings: product.ratings,
        image1: product.images[0],
        image2: product.images[1],
        image3: product.images[2],
      });
    }
  }, [reset, product, isSuccess]);

  const onSubmit = async (data: any) => {
    const productData: TProduct = {
      name: data.productName,
      category: data.category,
      stockQuantity: parseInt(data.stockQuantity),
      price: parseInt(data.price),
      description: data.description,
      ratings: parseFloat(data.ratings),
      images: [data.image1, data.image2, data.image3],
    };

    try {
      const response = await updateProduct({
        productId: product._id!,
        payload: productData,
      }).unwrap();

      if (response?.success) {
        // close the modal
        setOpen(false);
        // show a toast
        toast.success("Product has been updated successfully");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };
  return (
    <section className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 z-50  bg-black/30 backdrop-blur-sm flex justify-center items-center overflow-y-auto">
      <form
        className="w-[400px] md:w-[600px] p-7 bg-white rounded-md relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* loading white layer  */}
        {dataLoading || updateLoading ? (
          <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-white/80 rounded-md flex justify-center items-center">
            <ClipLoader
              color="#000002"
              //  loading={dataLoading || updateLoading}
              size={60}
              aria-label="Loading Spinner"
              speedMultiplier={0.8}
            />
          </div>
        ) : (
          ""
        )}

        <div className="flex flex-col justify-start items-start mb-3">
          <label className="font-semibold">Product Name</label>
          <input
            type="text"
            className="outline-none border-b-2 border-gray-700 focus:border-blue-600 w-full py-1 rounded-sm"
            {...register("productName")}
          />
        </div>

        <div className="flex flex-col justify-start items-start mb-3">
          <label className="font-semibold">Category</label>
          <select
            className="w-full outline p-2 mt-3 outline-black/20 rounded-sm outline-1 text-xs md:text-sm"
            {...register("category")}
          >
            <option disabled selected value="">
              Select Category
            </option>
            <option value="Mobile Phones">Mobile Phones</option>
            <option value="Computers & Laptops">Computers & Laptops</option>
            <option value="Wearables">Wearables</option>
            <option value="Audio">Audio</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Sports & Outdoors">Sports & Outdoors</option>
            <option value="Television">Television</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Accessories">Accessories</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Kitchen Appliances">Kitchen Appliances</option>
          </select>
        </div>

        <div className="flex flex-col justify-start items-start mb-3">
          <label className="font-semibold">Stock Quantity</label>
          <input
            type="number"
            className="outline-none border-b-2 border-gray-700 focus:border-blue-600 w-full py-1 rounded-sm"
            {...register("stockQuantity")}
          />
        </div>

        <div className="flex flex-col justify-start items-start mb-3">
          <label className="font-semibold">Price</label>
          <input
            type="number"
            className="outline-none border-b-2 border-gray-700 focus:border-blue-600 w-full py-1 rounded-sm"
            {...register("price")}
          />
        </div>

        <div className="flex flex-col justify-start items-start mb-3">
          <label className="font-semibold">Ratings</label>
          <input
            type="text"
            className="outline-none border-b-2 border-gray-700 focus:border-blue-600 w-full py-1 rounded-sm"
            {...register("ratings")}
          />
        </div>

        <div className="flex flex-col justify-start items-start mb-3">
          <label className="font-semibold">Description</label>
          <input
            type="text"
            className="outline-none border-b-2 border-gray-700 focus:border-blue-600 w-full py-1 rounded-sm"
            {...register("description")}
          />
        </div>

        {/* after fetching data it will render  */}
        {isSuccess && (
          <div className="flex flex-col justify-start items-start mb-3">
            <label className="font-semibold mb-3">Images (URL)</label>
            <input
              type="text"
              className="outline-none border-b-2 border-gray-600 focus:border-blue-600 w-full py-1 rounded-sm"
              {...register("image1")}
              placeholder="image 1"
            />
            <input
              type="text"
              className="outline-none border-b-2 border-gray-600 focus:border-blue-600 w-full py-1 rounded-sm"
              {...register("image2")}
              placeholder="image 2"
            />
            <input
              type="text"
              className="outline-none border-b-2 border-gray-600 focus:border-blue-600 w-full py-1 rounded-sm"
              {...register("image3")}
              placeholder="image 3"
            />
          </div>
        )}

        <button
          type="submit"
          className="px-8 text-sm lg:text-base mt-6 mr-3 py-2 md:py-2 font-semibold text-white rounded transition bg-black hover:bg-gray-800 "
        >
          Modify
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="px-8 text-sm lg:text-base mr-3 py-2 md:py-2 font-semibold text-white rounded transition bg-red-600 hover:bg-red-700 "
        >
          {" "}
          Close{" "}
        </button>
      </form>
    </section>
  );
}
