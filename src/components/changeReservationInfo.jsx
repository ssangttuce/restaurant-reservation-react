import { Link } from 'react-router-dom';
import SearchReservation from './searchReservation';

export default function ChangeReservationInfo() {
  return (
    <>
      <div className="container">
        <h1>예약 변경</h1>
        <form>
          <div className="input-wrapper">
            <input type="date" name="search-date" className="getInfo date" />
            <label>변경 날짜 선택</label>
          </div>
          <div className="input-wrapper">
            <select name="reservation-hour" className="hour getInfo" required></select>
            <select name="reservation-minute" className="getInfo minute" required></select>
            <label>변경 시간</label>
          </div>
          <div className="input-wrapper">
            <input
              type="number"
              className="getInfo personnel"
              name="reservation-people"
              min="1"
              max="10"
              value="1"
              required
            />
            <label>인원수</label>
          </div>
          <div className="input-wrapper">
            <select name="reservation-tablenum" className="getInfo table-num" required></select>
            <label>테이블 번호</label>
          </div>
          <button type="submit" className="hoverEffect general-button">
            완료
          </button>
        </form>
        <Link to="/search" element={<SearchReservation></SearchReservation>}>
          <button className="hoverEffect back-button" onclick="location.href = './cancel-change.html' ">
            뒤로가기
          </button>
        </Link>
      </div>
    </>
  );
}
