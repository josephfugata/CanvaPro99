import Image from 'next/image';
import { Check } from 'lucide-react';

export default function Platform() {
  return (
    <section id="platform" className="py-20 md:py-32 bg-secondary/50">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex-1">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Works Everywhere You Do</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Access your Canva Pro account seamlessly across all your devices. Start a design on your desktop, and finish it on your tablet or phone.
          </p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary" /><span>Windows App</span></li>
            <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary" /><span>Mac App</span></li>
            <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary" /><span>Web Browser (Chrome, Firefox, etc.)</span></li>
            <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary" /><span>iOS App (iPhone & iPad)</span></li>
            <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary" /><span>Android App</span></li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="https://picsum.photos/600/500?random=14"
            alt="Canva being used on a laptop, tablet, and phone"
            width={600}
            height={500}
            data-ai-hint="multiple devices"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
