import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import telegramReducer from "./features/telegram/telegramSlice";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        telegram: telegramReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
