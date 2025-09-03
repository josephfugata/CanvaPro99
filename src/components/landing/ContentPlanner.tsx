import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CalendarDays, CheckCircle, Clock } from 'lucide-react';

export default function ContentPlanner() {
  return (
    <section id="content-planner" className="py-20 md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-primary mb-2">
            <CalendarDays className="h-6 w-6" />
            <span className="font-semibold">CONTENT PLANNER</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">I-plano at I-schedule ang Content Mo</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Wala nang mamimiss na post. Mag-design, mag-plano, at mag-schedule ng social media content mo direkta mula sa Canva papuntang Instagram, Facebook, Pinterest, at iba pa.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">I-automate ang Pag-post</h4>
                <p className="text-muted-foreground">Set it and forget it. Mag-schedule ng posts for weeks or months in advance.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Tingnan ang mga Susunod</h4>
                <p className="text-muted-foreground">Sa content calendar, kitang-kita mo ang mga naka-schedule mong content.</p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 whitespace-normal h-auto">
            <a href="#cta">Ayusin ang Content ko for ₱99</a>
          </Button>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="/content planning.avif"
            alt="Content planner na nagpapakita ng kalendaryo ng social media posts"
            width={600}
            height={500}
            data-ai-hint="content calendar"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
