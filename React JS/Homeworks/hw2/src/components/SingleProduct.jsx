import React, { useState, useEffect } from 'react';
import { IoIosStar } from "react-icons/io";
import { Modal } from './Modal';
import { Button } from './Button';

export const SingleProduct = () => {

    const [data, setData] = useState({ products: [] });
    console.log(data);

    const getData = async (url) => {
        const response = await fetch(url);
        const newData = await response.json();
        setData(data => ({
            ...newData,
            products: [...data.products, ...newData.products]
        }));
        
        console.log(data);
    };

    useEffect(() => {
        getData('./products.json')
    }, []);

    const [cart, setCart] = useState([]);

    const addToCart = (name, price, id) => {
        if(!isNaN(price)) {
            const isAvailable = cart.find((item) => id === item.id);

            if(isAvailable) {
                setCart(cart => cart.map(item => {
                    if(item.id === id) {
                        return {
                            ...item,
                            count: item.count + 1
                        }
                    }
                    return item;
                }))
            }
            else {
                setCart(cart => [...cart, {
                    name,
                    price,
                    id,
                    count: 1
                }])
            }
        }
    }

    const [firstModalStatus, setFirstModalStatus] = useState(false);

    const toggleFirstModal = () => setFirstModalStatus (v => !v);
    const firstModalClose = () => setFirstModalStatus(false);
 

    return(
        <div>

            { firstModalStatus ? <div onClick={firstModalClose} className="back-drop"></div> : null }

            {firstModalStatus &&   
                (<Modal
                    show={firstModalStatus}
                    closing={firstModalClose}
                    header='Do you want to delete this file?'
                    closeIcon={true}
                    text={`Once you delete this file, it won't be possible to undo this action.\n
                        Are you sure you want do delete it`}
                    close={toggleFirstModal}

                    actions={[
                        <Button
                          key={1}
                          backgroundColor='rgba(0,0,0,0.2)'
                          text='Ok'
                          onClick={() => alert('File deleted')}
                        />,

                        <Button
                          key={2}
                          backgroundColor='rgba(0,0,0,0.2)'
                          text='Cancel'
                          onClick={toggleFirstModal} 
                        />]}  
                      
                />)
            }


            <div className="cart">
                {data.products.map(( { id, name, image, desc, price }) => (
                    <div className="product-info">
                        <img src={image} alt={name} className="cart-img" />
                        <div className="cart-info">
                            <p className="prooduct-name">{name}</p>
                            <div className="prooduct-stars">
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar className="star"/>
                            </div>
                            <p className="prooduct-description">{desc}</p>
                            <div className="price-container">
                                <p className="prooduct-price">${price}</p>
                                <button 
                                    className="add-to-cart-btn" 
                                    onClick={toggleFirstModal}
                                >add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}        
            </div>
        </div>
    )
}



{/* <div className="carts">
                    <div className="cart">
                        <img src={image1} className="cart-img"/>
                        <div className="cart-description">
                            <p className="product-name">
                                <i className="italic"> by Artist</i>
                            </p>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star_black}/>
                            <p className="product-description">
                                Lorem ipsum dolor sit amet, con <br/>
                                adipiscing elit, sed diam nonu. 
                            </p>
                            <p className="price">$14.99
                                <button className="add-to-cart">Add to cart</button>
                            </p>
                        </div>
                    </div>
                
                    <div className="cart">
                        <img src={image2} className="cart-img"/>
                        <div className="cart-description">
                            <p className="product-name">Awaken the Hero
                                <i className="italic"> by Artist</i>
                            </p>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star_black}/>
                            <p className="product-description">
                                Lorem ipsum dolor sit amet, con <br/>
                                adipiscing elit, sed diam nonu. 
                            </p>
                            <p className="price">$17.59
                                <button className="add-to-cart">Add to cart</button>
                            </p>
                        </div>
                    </div>
                    <div className="cart">
                        <img src={image3} className="cart-img"/>
                        <div className="cart-description">
                            <p className="product-name">Oh my Deer
                                <i className="italic"> by Artist</i>
                            </p>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star_black}/>
                            <p className="product-description">
                                Lorem ipsum dolor sit amet, con <br/>
                                adipiscing elit, sed diam nonu. 
                            </p>
                            <p className="price">$8.99
                                <button className="add-to-cart">Add to cart</button>
                            </p>
                        </div>
                    </div>
                    <div className="cart">
                        <img src={image4} className="cart-img"/>
                        <div className="cart-description">
                            <p className="product-name">Ravenna
                                <i className="italic"> by Artist</i>
                            </p>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star_black}/>
                            <p className="product-description">
                                Lorem ipsum dolor sit amet, con <br/>
                                adipiscing elit, sed diam nonu. 
                            </p>
                            <p className="price">$22.99
                                <button className="add-to-cart">Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div> */}

