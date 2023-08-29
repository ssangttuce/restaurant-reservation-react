import { Link } from 'react-router-dom';
import Main from './main';

export default function Walkin() {
  return (
    <div className="container">
      <h1>현장접수하기</h1>
      <form>
        <div className="input-wrapper">
          <select name="hour" className="getInfo hour" required></select>
          <select name="minute" className="getInfo minute" required></select>
          <label>입장 시간</label>
        </div>
        <div className="input-wrapper">
          <input type="number" id="people" className="getInfo" name="people" min="1" max="10" value="1" required />
          <label for="people">인원수</label>
        </div>
        <div className="input-wrapper">
          <select name="table-num" className="getInfo table-num" id="table-num" required></select>
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
  );
}
