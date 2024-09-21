import { useState } from "react";
import { ClipLoader } from "react-spinners";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../redux/features/products/productApi";
import { TProduct } from "../types";
import CreateProduct from "../components/ui/productManagement/CreateProduct";
import UpdateProduct from "../components/ui/productManagement/updateProduct";
import Swal from "sweetalert2";

export default function ProductManagement() {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const { data, isLoading } = useGetProductsQuery(undefined);
  const [deleteProductFromDB] = useDeleteProductMutation();
  const [updateProductId, setUpdateProductId] = useState("");

  const products: TProduct[] = data?.data || [];

  // delete a product
  const deleteProduct = (productId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteProductFromDB(productId).unwrap();
        if (response.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Product has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <section className="max-w-[1300px] mx-auto px-4 my-2 md:my-6 lg:my-10 mb-10 font-prompt">
      <div className="flex justify-center items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-prompt font-semibold text-gray-700 ">
          ALL PRODUCTS
        </h2>
      </div>

      <div className="text-right mb-7">
        <button
          onClick={() => setOpenCreateModal(true)}
          className=" px-6 text-sm lg:text-base mr-3 py-2 md:py-2 xl:py-3 font-semibold text-gray-900 rounded transition bg-gray-100 hover:bg-gray-200 whitespace-nowrap"
        >
          Add New Product
        </button>

        {/* create product modal  */}
        {openCreateModal && (
          <CreateProduct open={openCreateModal} setOpen={setOpenCreateModal} />
        )}

        {/* update product modal  */}
        {openUpdateModal && (
          <UpdateProduct
            productId={updateProductId}
            open={openUpdateModal}
            setOpen={setOpenUpdateModal}
          />
        )}
      </div>

      <div className="flex flex-col font-play">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light dark:border-neutral-500">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr className="bg-blue-600 h-8 text-white/95 text-[12px] md:text-base">
                    <th
                      scope="col"
                      className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500"
                    >
                      Category
                    </th>

                    <th
                      scope="col"
                      className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500"
                    >
                      {" "}
                      Action{" "}
                    </th>

                    <th
                      scope="col"
                      className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500"
                    >
                      {" "}
                      Action{" "}
                    </th>
                  </tr>
                </thead>
                <tbody className="relative">
                  {isLoading && (
                    <ClipLoader
                      color="#000002"
                      loading={isLoading}
                      className="absolute top-14 left-2/4"
                      size={60}
                      aria-label="Loading Spinner"
                      speedMultiplier={0.8}
                    />
                  )}

                  {products?.map((product) => (
                    <tr key={product._id} className="border-b ">
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 flex items-center justify-center">
                        <img
                          src={product.images[0]}
                          className="w-[52px] h-[52px] md:w-24 md:h-24 object-contain"
                        />
                      </td>
                      <td className=" border-r font-medium text-sm md:text-lg  text-gray-600 text-start md:text-center px-6 py-4 dark:border-neutral-500">
                        {product.name}
                      </td>
                      <td className="whitespace-nowrap font-medium  text-sm md:text-lg border-r px-6 py-4 dark:border-neutral-500">
                        {product.price}$
                      </td>
                      <td className="whitespace-nowrap font-medium  text-sm md:text-lg border-r px-6 py-4 dark:border-neutral-500">
                        {product.category}
                      </td>

                      <td className="whitespace-nowrap font-medium border-r text-sm md:text-lg  px-6 py-4 dark:border-neutral-500">
                        <button
                          className={`bg-blue-700 p-1 px-2 md:py-2 md:px-4 text-white rounded font-semibold transition-all hover:bg-blue-800 text-[12px] md:text-base `}
                          onClick={() => {
                            setUpdateProductId(product._id!);
                            setOpenUpdateModal(true);
                          }}
                        >
                          Modify
                        </button>
                      </td>

                      <td className="whitespace-nowrap font-medium  text-sm md:text-lg  px-6 py-4 dark:border-neutral-500">
                        {/* delete product  */}
                        <button
                          className={`bg-red-600 p-1 px-2 md:py-2 md:px-4 text-white rounded font-semibold transition-all hover:bg-red-700 text-[12px] md:text-base `}
                          onClick={() => deleteProduct(product._id!)}
                        >
                          Delete{" "}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!products?.length && (
                <p className="text-xl text-center mt-44 text-gray-500">
                  {" "}
                  No Products{" "}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
