import React, { useState, useEffect, createContext } from 'react';

export const productsContext = createContext();

export const ProductsContextProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const res = await fetch('http://localhost:3000/products');
        const data = await res.json();

        setProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <productsContext.Provider value={products}>
            {children}
        </productsContext.Provider>
    )
}
