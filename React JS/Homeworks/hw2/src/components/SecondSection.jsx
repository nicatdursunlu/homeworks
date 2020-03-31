import React, {useState, useEffect} from 'react';

import {SingleProduct} from './SingleProduct';

import cd from './img/cd.png';
import earpod from './img/icon.png';
import cal from './img/calendar.png';



export const SecondSection = () => {

    return(
       <section className="second-section"> 
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

                <SingleProduct/>


                {/* <div className="carts">
                    <div className="cart">
                        <div className="cart-description">
                        <img src={image1} className="cart-img"/>
                        <img src={image2} className="cart-img"/>

                            { data.products.map(({ name, url, id, image, italic, price, desc1, desc2}) => ( 
                                <SingleProduct 
                                    key={url}
                                    image={image}
                                    name={name}
                                    italic={italic}
                                    desc1={desc1}
                                    desc2={desc2}
                                    price={price}
                                /> ))
                            } 
                        </div>
                    </div>
                    
                    
                 </div> */}

        </section>
        
    )
}