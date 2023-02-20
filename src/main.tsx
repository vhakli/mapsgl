import ReactDOM from "react-dom/client";
import { MapProvider } from "react-map-gl";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MapProvider>
    <App />
  </MapProvider>
);
