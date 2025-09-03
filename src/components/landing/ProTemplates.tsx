import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LayoutTemplate, Files, Sparkles } from 'lucide-react';

export default function ProTemplates() {
  return (
    <section id="templates" className="py-20 md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center gap-2 text-primary mb-2 justify-center md:justify-start">
            <LayoutTemplate className="h-6 w-6" />
            <span className="font-semibold">PREMIUM TEMPLATES</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Huwag Magsimula sa Blangkong Page</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
            Magka-access sa mahigit 610,000+ premium, professionally designed na templates para sa kahit anong project na naiisip mo. Pumili lang ng template, i-customize, at tapos na!
          </p>
          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Files className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Malawak at Iba't-ibang Library</h4>
                <p className="text-muted-foreground">Hanapin ang perfect template para sa presentations, social posts, videos, at marami pang iba.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Mga Bagong Design Araw-araw</h4>
                <p className="text-muted-foreground">Ang aming library ay laging updated sa mga bago at on-trend na designs.</p>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 whitespace-normal h-auto">
                <a href="/checkout">I-unlock Lahat ng Templates for ₱99</a>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="/canva-templates.webp"
            alt="Isang collage ng mga premium Canva templates"
            width={600}
            height={500}
            data-ai-hint="canva templates"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
