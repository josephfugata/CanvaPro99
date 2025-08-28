import { Button } from '@/components/ui/button';
import { AlertTriangle, Sparkles } from 'lucide-react';

export default function FinalCta() {
  return (
    <section id="final-cta" className="py-20 md:py-32 bg-secondary/50">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">You've Reached the End. Now it's Decision Time.</h2>
        <p className="text-lg text-muted-foreground mb-8">
          You've seen the features, the value, and the insane price. You have two choices: close this page and keep paying for expensive subscriptions, or make a tiny one-time investment for a lifetime of creative power.
        </p>

        <div className="bg-card/60 dark:bg-card/40 backdrop-blur-lg rounded-xl p-8 border border-border/50 shadow-xl mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="text-left flex-1">
                    <h3 className="font-headline text-2xl font-bold mb-2 flex items-center gap-2"><Sparkles className="text-primary"/>Here's What You Get:</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Lifetime Canva Pro Access</li>
                        <li>All Current & Future Pro Features</li>
                        <li>100+ Million Premium Assets</li>
                        <li>1TB Secure Cloud Storage</li>
                        <li>7-Day Money-Back Guarantee</li>
                    </ul>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg flex-shrink-0">
                    <p className="text-muted-foreground">One-Time Payment</p>
                    <p className="text-6xl font-bold text-primary">P99</p>
                    <p className="text-muted-foreground line-through">P3,600/year</p>
                </div>
            </div>
        </div>

        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-2xl px-12 py-8 rounded-full shadow-lg transition-transform transform hover:scale-105 animate-pulse">
          <a href="#">Yes! Give Me Lifetime Canva Pro for P99!</a>
        </Button>
        <p className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            This is a limited-time offer and the price will increase soon.
        </p>
      </div>
    </section>
  );
}
