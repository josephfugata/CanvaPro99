import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const includedFeatures = [
  "100+ milyong premium stock photos, videos, audio, at graphics",
  "Magic Studio: Lahat ng pinakamagandang AI tools sa isang lugar",
  "Background Remover: Agad na tanggalin ang backgrounds ng image at video",
  "Content Planner: Mag-schedule ng social media posts direkta mula sa Canva",
  "1TB na cloud storage para sa iyong designs at assets",
  "Magic Resize: Agad na i-resize ang designs para sa anumang platform",
  "Pro Templates: Access sa libu-libong premium templates",
  "Animation Pro: Gumawa ng premium animations nang madali",
  "I-save ang designs bilang templates para magamit ng team mo",
  "Real-time team collaboration features",
  "Version History: Ibalik ang mga nakaraang bersyon ng iyong designs",
  "Transparent na Images: Mag-download ng PNGs na walang background",
  "High-Quality na Downloads: SVG, PDF, at high-resolution outputs"
];

export default function WhatsIncluded() {
  return (
    <section id="included" className="py-20 md:py-32">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Ang Kumpletong Canva Pro Experience</h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            Hindi ito "lite" version. Makukuha mo ang buo at walang limitasyong access sa bawat malakas na feature ng Canva Pro. Narito ang ilan sa mga mae-enjoy mo:
          </p>
        </div>
        <div className="bg-card/60 dark:bg-card/40 backdrop-blur-xl rounded-xl p-8 md:p-12 border border-border/50 shadow-xl">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {includedFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
         <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                <a href="/checkout">I-unlock Lahat ng Features for ₱99</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
