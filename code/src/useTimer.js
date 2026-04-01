import { useState, useEffect } from 'react';

export function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);

  const stopTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return {
    seconds,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer
  };
}
