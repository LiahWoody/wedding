import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import moment from "moment";
import "./Calendar.css";

function Calendar() {
  return (
    <div className="Calendar">
      <header className="Calendar-header">
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
          />
        </div>
      </header>
    </div>
  );
}

export default Calendar;
