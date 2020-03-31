// import React from 'react';
// import { MdClose } from "react-icons/md";


// export const AddToCartModal = (cart, setCart) => {

//     const removeFromCart = (url, count) => {
//         if (count > 1) {
//             setCart(cart => cart.map(item => {
//                 if (item.url === url) {
//                     return {
//                         ...item,
//                         count: item.count - 1
//                     }
//                 }
//                 return item
//             }))
//         } else {
//             setCart(cart => cart.filter(item => item.url !== url))
//         }
//     }


//     return(
//         <div className="add-to-cart-modal">
            
            

//             {cart.map(({ name, price, url, count }) => (
//                 <div key={url}>
//                     <h4>{name}</h4>
//                     <i>{price}</i>
//                     <br />
//                     <b>{count}</b>
//                     <br />
//                     {/* <button
//                         onClick={() => removeFromCart(url, count)}
//                     ><MdClose/></button> */}
//                 </div>
//             ))}

//             <h3>Total:
//                 {cart.reduce((total, { price, count }) => total + price * count, 0)}
//             </h3>

//         </div>
//     )
// }