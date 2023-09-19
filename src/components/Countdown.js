import { useState, useEffect } from "react";

export const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const startdate = "21 September 2024";
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const weddingdate = new Date(startdate);
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    });
    const totalSeconds = (weddingdate - currentDate) / 1000;

    setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
    setHours(Math.floor(totalSeconds / 3600) % 24);
    setMinutes(Math.floor(totalSeconds / 60) % 60);
    setSeconds(Math.floor(totalSeconds % 60));
  }, [currentDate]);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <p>
      {days} days {hours} hours {minutes} minutes {seconds} seconds
    </p>
  );
};
