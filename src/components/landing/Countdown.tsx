"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Countdown() {
  const calculateTimeLeft = () => {
    // Set a fixed future date for demo purposes
    const difference = +new Date('2024-12-31T23:59:59') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [slotsLeft, setSlotsLeft] = useState(42);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }
    timerComponents.push(
      <div key={interval} className="flex flex-col items-center">
        <span className="font-headline text-4xl md:text-5xl font-bold text-primary">
          {String(timeLeft[interval as keyof typeof timeLeft]).padStart(2, '0')}
        </span>
        <span className="text-sm uppercase text-muted-foreground">{interval}</span>
      </div>
    );
  });

  return (
    <section id="urgency" className="py-12 md:py-20">
      <div className="container text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-2 text-accent">Limited Time Offer!</h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          This lifetime deal is disappearing fast. Secure your spot before it's too late.
        </p>
        <div className="flex justify-center gap-4 md:gap-8 mb-8">
          {timerComponents.length ? timerComponents : <span className="text-2xl font-bold">Time's up!</span>}
        </div>
        <div className="mb-8">
            <p className="text-xl font-semibold"><span className="text-primary font-bold text-2xl">{slotsLeft}</span> slots left!</p>
        </div>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
          <a href="#cta">Claim Your P99 Lifetime Deal Now</a>
        </Button>
      </div>
    </section>
  );
}
