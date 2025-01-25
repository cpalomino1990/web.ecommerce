

import { createContext, useContext } from 'react'

export interface CartItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
    imageUrl: string;
}

export type StoreContext = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    getCartCount: () => number;
}

export const defaultStoreContext: StoreContext = {
    cart: [],
    addToCart: () => { },
    getCartCount: () => 0,
};

export const StoreContext = createContext<StoreContext>(defaultStoreContext);
export const useStoreContext = () => useContext(StoreContext)