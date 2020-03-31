import React, { useState, useEffect } from 'react';

//import { AddToCartModal } from './AddToCartModal';
import { MdLocalGroceryStore} from "react-icons/md";
//import {SingleProduct} from './SingleProduct';

import { IoIosStar } from "react-icons/io";
import { Modal } from './Modal';
import { Button } from './Button';

import logo from './img/logo1.png'; 
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import fb from './img/fb.png';
import twitter from './img/tw.png';
import mail from './img/mail.png';
import dribble from './img/dribble.png';
import vimeo from './img/vimeo.png';
import cd from './img/cd.png';
import earpod from './img/icon.png';
import cal from './img/calendar.png';

export const FirstSection = () => {

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


    const addToCart = (name, price, url) => {
        if(!isNaN(price)) {
            const isAvailable = cart.find((item) => url === item.url);

            if(isAvailable) {
                setCart(cart => cart.map(item => {
                    if(item.url === url) {
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
                    url,
                    count: 1
                }])
            }
        }
    }

    const removeFromCart = (url, count) => {
        if (count > 1) {
            setCart(cart => cart.map(item => {
                if (item.url === url) {
                    return {
                        ...item,
                        count: item.count - 1
                    }
                }
                return item
            }));
        } 
        else {
            setCart(cart => cart.filter(item => item.url !== url))
        }
    }

    const [firstModalStatus, setFirstModalStatus] = useState(false);

    const toggleFirstModal = () => setFirstModalStatus (v => !v);
    const firstModalClose = () => setFirstModalStatus(false);

    const [addToCartModalStatus, setAddToCartModalStatus] = useState(false);
    const toggleAddToCart = () => setAddToCartModalStatus(v => !v);
    //const addToCartModalClose = () => setAddToCartModalStatus(false);

    const [cart, setCart] = useState([]);

    return(
        <section className="first-section">
            <header className="header"> 
                <div className="icons-line">
                    <img src={fb} className="icon" />
                    <img src={dribble} className="icon" />
                    <img src={twitter} className="icon"/>
                    <img src={mail} className="icon"/>
                    <img src={vimeo} className="icon"/>
                </div>   
                <div className="login-resgister-links">
                    <a href="#" className="login">Login </a>
                    <span className="slash">/</span>
                    <a href="#" className="register"> Register</a> 
                    <button 
                        className="store-btn"
                        onClick={toggleAddToCart}
                    >
                        <MdLocalGroceryStore className="store-logo"/>
                        Cart
                    </button>
                </div>   
            </header>

            <div className="logo-line">
                <div className="logo">
                    <img src={logo} className="logo-png"/>
                    <div className="M-class">M</div>
                    <div className="store-class">Store</div>
                </div>
                <div className="home-links">
                    <a href="#" className="home-link">Home</a>
                    <a href="#" className="cd-link">CD's</a>
                    <a href="#" className="dvd-link">DVD's</a>
                    <a href="#" className="news-link">News</a>
                    <a href="#" className="portfolio-link">Portfolio</a>
                    <a href="#" className="contact-link">Contact us</a>
                </div>
            </div>

            <div className="images-line">
                <img src={img2} className="img2"/>
                <img src={img1} className="img1"/>
                <img src={img2} className="img2"/>
                <p className="image-text">Music event with dj
                    starting at 20.00 on august 15th
                </p>
            </div>

            <main className="main-section container">
                <div className="title">
                    <h2 className="title-text">
                        Welcome to
                        <span className="musica-title"> Musica,</span>
                        Check our latest albums
                    </h2>
                </div>
            </main>       
   
            <div className="boxes">
                <div className="box-1">
                    <h4 className="box-title">
                        <img src={cd} className="cd"/>
                        Check our cd collection 
                    </h4>
                    <p className="h4-text">
                        Donec pede justo, fringilla vel al,vulputate
                        <br/> egel, arcu. In enim justo, lorem ipsum
                    </p>
                </div>
                <div className="box-2">
                    <h4 className="box-title">
                        <img src={earpod} className="cd"/>
                        Listen before purchase 
                    </h4>
                    <p className="h4-text">
                        Donec pede justo, fringilla vel al,vulputate
                        <br/> egel, arcu.In enim justo, lorem ipsum
                    </p>
                </div>
                <div className="box-3">
                    <h4 className="box-title">
                        <img src={cal} className="calendar"/>
                        Upcoming events
                    </h4>
                    <p className="h4-text">
                        Donec pede justo, fringilla vel al,vulputate
                        <br/> egel, arcu. In enim justo, lorem ipsum
                    </p>
                </div>
            </div>

            <h5 className="album-title">
                Latest arrivals in musica
            </h5>





            { firstModalStatus ? <div onClick={firstModalClose} className="back-drop"></div> : null }

            {firstModalStatus &&   
                (<Modal
                    show={firstModalStatus}
                    closing={firstModalClose}
                    header='Do you want to add this product to cart?'
                    closeIcon={true}
                    text={`Are you sure you want to add this product to cart?`}
                    close={toggleFirstModal}
                    actions={[
                        <Button
                            key={1}
                            backgroundColor='rgba(0,0,0,0.2)'
                            text='Add to Cart'
                            //onClick={addToCart(name, price, Date.now())}
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


            {addToCartModalStatus && 
                (<div className="add-to-cart-modal">
                    
                    {cart.map(({ name, price, url, count }) => (
                        <div key={url}>
                            <h4>{name}</h4>
                            <i>{price}</i>
                            <br />
                            <b>{count}</b>
                            <br />
                            <button
                                onClick={() => removeFromCart(url, count)}
                            >X</button>
                        </div>
                    ))}
                    <h3>Total:
                        {cart.reduce((total, { price, count }) => total + price * count, 0)}
                    </h3>
                </div>
            )}


               
            {/* {addToCartModalStatus && 
                (<AddToCartModal 
                    show={addToCartModalStatus}
                    closing={addToCartModalClose}
                    header='Do you'
                    closeIcon={true}
                    text={`Are you sure you want to add this product to cart?`}
                    close={toggleAddToCart}
                    cart={cart}
                    setCart={setCart}
                />)
            } */}


        </section>
    )
}   