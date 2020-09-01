import React, { useState } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';

import { ADDRESS } from '../../content/address';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 51.126604,
    lng: 16.968120
};

const Map = () => {
    const [isOpen, setIsOpen] = useState(true);

    const onClick = () => setIsOpen(!isOpen);

    // TODO: Remove 'REMOVE' from key

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}>
                <Marker
                    onClick={onClick}
                    position={center}>
                    {
                        isOpen && (
                            <InfoWindow onCloseClick={() => setIsOpen(false)}>
                                <span>{ADDRESS[0]} <br /> {ADDRESS[1]}</span>
                            </InfoWindow>
                        )
                    }
                </Marker>
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
