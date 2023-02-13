import { useState } from "react";
import ReactMap, { useMap } from "react-map-gl";
import ReactMapsGL, {
  WeatherLayer,
  DataInspector,
  LegendControl,
} from "@aerisweather/react-mapsgl";

import "mapbox-gl/dist/mapbox-gl.css";
import "@aerisweather/mapsgl/dist/mapsgl.css";

const MapController = ReactMapsGL({
  accessKeys: {
    id: import.meta.env.VITE_AERIS_ID,
    secret: import.meta.env.VITE_AERIS_SECRET,
  },
});

const MapView = () => {
  const [ready, setReady] = useState(false);
  const { map } = useMap();

  return (
    <ReactMap
      id="map"
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/light-v9"
      onLoad={() => setReady(true)}
      style={{
        width: 800,
        height: 600,
      }}
    >
      {ready && (
        <MapController strategy="mapbox" map={map?.getMap()}>
          <DataInspector event="move" />
          <LegendControl />
          <WeatherLayer id="wind-particles" />
        </MapController>
      )}
    </ReactMap>
  );
};

export default MapView;
