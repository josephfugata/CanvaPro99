import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Gem, Palette, FolderKanban } from 'lucide-react';

export default function BrandKit() {
  return (
    <section id="brand-kit" className="py-20 md:py-32 bg-secondary/50">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 md:order-2">
          <Image
            src="https://picsum.photos/600/500?random=8"
            alt="A brand kit with logos, colors, and fonts"
            width={600}
            height={500}
            data-ai-hint="brand identity"
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div className="flex-1 md:order-1">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Gem className="h-6 w-6" />
            <span className="font-semibold">BRAND KIT</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Stay On-Brand, Effortlessly</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Say goodbye to inconsistent branding. With Brand Kit, you can set up your brand’s colors, fonts, and logos once, and apply them to any design with a single click.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <FolderKanban className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Centralized Assets</h4>
                <p className="text-muted-foreground">Keep all your logos, fonts, and brand elements in one organized place.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Palette className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">One-Click Application</h4>
                <p className="text-muted-foreground">Apply your brand's style to any template instantly for perfect consistency.</p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <a href="#cta">Build My Brand for P99</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
