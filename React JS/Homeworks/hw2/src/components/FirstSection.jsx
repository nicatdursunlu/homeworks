import React, { useState } from 'react';

import { AddToCartModal } from './AddToCartModal';
import { MdLocalGroceryStore} from "react-icons/md";

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

    const [addToCartModalStatus, setAddToCartModalStatus] = useState(false);

    const toggleAddToCart = () => setAddToCartModalStatus(v => !v);
    const addToCartModalClose = () => setAddToCartModalStatus(false);

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
                   
            {addToCartModalStatus && 
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
            }


        </section>
    )
}   