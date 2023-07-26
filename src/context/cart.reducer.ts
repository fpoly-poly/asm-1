import { IProduct } from "@/interfaces";

// type IProduct = { id: string; name: string; quantity: number };
const initialState = {
    carts: (JSON.parse(localStorage.getItem("carts") as string)?.carts || []) as IProduct[],
};

export const cartReducer = (state = initialState, action: { type: string; payload: IProduct }) => {
    switch (action.type) {
        case "cart/fetch":
            return JSON.parse(localStorage.getItem("carts") as string);

        case "cart/add":
            if (state.carts.some((cart) => cart.id === action.payload.id)) {
                const newCarts = [...state.carts].map((cart) =>
                    cart.id === action.payload.id ? { ...cart, quantity: cart.quantity + action.payload.quantity } : cart
                );

                localStorage.setItem("carts", JSON.stringify({ ...state, carts: newCarts }));
                return { ...state, carts: newCarts };
            } else {
                const newCarts = [...state.carts, action.payload];
                localStorage.setItem("carts", JSON.stringify({ ...state, carts: newCarts }));
                return { ...state, carts: newCarts };
            }

        case "cart/remove": {
            const newCarts = [...state.carts].filter((cart) => cart.id !== action.payload.id);

            localStorage.setItem("carts", JSON.stringify({ ...state, carts: newCarts }));
            return { ...state, carts: newCarts };
        }

        default:
            return state;
    }
};
