import React, {useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Button from './MapButton'

export default function Map() {


    const [center, setCenter]=useState([51.505, -0.09]);

    return (
        <>
            <MapContainer style={{height: "300px"}} center={center} zoom={13} scrollWheelZoom={true} viewreset>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                    <Popup>
                        <h3>London Büro</h3>
                        <p>STrassenname</p>
                        <a href="https://www.bild.de">HomePage</a>
                    </Popup>
                </Marker>
            </MapContainer>

            <h3>Wähle location</h3>
            
            <Button 
                location={[51.505, -0.09]} 
                title="myOffice" 
                setCenter={setCenter} 
                center={center}
            /> 

            <Button 
                location={[48.61680,11.46090]} 
                title="myHome" 
                setCenter={setCenter} 
                center={center}
            />
            </>
    )
}