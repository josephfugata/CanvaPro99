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
            alt="Graph na nagpapakita ng pataas na trend ng mga bagong features"
            width={600}
            height={500}
            data-ai-hint="future technology"
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div className="flex-1 md:order-1 text-center md:text-left">
          <div className="flex items-center gap-2 text-primary mb-2 justify-center md:justify-start">
            <TrendingUp className="h-6 w-6" />
            <span className="font-semibold">Laging Nag-E-Evolve</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Future-Proof ang Iyong Pagkamalikhain</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
            Hindi ito isang beses lang. Habang nagdadagdag ang Canva ng mga bagong features, tools, at assets sa kanilang Pro plan, makukuha mo rin 'yon. Automatic. Walang dagdag na bayad. Kailanman.
          </p>
          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Lahat ng Future Updates, Kasama</h4>
                <p className="text-muted-foreground">Bawat bagong Pro template, photo, at feature ay sa'yo na.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Wand2 className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Kasama ang mga Bagong AI Tools</h4>
                <p className="text-muted-foreground">Habang nag-e-evolve ang AI ng Canva, mag-e-evolve din ang toolkit mo para laging kang updated.</p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 whitespace-normal h-auto">
            <a href="#cta">Mag-invest sa Future mo for ₱99</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
