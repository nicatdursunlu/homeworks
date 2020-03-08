import React from 'react'
import {IoMdClose} from 'react-icons/io'

 export const Module = ({header, closeIcon, actions, text, close}) => {

    return(
        <div className="modal">
            <header>
                {header}
                {closeIcon  &&  <button
                                className="close-btn"
                                onClick={close}>
                                  {/* <IoMdClose/> */}
                                  {/* it doesn't work */}
                                  X
                                </button>}
            </header>
            <p className="modal-text">{text}</p>
            {actions}
        </div>
    )
}

