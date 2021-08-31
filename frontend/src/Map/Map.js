import React, { useState, useEffect, useRef } from "react";
import ReactMapGL from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { bosniaX } from "./Functions/bosniaX";
import { bosniaKulinBan } from "./Functions/bosniaKulinBan";
import "./Map.css";

const Map = () => {
  const [changeMap, setChangeMap] = useState();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: mapRef.current, // container ID
      style: "mapbox://styles/mapbox/light-v10", // style URL
      center: [17.6791, 43.9159], // starting position
      zoom: 7, // starting zoom
    });

    if (changeMap === "bosniakulin") {
      bosniaKulinBan(map);
    }

    if (changeMap === "bosniax") {
      bosniaX(map);
    }
  }, [changeMap]);

  const changeBosniaX = () => {
    setChangeMap("bosniax");
  };

  const changeBosniaKulin = () => {
    setChangeMap("bosniakulin");
  };

  return (
    <>
      <button onClick={changeBosniaX}>Bosnia X</button>
      <button onClick={changeBosniaKulin}>Bosnia Kulin Ban</button>
      <div ref={mapRef} className="mapRef"></div>
    </>
  );
};

export default Map;
