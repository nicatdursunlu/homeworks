import React from 'react'
import PropTypes from 'prop-types';

const Button = ({text, backgroundColor, onClick}) => {

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

Button.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;