import Image from 'next/image';
import { Check } from 'lucide-react';

export default function Platform() {
  return (
    <section id="platform" className="py-20 md:py-32 bg-secondary/50">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Gumagana Kahit Saan Ka Nagtatrabaho</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
            Gamitin ang iyong Canva Pro account nang walang problema sa lahat ng iyong device. Simulan ang design sa iyong desktop, at tapusin ito sa iyong tablet o phone.
          </p>
          <ul className="space-y-4 text-lg inline-block text-left">
            <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary" /><span>Windows App</span></li>
            <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary" /><span>Mac App</span></li>
            <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary" /><span>Web Browser (Chrome, Firefox, atbp.)</span></li>
            <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary" /><span>iOS App (iPhone & iPad)</span></li>
            <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary" /><span>Android App</span></li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="https://picsum.photos/600/500?random=14"
            alt="Canva na ginagamit sa laptop, tablet, at phone"
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
