import React from 'react';
import { useHistory } from 'react-router';
import './SelectedTransport.css';

const SelectedTransport = ({ transport }) => {
    const { name, img } = transport;

    const history = useHistory();
    const handleChosenTransport = () => {
        history.push('/setDestination');
    }
    return (
        <div onClick={handleChosenTransport} className='transport-card'>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default SelectedTransport;