import React, { useContext } from 'react';
import {SingleProductListItem} from './SingleProductListeItem'


export const ProductsList = ({ image, name, price, id }) => {

    return(
        <div>
            {/* {products.map(item => (
                <SingleProductListItem
                    key={item.id}
                    {...item}
                />
            ))} */}

            {/* {data.products.map(({ image, name, price, id }) => (
                <h1>{name}</h1>
            ))} */}
        </div>
    )
}