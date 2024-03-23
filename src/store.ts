import { configureStore } from "@reduxjs/toolkit";
import storeItemSliceReducer from './redux/storeItemsSlice' 

export const store=configureStore(
    {
        reducer:{
            shop:storeItemSliceReducer
        },
    }
);

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=ReturnType<typeof store.dispatch>;