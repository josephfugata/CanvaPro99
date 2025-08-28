import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Smartphone, Tablet } from 'lucide-react';

export default function Mobile() {
  return (
    <section id="mobile-app" className="py-20 md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 md:order-2">
          <Image
            src="https://picsum.photos/600/500?random=15"
            alt="Isang tao na gumagamit ng Canva app sa kanyang phone"
            width={600}
            height={500}
            data-ai-hint="mobile app"
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div className="flex-1 md:order-1">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Gumawa Kahit Saan, Kahit Kailan</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ang buong lakas ng Canva Pro ay nasa iyong bulsa. Ang mobile at tablet apps ay nagbibigay sa iyo ng lahat ng features ng desktop experience, na-optimize para sa touch.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Full-Featured na Mobile App</h4>
                <p className="text-muted-foreground">Walang kompromiso sa features. Gawin lahat ng kaya mo sa desktop, sa phone mo.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Tablet className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Optimized para sa iPad & Tablets</h4>
                <p className="text-muted-foreground">Mag-enjoy sa maluwag at intuitive na interface na perfect para sa mas malaking touch screens.</p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <a href="#cta">Mag-design Kahit Saan for P99</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
