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
  }, [changeMap]);

  const changeBosnia = (bosnia) => {
    setChangeMap(bosnia);
  };

  return (
    <>
      <button onClick={() => changeBosnia("bosniax")}>Bosnia X</button>
      <button onClick={() => changeBosnia("bosniakulin")}>
        Bosnia Kulin Ban
      </button>
      <button onClick={() => changeBosnia("bosniatvrtko")}>
        Bosnia Tvrtko
      </button>
      <button onClick={() => changeBosnia("bosniaxv")}>Bosnia XV</button>
      <button onClick={() => changeBosnia("bosniaottoman")}>
        Bosnia Ottoman
      </button>
      <button onClick={() => changeBosnia("bosniaaustro")}>
        Bosnia Austro
      </button>
      <button onClick={() => changeBosnia("bosniamodern")}>
        Bosnia Modern
      </button>
      <div ref={mapRef} className="mapRef"></div>
    </>
  );
};

export default Map;
