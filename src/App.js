import { BrowserRouter, Routes, Route } from 'react-router-dom';
import main from './components/main';
import reservate from './components/reservate';
import { changeReservationInfo as changeRI } from './components/changeReservationInfo';
import searchReservation from './components/searchReservation';
import walkin from './components/walkin';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<main />} />
          <Route path="/" element={<reservate />} />
          <Route path="/" element={<changeRI />} />
          <Route path="/" element={<searchReservation />} />
          <Route path="/" element={<walkin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
