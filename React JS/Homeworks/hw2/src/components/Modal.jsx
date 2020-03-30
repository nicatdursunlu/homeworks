import React from 'react'
import { MdClose } from "react-icons/md";

 export const Modal = ({header, closeIcon, actions, text, close}, props) => {

    return(
        <div className="modal">
            <header>
                {header}
                {closeIcon  &&  
                    <button
                        className="close-btn"
                        onClick={close}
                    >
                        <MdClose/>
                    </button>
                }
            </header>
            <p className="modal-text">{text}</p>
            {actions}
        </div>
    )
}
