import { Link } from 'react-router-dom';
import Main from './main';

export default function SearchReservation() {
  return (
    <div className="container">
      <div className="main-header">
        <h1>예약 조회하기</h1>
        <form>
          <label for="name">예약자명</label>
          <input type="text" id="search-name" name="name" />
          <button type="button" className="hoverEffect search-button">
            조회
          </button>
        </form>
      </div>

      <div className="table-container">
        <table className="table-wrapper">
          <thead className="reservation-table-head">
            <tr className="reservation-table-head">
              <th className="reservation-table-header">날짜</th>
              <th className="reservation-table-header">시간</th>
              <th className="reservation-table-header">테이블</th>
              <th className="reservation-table-header">인원</th>
              <th className="reservation-table-header">작업</th>
            </tr>
          </thead>
          <tbody id="reservation-list"></tbody>
        </table>
      </div>

      <div id="cancel-check-modal">
        <h1>해당 예약 정말로 취소하시겠습니까?</h1>
        <form>
          <div>
            <table className="table-wrapper">
              <thead className="reservation-table-head">
                <tr className="reservation-table-head">
                  <th className="reservation-table-header">날짜</th>
                  <th className="reservation-table-header">시간</th>
                  <th className="reservation-table-header">테이블</th>
                  <th className="reservation-table-header">인원</th>
                </tr>
              </thead>
              <tbody id="cancel-reservation"></tbody>
            </table>
          </div>
          <button type="submit" className="hoverEffect">
            예약취소
          </button>
        </form>
        <button className="hoverEffect" onclick="location.href = './cancel-change.html' ">
          뒤로가기
        </button>
      </div>

      <Link to="/" element={<Main></Main>}>
        <button className="hoverEffect" onclick="location.href = './MainTable.html' ">
          뒤로가기
        </button>
      </Link>
    </div>
  );
}
