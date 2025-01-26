'use client'
import { CartItem, StoreContext } from '@/context/home.context';
import React, { useEffect, useState } from 'react'

const StoreProvider = ({ children }: { children: React.ReactNode }) => {

    const [cart, setCart] = useState<CartItem[]>([]);
    useEffect(() => {
        const defaultCart = JSON.parse(window.localStorage.getItem('cart') || '[]');
        setCart(defaultCart);
    }, []);

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (itemId: string) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === itemId);
            if (!existingItem) return prevCart;

            if (existingItem.quantity > 1) {
                return prevCart.map((cartItem) =>
                    cartItem.id === itemId
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                );
            } else {
                return prevCart.filter((cartItem) => cartItem.id !== itemId);
            }
        });
    };

    const getCartCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <StoreContext.Provider
            value={{
                cart,
                addToCart,
                getCartCount,
                removeFromCart,
                getCartTotal
            }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider