import React from 'react'

export const Button = ({text, backgroundColor, onClick}) => {

    return(
        <div className="buttons">
            <button
                className="btn"
                style={{backgroundColor}}
                onClick={onClick}
            >
                {text}
            </button>

        </div>
    )
}