import { useEffect, useState } from 'react';

export default function Timer({ setStop, questionNumber }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    console.log("hàm số 1")

    if (!timer) setStop(true);
    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer]);

  useEffect(() => {
    console.log("hàm số 2");
    setTimer(30);
  }, [questionNumber]);

  return timer;
}
