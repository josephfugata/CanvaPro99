import { Button } from '@/components/ui/button';
import Image from 'next/image';

type HeroProps = {
  headline: string;
};

export default function Hero({ headline }: HeroProps) {
  return (
    <section id="cta" className="relative container flex flex-col md:flex-row items-center gap-8 py-20 md:py-32">
       <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
       <div className="absolute left-0 top-1/4 -z-10 h-3/5 w-1/3 bg-primary/20 dark:bg-primary/10 blur-[120px]" />
       <div className="absolute right-0 bottom-1/4 -z-10 h-3/5 w-1/3 bg-accent/20 dark:bg-accent/10 blur-[120px]" />

      <div className="flex-1 flex flex-col items-start text-left">
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter mb-6">
          {headline}
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground mb-8">
          Unlock your creative potential with every feature Canva Pro has to offer. One-time payment, lifetime access. Don't miss this incredible deal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                <a href="#">Get Lifetime Access for P99</a>
            </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
        <Image
          src="/A creative collage representing Canva Pro's features.jpg"
          alt="A creative collage representing Canva Pro's features"
          width={600}
          height={500}
          data-ai-hint="creative design"
          className="rounded-xl shadow-2xl"
          priority
        />
      </div>
    </section>
  );
}
