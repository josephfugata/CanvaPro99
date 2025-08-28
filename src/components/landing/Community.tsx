import { Button } from '@/components/ui/button';
import { Users, Heart } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" className="py-20 md:py-32 bg-secondary/50">
      <div className="container text-center">
        <Users className="h-20 w-20 mx-auto text-primary mb-6" />
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Join a Thriving Community</h2>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
          You're not just getting a tool; you're joining a family of over 10,000+ happy creatives, marketers, and entrepreneurs who said YES to this incredible deal. Share tips, get inspired, and grow together.
        </p>
        <div className="flex justify-center items-center gap-2 text-lg font-semibold text-muted-foreground mb-8">
            <Heart className="text-red-500 fill-current" />
            <span>10,000+ Members and counting!</span>
        </div>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
          <a href="#cta">Join Our Community for P99</a>
        </Button>
      </div>
    </section>
  );
}
