import React from 'react';
import './Transport.css';

const Transport = ({transport}) => {
    const {name, img} = transport;

    const handleChosenTransport = () => {
        
    }
    return (
        <div onClick={handleChosenTransport} className='transport-card'>
            <img src={img} alt=""/>
            <h3>{name}</h3>
        </div>
    );
};

export default Transport;