import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Reservate from './components/reservate';
import * as ChangeRI from './components/changeReservationInfo';
import SearchReservation from './components/searchReservation';
import Walkin from './components/walkin';

import './css/container.css';
import './css/button.css';
import './css/table.css';
import './css/modal.css';
import './css/form-input.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reservate" element={<Reservate />} />
          <Route path="/walkin" element={<Walkin />} />
          <Route path="/search" element={<SearchReservation />} />
          <Route path="/change" element={<ChangeRI />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
