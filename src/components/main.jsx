import Menu from './menu';

export default function Main() {
  return (
    <div className="container">
      <div class="main-header">
        <h1 class="restaurant-name">레스토랑</h1>
        <form>
          <div class="input-wrapper">
            <input type="date" name="search-date" class="getInfo date" />
            <label>날짜 선택</label>
          </div>
        </form>
      </div>

      <div class="table-container">
        <table class="table-wrapper">
          <thead class="reservation-table-head">
            <tr class="reservation-table-head">
              <th class="reservation-table-header"></th>
            </tr>
          </thead>
          <tbody class="reservation-table-instance"></tbody>
        </table>
      </div>

      <Menu></Menu>
    </div>
  );
}
