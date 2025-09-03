import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HardDrive, Cloud, Lock } from 'lucide-react';

export default function OneTBStorage() {
  return (
    <section id="storage" className="py-20 md:py-32 bg-secondary/50">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 md:order-2">
          <Image
            src="/creative-all-in-one-place.webp"
            alt="Icon ng cloud storage na may mga file"
            width={600}
            height={500}
            data-ai-hint="cloud storage"
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div className="flex-1 md:order-1 text-center md:text-left">
          <div className="flex items-center gap-2 text-primary mb-2 justify-center md:justify-start">
            <HardDrive className="h-6 w-6" />
            <span className="font-semibold">1TB CLOUD STORAGE</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Lahat ng Creative Work Mo, Nasa Isang Lugar Lang</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
            Sa 1TB na cloud storage, safe mong maiimbak lahat ng iyong designs, photos, videos, at brand assets. Hindi mo na kailangan maglipat-lipat ng files sa iba't ibang drives.
          </p>
          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Cloud className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Access Kahit Saan</h4>
                <p className="text-muted-foreground">Ang files mo ay available sa kahit anong device, kahit kailan, kahit saan.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Lock className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Ligtas at Secure</h4>
                <p className="text-muted-foreground">Ang iyong creative work ay protektado ng world-class na security.</p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="font-headline bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 whitespace-normal h-auto">
            <a href="#cta">Kunin ang 1TB Storage ko for ₱99</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
