import { Button } from '@/components/ui/button';
import { Users, Heart } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" className="py-20 md:py-32 bg-secondary/50">
      <div className="container text-center">
        <Users className="h-20 w-20 mx-auto text-primary mb-6" />
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Sali na sa Masayang Community!</h2>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
          Hindi ka lang bumibili ng tool; sumasali ka sa isang pamilya ng mahigit 10,000+ na masayang creatives, marketers, at entrepreneurs na nag-avail na. Mag-share ng tips, ma-inspire, at sabay-sabay tayong umangat.
        </p>
        <div className="flex justify-center items-center gap-2 text-lg font-semibold text-muted-foreground mb-8">
            <Heart className="text-red-500 fill-current" />
            <span>10,000+ Members and counting!</span>
        </div>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
          <a href="#cta">Sali sa Community for ₱99!</a>
        </Button>
      </div>
    </section>
  );
}
