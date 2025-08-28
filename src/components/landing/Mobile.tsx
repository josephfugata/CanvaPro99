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
            alt="A person using the Canva app on their phone"
            width={600}
            height={500}
            data-ai-hint="mobile app"
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div className="flex-1 md:order-1">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Create On-the-Go</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The full power of Canva Pro is available in your pocket. The mobile and tablet apps give you all the features of the desktop experience, optimized for a touch interface.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Full-Featured Mobile App</h4>
                <p className="text-muted-foreground">Don't compromise on features. Do everything you can on desktop, on your phone.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Tablet className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Optimized for iPad & Tablets</h4>
                <p className="text-muted-foreground">Enjoy a spacious, intuitive interface perfect for larger touch screens.</p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <a href="#cta">Design Anywhere for P99</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
