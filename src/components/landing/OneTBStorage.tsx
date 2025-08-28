import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HardDrive, Cloud, Lock } from 'lucide-react';

export default function OneTBStorage() {
  return (
    <section id="storage" className="py-20 md:py-32 bg-secondary/50">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 md:order-2">
          <Image
            src="https://picsum.photos/600/500?random=10"
            alt="Cloud storage icon with files"
            width={600}
            height={500}
            data-ai-hint="cloud storage"
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div className="flex-1 md:order-1">
          <div className="flex items-center gap-2 text-primary mb-2">
            <HardDrive className="h-6 w-6" />
            <span className="font-semibold">1TB CLOUD STORAGE</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">All Your Creative Work, In One Place</h2>
          <p className="text-lg text-muted-foreground mb-8">
            With a massive 1TB of cloud storage, you can safely store all your designs, photos, videos, and brand assets. No more juggling files across different drives.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Cloud className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Access Anywhere</h4>
                <p className="text-muted-foreground">Your files are available on any device, anytime, anywhere.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Lock className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Safe and Secure</h4>
                <p className="text-muted-foreground">Your creative work is protected with world-class security.</p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <a href="#cta">Get My 1TB Storage for P99</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
