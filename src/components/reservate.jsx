import { Link } from 'react-router-dom';
import Main from './main';

export default function Reservate() {
  return (
    <>
      <div className="container">
        <h1>예약하기</h1>
        <form>
          <div className="input-wrapper">
            <input type="text" className="getInfo" id="name" name="name" required />
            <label for="name">예약자명</label>
          </div>
          <div className="input-wrapper">
            <input
              type="tel"
              className="getInfo"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              required
            />
            <label for="name">전화번호</label>
          </div>
          <div className="input-wrapper">
            <input type="date" name="date" className="getInfo date" />
            <label>날짜 선택</label>
          </div>
          <div className="input-wrapper">
            <select name="hour" className="hour getInfo" required></select>
            <select name="minute" className="getInfo minute" required></select>
            <label>입장 시간</label>
          </div>

          <div className="input-wrapper">
            <input type="number" className="getInfo personnel" name="personnel" min="1" max="10" value="1" required />
            <label>인원수</label>
          </div>

          <div className="input-wrapper">
            <select name="tablenumber" className="getInfo table-num" required></select>
            <label for="table-num">테이블 번호</label>
          </div>
          <button type="submit" className="hoverEffect general-button">
            완료
          </button>
        </form>

        <Link to="/" element={<Main></Main>}>
          <button className="hoverEffect back-button" onclick="location.href = './MainTable.html' ">
            뒤로가기
          </button>
        </Link>
      </div>
    </>
  );
}
