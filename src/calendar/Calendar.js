import ReactCalendar from "react-calendar";
import "./Calendar.css";

function Calendar() {
  return (
    <div className="Calendar">
      <header className="Calendar-header">
        <div className="Calendar-year-month">2023년 1월</div>
        <div>
          <ReactCalendar
            defaultValue={new Date(2023, 0, 7)}
            formatDay={(locale, date) => date.toLocaleString('en', {day : 'numeric'})}
            showNeighboringMonth={false}
            calendarType='US'
            prevLabel={null}
            prev2Label={null}
            nextLabel={null}
            next2Label={null}
            tileDisabled={(props) => true}
            showNavigation={false}
          />
        </div>
      </header>
    </div>
  );
}

export default Calendar;
