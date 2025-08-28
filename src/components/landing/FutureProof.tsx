import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TrendingUp, Sparkles, Wand2 } from 'lucide-react';

export default function FutureProof() {
  return (
    <section id="future-proof" className="py-20 md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 md:order-2">
          <Image
            src="https://picsum.photos/600/500?random=13"
            alt="Graph showing upward trend of new features"
            width={600}
            height={500}
            data-ai-hint="future technology"
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div className="flex-1 md:order-1">
          <div className="flex items-center gap-2 text-primary mb-2">
            <TrendingUp className="h-6 w-6" />
            <span className="font-semibold">ALWAYS EVOLVING</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Future-Proof Your Creativity</h2>
          <p className="text-lg text-muted-foreground mb-8">
            This isn't a one-and-done deal. As Canva adds new features, tools, and assets to their Pro plan, you get them too. Automatically. At no extra cost. Ever.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Get All Future Updates</h4>
                <p className="text-muted-foreground">Every new Pro template, photo, and feature is yours.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Wand2 className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Includes New AI Tools</h4>
                <p className="text-muted-foreground">As Canva's AI evolves, your toolkit will too, keeping you on the cutting edge.</p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <a href="#cta">Invest in Your Future for P99</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
