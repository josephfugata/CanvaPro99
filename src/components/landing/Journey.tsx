import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export default function Journey() {
  return (
    <section id="journey" className="py-20 md:py-32">
      <div className="container text-center">
        <Rocket className="h-20 w-20 mx-auto text-primary mb-6" />
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Your Creative Journey Starts Now</h2>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
          Stop dreaming about the amazing things you could create. For the price of a coffee, you can have the ultimate creative tool at your fingertips for life. No more limits, no more subscriptions, just pure creative freedom. This is the last design tool you will ever need to pay for.
        </p>
        <div className="flex justify-center">
            <Image
                src="https://picsum.photos/800/400"
                alt="A visual representation of a creative journey from idea to final design"
                width={800}
                height={400}
                data-ai-hint="creative journey"
                className="rounded-xl shadow-2xl mb-8"
            />
        </div>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
          <a href="#cta">Begin My Journey for P99</a>
        </Button>
      </div>
    </section>
  );
}
