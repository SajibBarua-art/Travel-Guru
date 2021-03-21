import React, { useEffect, useState } from 'react';
import transportsFakeData from '../../transportsFakeData.json';
import Transport from '../SelectedTransport/SelectedTransport';

const Home = () => {
    const [transportsType, setTransportsType] = useState([]);
    useEffect(() => {
        setTransportsType(transportsFakeData);
    }, [])
    return (
        <div>
            <h2 className="text-center info mt-5">Click your favorite transportation type</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    transportsType.map(transport => <Transport
                        key={transport.name}
                        transport={transport}
                    ></Transport>)
                }
            </div>
        </div>
    );
};

export default Home;