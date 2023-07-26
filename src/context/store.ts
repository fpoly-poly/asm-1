import { useSelector } from "react-redux";
import { cartReducer } from "./cart.reducer";
import { combineReducers, createStore } from "redux";

const countReducer = (state = { count: 10 }, action: any) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload };

        default:
            return state;
    }
};

const productReducer = (state = { products: [] }, action: { type: string; payload: any }) => {
    switch (action.type) {
        case "product/list-product":
            return { ...state, products: action.payload };
        case "product/add-product":
            return { ...state, products: [...state.products, action.payload] };
        case "product/update-product":
            return { ...state, products: action.payload };
        case "product/delete-product":
            return { ...state, products: action.payload };

        default:
            return state;
    }
};

const store = createStore(combineReducers({ countReducer, productReducer, cartReducer }));

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector<RootState>

export default store;
