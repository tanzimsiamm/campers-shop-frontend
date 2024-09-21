import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { TCartItem } from "../../types";


const initialState : TCartItem[] = []

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addProductToCart : (state, action : PayloadAction<TCartItem> )=> {
            const newItem = action.payload;

          const existingProduct = state.find(item => item._id === newItem._id);

          if(existingProduct){
            if(existingProduct.stockQuantity > existingProduct.quantity){
                existingProduct.quantity += 1;
            }else{
                toast.error('You Cannot Add More Than Stock Quantity')
            }
          }else{
            state.push(newItem);
          }
        },

        removeProductFromCart : (state, action: PayloadAction<string>) => {
            const productId = action.payload;
            return state.filter(item => item._id !== productId);
        },

        changeQuantity : (state, action: PayloadAction<{ productId: string, type: string}>) => {
            const { productId, type } = action.payload;
            const product = state.find(item => item._id === productId);

            if(type === 'INCREASE'){
               if(product!.stockQuantity > product!.quantity){
                product!.quantity += 1;
               }else{
                toast.error('You Cannot Add More Than Stock Quantity')
               }
            }
            else if(type === 'DECREASE'){
                if(product!.quantity > 1){
                    product!.quantity -= 1;
                }
                return;
            }
        }
    }
})

export const { addProductToCart, removeProductFromCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
