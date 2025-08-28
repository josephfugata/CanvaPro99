import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LayoutTemplate, Files, Sparkles } from 'lucide-react';

export default function ProTemplates() {
  return (
    <section id="templates" className="py-20 md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-primary mb-2">
            <LayoutTemplate className="h-6 w-6" />
            <span className="font-semibold">PREMIUM TEMPLATES</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Never Start With a Blank Page Again</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Gain access to over 610,000+ premium, professionally designed templates for any project you can imagine. Just pick a template, customize it, and you're done.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Files className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Vast & Diverse Library</h4>
                <p className="text-muted-foreground">Find the perfect template for presentations, social posts, videos, and more.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">New Designs Daily</h4>
                <p className="text-muted-foreground">Our library is constantly updated with fresh, on-trend designs.</p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <a href="#cta">Unlock All Templates for P99</a>
          </Button>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="https://picsum.photos/600/500?random=11"
            alt="A collage of premium Canva templates"
            width={600}
            height={500}
            data-ai-hint="design templates"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
