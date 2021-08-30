import React, {useState, useEffect} from 'react'
import ReactMapGL from "react-map-gl"

const Map = () => {

    const bounds = [[44.3053476,19.5961467], [44.3053476, 19.5961467]];

    const [viewport, setViewPort] = useState({
        latitude: 44.1280,
        longitude: 18.1178,
        width: "100vw",
        height: "100vh",
        zoom: 15
    })

    const currentPosition = (position) => {
        setViewPort({...viewport, latitude: position.coords.latitude, longitude: position.coords.longitude});
    }
    return (
        <ReactMapGL 
        {...viewport} 
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={viewport => {
            setViewPort(viewport);
        }}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        maxZoom="15"
        minZoom="7.2"
        max
        > 
        
        </ReactMapGL>
    ) 
}
 

export default Map
