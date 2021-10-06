import React from 'react';
import './Button.css';

const Button = ({link,name}) => {
    return(
        <>
            <button>
                <div className="button-text">
                    <a href={link}>{name}</a>
                </div>
            </button>
        </>
    );
};

export default Button;