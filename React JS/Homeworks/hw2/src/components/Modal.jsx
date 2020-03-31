import React from 'react'
import { MdClose } from "react-icons/md";

 export const Modal = ({header, closeIcon, actions, text, close}, { id, name, image, desc, price }, data, addToCart, props) => {

    return(
        <div className="modal">
            <header className="modal-header">
                {header}
                {closeIcon  &&  
                    <button
                        className="close-btn"
                        onClick={close}
                    ><MdClose/>   
                    </button>
                }
            </header>
            <p className="modal-text">{text}</p>



            
        </div>
    )
}
