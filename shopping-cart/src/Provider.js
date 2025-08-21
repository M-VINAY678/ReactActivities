import { Children, createContext, useState } from "react";
import products from "./products";
export const CartContext = createContext();
export default function CartProvider({ children }) {
    const [items, setItems] = useState({});
    function addItem(product) {
        setItems((prev) => {
            const existingItem = prev[product.id];
            if (existingItem) {
                return {
                    ...prev,
                    [product.id]: {
                        ...existingItem,
                        quantity: existingItem.quantity + 1
                    }
                };
            }
            return {
                ...prev,
                [product.id]: {
                    ...product,
                    quantity: 1
                }
            };
        });
    }
    function removeItem(id) {
        setItems((prev) => {
            const newItems = { ...prev };
            delete newItems[id];
            return newItems;
        })
    }
    return (
        <CartContext.Provider value={{ items, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}

