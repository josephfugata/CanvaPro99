
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Timer, Zap, AlertTriangle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function Countdown() {
    const calculateTimeLeft = () => {
        // Set a fixed future date for demo purposes
        const difference = +new Date('2024-12-31T23:59:59') - +new Date();
        let timeLeft: { [key: string]: number } = {};

        if (difference > 0) {
            timeLeft = {
                Araw: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Oras: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Mins: Math.floor((difference / 1000 / 60) % 60),
                Seg: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [slotsLeft, setSlotsLeft] = useState(42);
    const totalSlots = 50;
    const slotsPercentage = (slotsLeft / totalSlots) * 100;


    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Periodically decrease the number of slots for demo purposes
        const slotTimer = setInterval(() => {
            setSlotsLeft((prevSlots) => (prevSlots > 5 ? prevSlots - 1 : prevSlots));
        }, 30000);


        return () => {
            clearTimeout(timer);
            clearInterval(slotTimer);
        };
    });

    return (
        <section id="urgency" className="py-12 md:py-20">
            <div className="container">
                <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-primary/20 shadow-2xl overflow-hidden">
                    <div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="text-center md:text-left">
                            <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                <AlertTriangle className="h-4 w-4 mr-2" />
                                Limited Time Offer!
                            </div>
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-2">Paubos na ang Oras!</h2>
                            <p className="text-muted-foreground text-lg">
                                Ang lifetime deal na 'to ay mabilis na mawawala. Kunin mo na bago mahuli ang lahat at tumaas ang presyo forever.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
                                {Object.entries(timeLeft).length > 0 ? (
                                    Object.entries(timeLeft).map(([unit, value]) => (
                                        <div key={unit} className="bg-primary/10 rounded-lg p-3">
                                            <div className="font-headline text-4xl md:text-5xl font-bold text-primary">
                                                {String(value).padStart(2, '0')}
                                            </div>
                                            <div className="text-sm uppercase text-muted-foreground">{unit}</div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-4 font-headline text-3xl font-bold text-primary">Oras na!</div>
                                )}
                            </div>
                             <div>
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-sm font-semibold text-muted-foreground">Slots na natitira:</p>
                                    <p className="text-lg font-bold text-primary">{slotsLeft} / {totalSlots}</p>
                                </div>
                                <Progress value={slotsPercentage} className="h-3 bg-primary/20" />
                            </div>
                        </div>
                    </div>
                     <div className="bg-primary/10 p-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                         <h3 className="font-headline text-xl md:text-2xl font-bold">Huwag Magpahuli!</h3>
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 animate-pulse whitespace-normal h-auto">
                            <a href="#cta">
                                <Zap className="mr-2 h-5 w-5" />
                                I-claim ang ₱99 Lifetime Deal Ngayon!
                            </a>
                        </Button>
                    </div>
                </Card>
            </div>
        </section>
    );
}
