import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-20 md:py-32 bg-secondary">
      <div className="container text-center">
        <ShieldCheck className="h-20 w-20 mx-auto text-primary mb-6" />
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Your Satisfaction is Guaranteed</h2>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
          We are so confident in our offer that we provide a 7-day money-back guarantee. If you're not completely satisfied with your lifetime Canva Pro access, we'll refund your payment, no questions asked. You have nothing to lose.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <a href="#cta">Claim Your P99 Lifetime Deal</a>
        </Button>
      </div>
    </section>
  );
}
