import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreItem } from "../components/card";

interface CardItem{
    quantity:number,
    storeItem:StoreItem
}

interface CartItemState{
    cartItems: CardItem[]
}

const initialState:CartItemState={
    cartItems:[]
}

export const storeItemsSlice=createSlice({
    name:'store',
    initialState:initialState,
    reducers:{
        addToCart(state,action:PayloadAction<CardItem>){
            const existingIndex=state.cartItems.findIndex((item:CardItem)=>{
                return item.storeItem.id===action.payload.storeItem.id
            })
            if(existingIndex>=0){
                state.cartItems[existingIndex].quantity+=action.payload.quantity;
            }
            else{
                state.cartItems.push({quantity:action.payload.quantity,storeItem:action.payload.storeItem})
            }
        },
        removeFromCart(state, action:PayloadAction<CardItem>){
            state.cartItems=state.cartItems.filter((item:CardItem)=>item.storeItem.id!=action.payload.storeItem.id)
        }
    }
})

export const {addToCart,removeFromCart}=storeItemsSlice.actions;
export default storeItemsSlice.reducer;
