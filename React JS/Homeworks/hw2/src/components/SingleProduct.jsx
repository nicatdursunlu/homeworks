// import React, { useState, useEffect } from 'react';
// import { IoIosStar } from "react-icons/io";
// import { Modal } from './Modal';
// import { Button } from './Button';
// import { AddToCartModal } from './AddToCartModal';

// export const SingleProduct = () => {

//     const [data, setData] = useState({ products: [] });
//     console.log(data);

//     const getData = async (url) => {
//         const response = await fetch(url);
//         const newData = await response.json();
//         setData(data => ({
//             ...newData,
//             products: [...data.products, ...newData.products]
//         }));
        
//         console.log(data);
//     };

//     useEffect(() => {
//         getData('./products.json')
//     }, []);


//     const addToCart = (name, price, url) => {
//         if(!isNaN(price)) {
//             const isAvailable = cart.find((item) => url === item.url);

//             if(isAvailable) {
//                 setCart(cart => cart.map(item => {
//                     if(item.url === url) {
//                         return {
//                             ...item,
//                             count: item.count + 1
//                         }
//                     }
//                     return item;
//                 }))
//             }
//             else {
//                 setCart(cart => [...cart, {
//                     name,
//                     price,
//                     url,
//                     count: 1
//                 }])
//             }
//         }
//     }

//     const [firstModalStatus, setFirstModalStatus] = useState(false);

//     const toggleFirstModal = () => setFirstModalStatus (v => !v);
//     const firstModalClose = () => setFirstModalStatus(false);

//     const [addToCartModalStatus, setAddToCartModalStatus] = useState(false);
//     const toggleAddToCart = () => setAddToCartModalStatus(v => !v);
//     const addToCartModalClose = () => setAddToCartModalStatus(false);

//     const [cart, setCart] = useState([]);

//     return(
//         <div>

//             {/* { firstModalStatus ? <div onClick={firstModalClose} className="back-drop"></div> : null }

//             {firstModalStatus &&   
//                 (<Modal
//                     show={firstModalStatus}
//                     closing={firstModalClose}
//                     header='Do you want to add this product to cart?'
//                     closeIcon={true}
//                     text={`Are you sure you want to add this product to cart?`}
//                     close={toggleFirstModal}

//                     actions={[
//                         <Button
//                           key={1}
//                           backgroundColor='rgba(0,0,0,0.2)'
//                           text='Add to Cart'
//                           onClick={addToCart}
//                         />,

//                         <Button
//                           key={2}
//                           backgroundColor='rgba(0,0,0,0.2)'
//                           text='Cancel'
//                           onClick={toggleFirstModal} 
//                         />]}  
                      
//                 />)
//             }


//             <div className="cart">
//                 {data.products.map(( { id, name, image, desc, price }) => (
//                     <div className="product-info">
//                         <img src={image} alt={name} className="cart-img" />
//                         <div className="cart-info">
//                             <p className="prooduct-name">{name}</p>
//                             <div className="prooduct-stars">
//                                 <IoIosStar/>
//                                 <IoIosStar/>
//                                 <IoIosStar/>
//                                 <IoIosStar/>
//                                 <IoIosStar className="star"/>
//                             </div>
//                             <p className="prooduct-description">{desc}</p>
//                             <div className="price-container">
//                                 <p className="prooduct-price">${price}</p>
//                                 <button 
//                                     className="add-to-cart-btn" 
//                                     onClick={toggleFirstModal}
//                                 >add to cart
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}        
//             </div> */}

//             {/* {addToCartModalStatus && 
//                 (<AddToCartModal 
//                     show={addToCartModalStatus}
//                     closing={addToCartModalClose}
//                     header='Do you'
//                     closeIcon={true}
//                     text={`Are you sure you want to add this product to cart?`}
//                     close={toggleAddToCart}

//                     cart={cart}
//                     setCart={setCart}

//                 />)
//             } */}

            

//         </div>
//     )
// }



// {/* <div className="carts">
//                     <div className="cart">
//                         <img src={image1} className="cart-img"/>
//                         <div className="cart-description">
//                             <p className="product-name">
//                                 <i className="italic"> by Artist</i>
//                             </p>
//                             <img src={star}/>
//                             <img src={star}/>
//                             <img src={star}/>
//                             <img src={star}/>
//                             <img src={star_black}/>
//                             <p className="product-description">
//                                 Lorem ipsum dolor sit amet, con <br/>
//                                 adipiscing elit, sed diam nonu. 
//                             </p>
//                             <p className="price">$14.99
//                                 <button className="add-to-cart">Add to cart</button>
//                             </p>
//                         </div>
//                     </div>
                
//                     <div className="cart">
//                         <img src={image2} className="cart-img"/>
//                         <div className="cart-description">
//                             <p className="product-name">Awaken the Hero
//                                 <i className="italic"> by Artist</i>
//                             </p>
//                             <img src={star}/>
//                             <img src={star}/>
//                             <img src={star}/>
//                             <img src={star}/>
//                             <img src={star_black}/>
//                             <p className="product-description">
//                                 Lorem ipsum dolor sit amet, con <br/>
//                                 adipiscing elit, sed diam nonu. 
//                             </p>
//                             <p className="price">$17.59
//                                 <button className="add-to-cart">Add to cart</button>
//                             </p>
//                         </div>
//                     </div>
//                     <div className="cart">
//                         <img src={image3} className="cart-img"/>
//                         <div className="cart-description">
//                             <p className="product-name">Oh my Deer
//                                 <i className="italic"> by Artist</i>
//                             </p>
//                             <img src={star}/>
//                             <img src={star}/>
//                             <img src={star}/>
//                             <img src={star}/>
//                             <img src={star_black}/>
//                             <p className="product-description">
//                                 Lorem ipsum dolor sit amet, con <br/>
//                                 adipiscing elit, sed diam nonu. 
//                             </p>
//                             <p className="price">$8.99
//                                 <button className="add-to-cart">Add to cart</button>
//                             </p>
//                         </div>
//                     </div>
//                     <div className="cart">
//                         <img src={image4} className="cart-img"/>
//                         <div className="cart-description">
//                             <p className="product-name">Ravenna
//                                 <i className="italic"> by Artist</i>
//                             </p>
//                             <img src={star}/>
//                             <img src={star}/>
//                             <img src={star}/>
//                             <img src={star}/>
//                             <img src={star_black}/>
//                             <p className="product-description">
//                                 Lorem ipsum dolor sit amet, con <br/>
//                                 adipiscing elit, sed diam nonu. 
//                             </p>
//                             <p className="price">$22.99
//                                 <button className="add-to-cart">Add to cart</button>
//                             </p>
//                         </div>
//                     </div>
//                 </div> */}

