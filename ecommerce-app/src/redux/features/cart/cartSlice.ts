import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../types";

interface CartState {
    items: {
        [key: string]: {
            id: string;
            product: Product;
            quantity: number;
        };
    };
}

const initialState: CartState = {
    items: {
        "1": {
            id: "1",
            product: {
                id: `1`,
                name: "Airpods Wireless Bluetooth Headphones",
                image: "/images/airpods.jpg",
                description:
                    "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
                brand: "Apple",
                category: "Electronics",
                price: 89.99,
                countInStock: 10,
                rating: 1.5,
            },
            quantity: 1,
        },
    },
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            const product = action.payload;
            if (state.items[product.id]) {
                state.items[product.id].quantity++;
            } else {
                state.items[product.id] = {
                    id: product.id,
                    product,
                    quantity: 1,
                };
            }
        },

        removeFromCart(state, action: PayloadAction<string>) {
            delete state.items[action.payload];
        },

        updateQuantity(
            state,
            action: PayloadAction<{ id: string; quantity: number }>
        ) {
            const { id, quantity } = action.payload;
            state.items[id].quantity = quantity;
        },

        clearCart(state) {
            state.items = {};
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
    cartSlice.actions;
export default cartSlice.reducer;
