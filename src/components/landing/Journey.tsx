import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export default function Journey() {
  return (
    <section id="journey" className="py-20 md:py-32">
      <div className="container text-center">
        <Rocket className="h-20 w-20 mx-auto text-primary mb-6" />
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Simulan na ang Iyong Creative Journey</h2>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
          Itigil na ang pangangarap sa mga pwedeng gawin. Sa presyo ng isang kape, magkakaroon ka na ng ultimate creative tool for life. Walang nang limits, walang nang subscriptions, pure creative freedom lang. Ito na ang huling design tool na babayaran mo.
        </p>
        <div className="flex justify-center">
            <Image
                src="https://plus.unsplash.com/premium_vector-1724387809210-69ddba149ab3?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Isang visual representation ng isang creative journey mula ideya hanggang sa final design"
                width={580}
                height={500}
                data-ai-hint="creative journey"
                className="rounded-xl shadow-2xl mb-8"
            />
        </div>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 whitespace-normal h-auto">
          <a href="/checkout">Simulan ang Journey ko for ₱99</a>
        </Button>
      </div>
    </section>
  );
}
