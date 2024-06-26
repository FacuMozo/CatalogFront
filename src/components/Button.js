import React from 'react';

const Button = ({ text, btnClass, col }) => {
    return (
        <button className={`btn ${btnClass} ${col}`}>{text}</button>
    );
};

export default Button;
