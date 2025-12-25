"use client"

import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const getInitialTime = () => {
      const now = new Date();
      const target = new Date(now);
      target.setHours(23, 59, 59, 999); // End of the current day
      return Math.max(0, target.getTime() - now.getTime());
    };
    
    setTimeLeft(getInitialTime());

    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime !== null && prevTime > 0 ? prevTime - 1000 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return { hours, minutes, seconds };
  };
  
  if (timeLeft === null) {
    // Render a placeholder or nothing on the server and initial client render
    return (
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-2">O acesso fecha em:</p>
        <div className="flex items-center justify-center space-x-2">
          <div className="flex h-12 w-12 flex-col items-center justify-center rounded-md bg-background/50">
            <span className="text-xl font-bold font-mono">--</span>
          </div>
          <span className="text-xl font-bold">:</span>
          <div className="flex h-12 w-12 flex-col items-center justify-center rounded-md bg-background/50">
            <span className="text-xl font-bold font-mono">--</span>
          </div>
          <span className="text-xl font-bold">:</span>
          <div className="flex h-12 w-12 flex-col items-center justify-center rounded-md bg-background/50">
            <span className="text-xl font-bold font-mono">--</span>
          </div>
        </div>
      </div>
    );
  }

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="text-center">
      <p className="text-sm text-muted-foreground mb-2">O acesso fecha em:</p>
      <div className="flex items-center justify-center space-x-2">
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-md bg-background/50">
          <span className="text-xl font-bold font-mono">{hours}</span>
        </div>
        <span className="text-xl font-bold">:</span>
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-md bg-background/50">
          <span className="text-xl font-bold font-mono">{minutes}</span>
        </div>
        <span className="text-xl font-bold">:</span>
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-md bg-background/50">
          <span className="text-xl font-bold font-mono">{seconds}</span>
        </div>
      </div>
    </div>
  );
}
