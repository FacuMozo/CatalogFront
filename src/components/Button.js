import React from 'react';

const Button = ({ text, btnClass }) => {
    return (
        <button className={`btn ${btnClass}`}>{text}</button>
    );
};

export default Button;
