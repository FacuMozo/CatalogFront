import React from 'react';

const Button = ({ text, btnClass, col, textColor,textWheight }) => {
    return (
        <button className={`btn ${btnClass} ${col} ${textColor} ${textWheight}`}>{text}</button>
    );
};

export default Button;
