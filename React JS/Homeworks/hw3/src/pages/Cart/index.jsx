import React, { useContext } from 'react';
import { Layout } from '../../commons';

import { CartContext } from '../../context/cart';
//import {CartContextProvider} from '../../context/cart';


export const Cart = () => {

    const {cartProducts, removeFromCart} = useContext(CartContext);

    return (
        <Layout>
            <h1>Cart</h1>
            {cartProducts.map(({ uniqueLocalId, name, price, image }) => (
                <div key={ uniqueLocalId }>
                    <img src={image} alt={name} />
                    <h5>{name} --- {price}</h5>
                    <button onClick={() =>  removeFromCart(uniqueLocalId)}>Delete</button>
                </div>
            ))}
        </Layout>
    )
}
