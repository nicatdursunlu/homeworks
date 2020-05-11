import React, { createContext, useState } from 'react';
import { AsyncStorage, Keyboard } from 'react-native';

export const ShopListCTX = createContext();

export const ShopListCTXProvider = ({ children }) => {

    const [newShopList, setNewShopList] = useState("");
    const [shopList, setShopList] = useState([]);

    const inputChangeHandler = (text) => setNewShopList(text);

    const createListHandler = () => {
        if(newShopList.trim().length) {
            setShopList((shopList) => [
                { uid: Math.random().toString, title: newShopList.trim() },
                ...shopList,
            ]);
            setNewShopList("");
            Keyboard.dismiss();
            console.log(newShopList);
        }
    };


    return(
        <ShopListCTX.Provider value={{ newShopList, shopList, createListHandler, inputChangeHandler }}>
            {children}
        </ShopListCTX.Provider>
    );
};