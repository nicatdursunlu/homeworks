import React, { createContext, useState } from 'react';
import { AsyncStorage, Keyboard, View } from 'react-native';

export const UserCTX = createContext();

export const UserCTXProvider = ({ children }) => {

    // const [fields, setFields] = useState({
    //     username: "",
    //     imgUrl: "",
    // });

    const [auth, setAuth] = useState({
        username: "John Smith",
        imgUrl: "https://www.image.com/image.jpg",
    });

    const saveChangesBtnHandler =  (username, imgUrl) => {
        setAuth((auth) => ({
            ...auth,
            username,
            imgUrl,
        }));

        console.log("username: ", fields.username)
        console.log("img: ", fields.imgUrl);
    };

    // const fieldChangneHandler = (name, value) => {
    //     setFields((fields) => ({
    //         ...fields,
    //         [name]: value,
    //     }));
    // };    

    return(
        <UserCTX.Provider value={{fields, fieldChangneHandler, saveChangesBtnHandler}}>
            {children}
        </UserCTX.Provider>
    );
};