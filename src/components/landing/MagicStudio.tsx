import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sparkles, Wand2, FileImage, Type } from 'lucide-react';

export default function MagicStudio() {
  return (
    <section id="magic-studio" className="py-20 md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Sparkles className="h-6 w-6" />
            <span className="font-semibold">MAGIC STUDIO</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Your AI-Powered Design Assistant</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stop starting from scratch. Let Magic Studio generate designs, write copy, create images, and even generate entire videos from a simple prompt. It's the ultimate creative shortcut.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Wand2 className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Magic Design</h4>
                <p className="text-muted-foreground">Instantly generate a selection of templates customized to your idea.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <FileImage className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Magic Media</h4>
                <p className="text-muted-foreground">Turn text into compelling photos and videos in seconds.</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Type className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Magic Write</h4>
                <p className="text-muted-foreground">Generate powerful copy, from headlines to entire paragraphs.</p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <a href="#cta">Experience the Magic for P99</a>
          </Button>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="https://picsum.photos/600/500?random=7"
            alt="AI generating creative designs"
            width={600}
            height={500}
            data-ai-hint="ai design"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
