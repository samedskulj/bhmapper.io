import React, { useState, useEffect, useRef } from "react";
import ReactMapGL from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { bosniaKulinBan } from "./Functions/bosniaKulinBan";
import { bosniaX } from "./Functions/bosniaX";
import "./Map.css";
import { bosniaTvrtko } from "./Functions/bosniaTvrtko";
import { bosniaXV } from "./Functions/bosniaXV";
import { bosniaOttoman } from "./Functions/bosniaOttoman";
import { bosniaAustro } from "./Functions/bosniaAustro";
import { bosniaModern } from "./Functions/bosniaModern";
import MapAccordion from "./MapAccordion";
import { Button, Link } from "@material-ui/core";

const Map = () => {
  const [changeMap, setChangeMap] = useState();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: mapRef.current, // container ID
      style: "mapbox://styles/mapbox/dark-v10", // style URL
      center: [17.6791, 43.9159], // starting position
      zoom: 7, // starting zoom
    });
    changeBosniaPage(changeMap, map);
  }, [changeMap]);

  const changeBosnia = (bosnia) => {
    setChangeMap(bosnia);
  };

  const changeBosniaPage = (bosnia, map) => {
    if (changeMap === "bosniakulin") {
      bosniaKulinBan(map);
    }
    if (changeMap === "bosniax") {
      bosniaX(map);
    }
    if (changeMap === "bosniatvrtko") {
      bosniaTvrtko(map);
    }
    if (changeMap === "bosniaxv") {
      bosniaXV(map);
    }
    if (changeMap === "bosniaottoman") {
      bosniaOttoman(map);
    }
    if (changeMap === "bosniaaustro") {
      bosniaAustro(map);
    }
    if (changeMap === "bosniamodern") {
      bosniaModern(map);
    }
  };

  return (
    <>
      <div className="map_page">
        <main className="map_accordion_div_flex">
          <div className="map_accordion_link">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button variant="outlined" style={{ color: "white" }}>
                Get Back
              </Button>
            </Link>
          </div>
          <div className="map_accordion_scroll">
            <MapAccordion
              changeBosnia={changeBosnia}
              changeBosniaPage={changeBosniaPage}
              changeMap={changeMap}
              setChangeMap={setChangeMap}
            />
          </div>
        </main>
        <div ref={mapRef} className="mapRef"></div>
      </div>
    </>
  );
};

export default Map;
