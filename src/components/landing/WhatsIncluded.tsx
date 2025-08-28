import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const includedFeatures = [
  "100+ million premium stock photos, videos, audio, and graphics",
  "Magic Studio: All the best AI tools in one place",
  "Brand Kit: Upload your own fonts, logos, and create color palettes",
  "Background Remover: Instantly remove image and video backgrounds",
  "Content Planner: Schedule social media posts directly from Canva",
  "1TB of cloud storage for your designs and assets",
  "Magic Resize: Instantly resize designs for any platform",
  "Pro Templates: Access to thousands of premium templates",
  "Animation Pro: Create premium animations with ease",
  "Save designs as templates for your team to use",
  "Real-time team collaboration features",
  "Version History: Restore previous versions of your designs",
  "Transparent Images: Download PNGs with transparent backgrounds",
  "High-Quality Downloads: SVG, PDF, and high-resolution outputs"
];

export default function WhatsIncluded() {
  return (
    <section id="included" className="py-20 md:py-32">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">The Complete Canva Pro Experience</h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            This isn't a "lite" version. You get full, unrestricted access to every powerful feature Canva Pro offers. Here's just a sample of what you'll unlock:
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
                <a href="#cta">Unlock All Features for P99</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
