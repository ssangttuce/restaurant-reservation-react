import { Link } from 'react-router-dom';
import Reservate from './reservate';
import Walkin from './walkin';
import * as ChangeRI from './changeReservationInfo';

export default function Menu() {
  return (
    <div class="button-container">
      <Link to="/reservate" element={<Reservate></Reservate>}>
        <button class="hoverEffect general-button" onclick="location.href = './reservation.html' ">
          예약
        </button>
      </Link>
      <Link to="/walkin" element={<Walkin></Walkin>}>
        <button class="hoverEffect general-button" onclick="location.href = './walkin.html' ">
          현장접수
        </button>
      </Link>
      <Link to="/search" element={<ChangeRI></ChangeRI>}>
        <button class="hoverEffect general-button" onclick="location.href = './cancel-change.html' ">
          예약 취소/변경
        </button>
      </Link>
    </div>
  );
}
