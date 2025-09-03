import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-20 md:py-32 bg-secondary/50">
      <div className="container text-center bg-card/60 dark:bg-card/40 backdrop-blur-xl rounded-xl p-8 md:p-16 border border-border/50">
        <ShieldCheck className="h-20 w-20 mx-auto text-primary mb-6" />
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Garantisado ang Iyong Kasiyahan</h2>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
          Sobrang kampante kami sa aming offer kaya nagbibigay kami ng 7-day money-back guarantee. Kung hindi ka kuntento sa iyong lifetime Canva Pro access, ire-refund namin ang bayad mo, no questions asked. Wala kang talo.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <a href="/checkout">I-claim ang ₱99 Lifetime Deal Mo</a>
        </Button>
      </div>
    </section>
  );
}
