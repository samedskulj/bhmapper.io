import React, {useState, useEffect} from 'react'
import ReactMapGL from "react-map-gl"

const Map = () => {
    const [viewport, setViewPort] = useState({
        latitude: 44.1280,
        longitude: 18.1178,
        width: "100vw",
        height: "100vh",
        zoom: 10
    })
   
    return (
        <ReactMapGL 
        {...viewport} 
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={viewport => {
            setViewPort(viewport);
        }}
        mapStyle="mapbox://styles/mapbox/light-v10"
        > 
        
        </ReactMapGL>
    ) 
}
 

export default Map
