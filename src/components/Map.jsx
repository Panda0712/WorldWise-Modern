/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from 'react-leaflet';
import { useNavigate } from 'react-router-dom';

import styles from './Map.module.css';
import { usePosition } from '../hook/usePosition';
import { useCities } from '../context/useCities';
import Button from './Button';
import { useGeolocation } from '../hook/useGeoLocation';
import Spinner from './Spinner';

function Map() {
  const navigate = useNavigate();
  const { cities } = useCities();
  const [position, setPosition] = useState([40, -2]);

  const [lat, lng] = usePosition();

  const {
    isLoading,
    position: personalLocation,
    getPosition,
  } = useGeolocation();

  function handleUseLocation() {
    if (isLoading) return <Spinner />;
    getPosition();
    const { lat, lng } = personalLocation;
    if (lat && lng) {
      setPosition([lat, lng]);
      navigate(`form?lat=${lat}&lng=${lng}`);
    }
  }

  useEffect(() => {
    if (lat && lng) setPosition([lat, lng]);
  }, [lat, lng]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map(city => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
              {city.emoji} <br /> {city.cityName}
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={position} />
        <DetectClick />
      </MapContainer>
      <div className={styles.mapButton}>
        <Button type="location" onClick={handleUseLocation}>
          {isLoading ? 'Loading...' : 'Use your location'}
        </Button>
      </div>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvent({
    click: e => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
