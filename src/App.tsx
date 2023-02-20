import { useState } from "react";
import ReactMap, { MapRef } from "react-map-gl";
import ReactMapsGL, { WeatherLayer } from "@aerisweather/react-mapsgl";

import "mapbox-gl/dist/mapbox-gl.css";
import "@aerisweather/mapsgl/dist/mapsgl.css";

const MapController = ReactMapsGL({
  accessKeys: {
    id: import.meta.env.VITE_AERIS_ID,
    secret: import.meta.env.VITE_AERIS_SECRET,
  },
});

const MapView = () => {
  const [map, setMap] = useState<MapRef | null>();
  const [layer, setLayer] = useState(true);

  return (
    <>
      <ReactMap
        ref={(ref) => setMap(ref)}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v9"
        style={{
          width: 800,
          height: 600,
        }}
      >
        <MapController strategy="mapbox" map={map?.getMap()}>
          {layer && <WeatherLayer id="wind-particles" />}
        </MapController>
      </ReactMap>
      <button onClick={() => setLayer(!layer)}>
        {layer ? "layer off" : "layer on"}
      </button>
    </>
  );
};

export default MapView;
