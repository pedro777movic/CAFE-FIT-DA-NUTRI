"use client"

import { useState, useEffect } from 'react';

interface MinimalCountdownProps {
  hours: number;
}

export function MinimalCountdown({ hours }: MinimalCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const getInitialTime = () => {
      const now = new Date();
      const target = new Date(now);
      target.setHours(target.getHours() + hours);
      return Math.max(0, target.getTime() - now.getTime());
    };
    
    setTimeLeft(getInitialTime());

    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime !== null && prevTime > 0 ? prevTime - 1000 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [hours]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };
  
  if (timeLeft === null) {
    return (
        <div className="text-sm font-mono text-red-500/70" style={{'--h': `'--'`, '--m': `'--'`, '--s': `'--'`} as React.CSSProperties}>
            --:--:--
        </div>
    );
  }

  const formattedTime = formatTime(timeLeft);

  return (
    <div className="text-sm font-mono text-red-500/70">
      {formattedTime}
    </div>
  );
}
