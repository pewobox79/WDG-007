import './App.css';
import ModalComponent from './Components/Modal/ModalComponent';
import ModalFeature from './Components/Modal/ModalFeature';
import ModalOpenButton from './Components/Modal/ModalOpenButton';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

function App() {

  const blogArticle = {
    title: "blog 1",
    body: "blog 1 body"
  }

  return (
    <div id="map">
    <MapContainer center={[28.3852, -81.5639]} zoomDelta={3} trackResize={false} zoom={5} scrollWheelZoom={false} style={{height:"300px"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[28.3852, -81.5639]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[14.3852, -81.5639]}>
        <Popup>
          somewhere else <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}

export default App;
