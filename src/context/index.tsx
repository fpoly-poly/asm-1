import { IProduct } from "@/interfaces";
import React, { createContext, useReducer } from "react";

type RootState = {
    products: IProduct[];
};
type ActionProps = {
    type: string;
    payload: any;
};

export const Context = createContext<RootState>({ products: [] });

const INITIALSTATES: RootState = {
    products: [],
};

const reducer = (state: RootState, action: ActionProps) => {
    const { type, payload } = action;
    switch (type) {
        case "PRODUCT/LIST-PRODUCT": {
            return {
                ...state,
                products: payload,
            };
        }
        case "PRODUCT/ADD-PRODUCT": {
            return {
                ...state,
                products: [...state.products, payload],
            };
        }
        case "PRODUCT/DELETE-PRODUCT": {
            return {
                ...state,
                products: payload,
            };
        }
        case "PRODUCT/UPDATE-PRODUCT": {
            return {
                ...state,
                products: payload,
            };
        }

        default:
            return state;
    }
};

const Provider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, INITIALSTATES);

    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export default Provider;
