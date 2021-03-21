import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './SetDestination.css';
import ReactMapGL from 'react-map-gl';
import TransportationDetails from '../Components/TransportationDetails/TransportationDetails';

const SetDestination = () => {
    // const [viewport, setViewport] = useState({
    //     width: 400,
    //     height: 400,
    //     latitude: 37.7577,
    //     longitude: -122.4376,
    //     zoom: 8
    // });

    const [fromPlace, setFromPlace] = useState("");
    const [toPlace, setToPlace] = useState("");
    const [searchBtnClicked, setSearchBtnClicked] = useState(false);

    const handleSearchBtn = () => {
        const fromPlaceName = document.getElementById("pickFrom").value;
        setFromPlace(fromPlaceName);
        const toPlaceName = document.getElementById("pickTo").value;
        setToPlace(toPlaceName);
        setSearchBtnClicked(true);
    }
    return (
        <div className="container my-5">
            <div className="row d-flex justify-content-center">
                {
                    searchBtnClicked ? 
                    <div className="card-styles col-md-4 col-sm-12" style={{ width: "18rem" }}>
                        <div className="place-style">
                            <h5 style={{color:"white"}}>* {fromPlace}</h5>
                            <p style={{color:"white"}}>|</p>
                            <h5 style={{color:"white"}}>* {toPlace}</h5>
                        </div>
                        <TransportationDetails></TransportationDetails>
                    </div> :
                    <div className="card-styles col-md-4 col-sm-12" style={{ width: "18rem" }}>
                        <h6>Pick From</h6>
                        <input type="text" id="pickFrom" required />
                        <h6 className="mt-3">Pick To</h6>
                        <input type="text" id="pickTo" required />
                        <button className="btn search-button" onClick={handleSearchBtn}>Search</button>
                    </div>
                }
                <div className="col-md-8 col-sm-12">
                    <h1>Pick From: {fromPlace}</h1>
                    <h1>Pick To: {toPlace}</h1>
                    {/* <ReactMapGL
                        {...viewport}
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default SetDestination;