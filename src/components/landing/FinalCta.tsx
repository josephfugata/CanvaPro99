import { Button } from '@/components/ui/button';
import { AlertTriangle, Sparkles } from 'lucide-react';

export default function FinalCta() {
  return (
    <section id="final-cta" className="py-20 md:py-32 bg-secondary/50">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Nasa dulo ka na. Oras na para magdesisyon.</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Nakita mo na ang features, ang value, at ang napakamurang presyo. May dalawa kang pagpipilian: isara ang page na ito at magpatuloy sa pagbabayad ng mahal na subscriptions, o mag-invest ng maliit na halaga para sa lifetime na creative power.
        </p>

        <div className="bg-card/60 dark:bg-card/40 backdrop-blur-lg rounded-xl p-6 md:p-8 border border-border/50 shadow-xl mb-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                <div className="text-left flex-1">
                    <h3 className="font-headline text-2xl font-bold mb-2 flex items-center gap-2"><Sparkles className="text-primary"/>Ito ang Makukuha Mo:</h3>
                    <ul className="list-disc list-outside pl-5 text-muted-foreground space-y-1">
                        <li>Lifetime Canva Pro Access</li>
                        <li>Lahat ng Kasalukuyan at Future Pro Features</li>
                        <li>100+ Milyong Premium Assets</li>
                        <li>1TB Secure na Cloud Storage</li>
                        <li>7-Day Money-Back Guarantee</li>
                    </ul>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg flex-shrink-0 w-full md:w-auto">
                    <p className="text-muted-foreground">Isang Beses na Bayad</p>
                    <p className="text-6xl font-bold text-primary">₱99</p>
                    <p className="text-muted-foreground line-through">P3,600/taon</p>
                </div>
            </div>
        </div>

        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-2xl h-auto px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 animate-pulse whitespace-normal">
          <a href="#">Oo! Bigyan Mo Ako ng Lifetime Canva Pro for ₱99!</a>
        </Button>
        <p className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            Limited time offer lang 'to at tataas din ang presyo.
        </p>
      </div>
    </section>
  );
}
