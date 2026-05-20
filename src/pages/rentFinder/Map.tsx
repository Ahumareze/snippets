// import React from "react";
import { GoogleMap, useLoadScript, Marker , OverlayView} from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 6.5244, // Lagos default (change later)
  lng: 3.3792,
};

// Sample pins (replace with your own data later)
const locations = [
  {
    id: 1,
    name: "Location One",
    position: { lat: 6.535, lng: 3.38 },
  },
  {
    id: 2,
    name: "Location Two",
    position: { lat: 6.52, lng: 3.36 },
  },
  {
    id: 3,
    name: "Location Three",
    position: { lat: 6.51, lng: 3.39 },
  },
];

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "", // put your key in .env
  });

  if (loadError) return <div>Map failed to load</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        {locations.map((loc) => (
            <CustomMarker
                key={loc.id}
                position={loc.position}
                label={loc.name}
            />
        ))}
    </GoogleMap>
  );
}

const CustomMarker = ({ position, label }) => (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div className="w-[200px] h-[40px] bg-white rounded-xl shadow-lg flex items-center justify-center">
        {label}
      </div>
    </OverlayView>
  );