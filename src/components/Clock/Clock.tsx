import * as dayjs from "dayjs";
import { useEffect, useState } from "react";
import "./clock.css";

export const Clock = () => {
  const d = new Date();
  const dateToday = dayjs(d).format("dddd, MMMM D, YYYY HH:mm:ss a");
  const [date, setDate] = useState(dateToday);
  const updateTime = () => {
    let time = new Date();
    setDate(dayjs(time).format("dddd, MMMM D, YYYY HH:mm:ss a"));
  };
  setInterval(updateTime, 1000);

  return (
    <div className="date_container text-slate-500 font-thin text-center text-sm">
      <p>{date}</p>
    </div>
  );
};
