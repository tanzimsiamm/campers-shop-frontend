import { useEffect, useState } from "react";
import { RxCross2} from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { TCartItem } from "../types";
import { changeQuantity, removeProductFromCart } from "../redux/features/todoSlice";



export default function Cart() {

  const dispatch = useAppDispatch();
  const cartItems: TCartItem[] = useAppSelector(state => state.cart);
  const [ total , setTotal ] = useState(0);


  useEffect(() => {
    const handleBeforeUnload = (event : BeforeUnloadEvent) => {
      event.preventDefault();
      // Modern browsers require setting returnValue for the event
      event.returnValue = 'Are you sure you want to leave?';
    };

   if(cartItems.length){
    window.addEventListener('beforeunload', handleBeforeUnload);
   }

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);


    useEffect(()=> {
      const totalPrice = cartItems?.reduce((prevValue, currentValue: TCartItem) => prevValue + (currentValue.quantity * currentValue.price), 0);
      setTotal(totalPrice);
    },[cartItems])

    
    const handleChangeQuantity = (productId: string, type: string) => {
      dispatch(changeQuantity({
        productId,
        type
      }))
    }


    const handleRemoveItem = (productId: string) => {

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      
      }).then( async (result) => {
        if (result.isConfirmed) {
     dispatch(removeProductFromCart(productId))  
          Swal.fire({
            title: "Deleted!",
            text: "Item has been deleted.",
            icon: "success"
          });
        }
      });
    }


  return (
    <section className=" my-2 md:my-6 lg:my-10 mb-10"> 

<div className="flex justify-center items-center mb-6">
<h2 className="text-2xl md:text-3xl font-extrabold text-gray-700 "> Cart </h2>
</div>

{/* {isLoading && <span className="loading loading-dots text-orange-600/80 w-10 md:w-14 relative left-2/4"></span> } */}

<div className="flex flex-col">
<div className="overflow-x-auto ">
 <div className="inline-block min-w-full py-2">
   <div className="overflow-hidden">
     <table
       className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
       <thead className="border-b font-medium dark:border-neutral-500">
         <tr className="bg-blue-600 text-white/95 text-[12px] md:text-base">
           <th
             scope="col"
             className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500">
             Image
           </th>
           <th
             scope="col"
             className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500">
             Item
           </th>
            <th
             scope="col"
             className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500">
             Quantity
           </th>
           <th
             scope="col"
             className="border-r px-6 py-0 md:py-2 lg:py-4 dark:border-neutral-500">
             Unit Price
           </th>

          
           <th scope="col" className="px-6 py-0 lg:py-4"> Remove </th>
         </tr>
       </thead>
       <tbody>
       
       {cartItems?.map((product: TCartItem) =>  <tr key={product._id} className="border-b dark:border-neutral-500">
           <td
             className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 flex items-center justify-center">
             <img src={product.image} className="w-[52px] h-[52px] md:w-24 md:h-24 object-contain" />
           </td>
           <td
             className=" border-r font-medium text-sm md:text-lg  text-gray-600 text-start md:text-center px-6 py-4 dark:border-neutral-500">
             {product.name}
           </td>

            <td
             className="whitespace-nowrap font-medium  text-sm md:text-lg border-r px-6 py-4 dark:border-neutral-500">

               {/* handle Quantity  */}

               <div className="flex items-center gap-6 justify-center">
                 <button
                 onClick={() => handleChangeQuantity(product._id, 'INCREASE')}
                  className="bg-gray-100 hover:bg-gray-200 size-8 text-2xl rounded-lg text-gray-500">+</button>
                   <p>  {product.quantity}</p>
                 <button
                  onClick={() => handleChangeQuantity(product._id, 'DECREASE')}
                  className="bg-gray-100 hover:bg-gray-200 size-8 text-2xl rounded-lg text-gray-500">-</button>
               </div>
           </td>

           <td
             className="whitespace-nowrap font-medium  text-sm md:text-lg border-r px-6 py-4 dark:border-neutral-500">
             {`${product.price}$`}
           </td>
          
           <td className="whitespace-nowrap px-6 py-4"> <button onClick={()=> handleRemoveItem(product._id) } className="bg-red-500 p-1 md:py-2 md:px-2 text-white rounded-full font-semibold transition-all hover:bg-red-600 text-sm md:text-base"> 
           <RxCross2 className="text-xl"/> </button> </td>
         </tr>)}
      
       </tbody>
     </table>

     { !cartItems.length && <p className="text-base md:text-lg mt-8 text-center">No Items</p>}
   </div>
 </div>
</div>
</div>

<h2 className="mt-7 text-2xl font-extrabold text-gray-500 my-3"> Cart Totals </h2>
<div className="border max-w-[600px]">
<div className="border-b flex items-center justify-between gap-3 py-3 px-6">
 <h3 className="font-semibold text-gray-700 "> Subtotal </h3>
 <p className="text-gray-600 font-semibold"> {`$${total}`} </p>
</div>
<div className="flex items-center justify-between gap-3 p-3 px-6">
<h3 className="font-semibold text-gray-700"> Total </h3>
 <p className="text-gray-600 font-semibold"> {`$${total}`} </p>
</div>
</div>

<Link to={'/checkout'} state={{ cartItems, total}} >
<button className="bg-blue-600 rounded-md py-3 px-8 my-4 text-white font-semibold transition-all hover:bg-blue-700 text-sm md:text-lg">Place Order</button></Link>
</section>
  )
}
