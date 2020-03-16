import React from 'react';
import star from './img/star.png';
import star_black from './img/star_black.png';

export const SingleProduct = ({name, italic, price, desc1, desc2}) => {
    return(
        <div className="single-product">
            <p className="product-name">
                {name} <i className="italic">{italic}</i>
            </p>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            <img src={star_black}/>
            <p className="product-description">
                {desc1}<br/>{desc2}
            </p>
            <p className="price">${price}
                <button className="add-to-cart">Add to cart</button>
            </p>     
        </div>
    )
}