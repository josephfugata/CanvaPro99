import { Check, Minus, Star } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import React from 'react';

const features = [
  { feature: 'Presyo', free: 'P0', pro: 'P3,600/taon', lifetime: 'P99 Isahan' },
  { feature: '100+ milyong premium assets', free: false, pro: true, lifetime: true },
  { feature: '610,000+ premium templates', free: false, pro: true, lifetime: true },
  { feature: 'Magic Studio AI Tools', free: 'Limited', pro: true, lifetime: true },
  { feature: 'Background Remover', free: false, pro: true, lifetime: true },
  { feature: 'Magic Resize', free: false, pro: true, lifetime: true },
  { feature: 'Content Planner', free: false, pro: true, lifetime: true },
  { feature: '1TB Cloud Storage', free: '5GB', pro: true, lifetime: true },
  { feature: 'Save as Template', free: false, pro: true, lifetime: true },
  { feature: 'Version History', free: false, pro: true, lifetime: true },
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Malinaw ang Pagkakaiba</h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            Tingnan mo kung gaano ka-sulit ang lifetime deal namin kumpara sa regular na Canva plans. Mas maraming value, sa mas murang halaga.
          </p>
        </div>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-3 min-w-[700px] md:min-w-0 md:w-full gap-4 items-end">
            {/* Header */}
            <div></div>
            <Card className="text-center bg-card/40 dark:bg-card/30 border-border/50 p-4">
              <CardTitle className="font-headline text-2xl">Canva Free</CardTitle>
            </Card>
            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">PINAKASULIT</div>
              <Card className="text-center bg-primary/10 border-primary shadow-2xl p-4">
                <CardTitle className="font-headline text-2xl text-primary">Aming P99 Deal</CardTitle>
              </Card>
            </div>
            
            {/* Features */}
            {features.map((item, index) => (
              <React.Fragment key={item.feature}>
                <div className="text-right font-medium text-muted-foreground pr-4">{item.feature}</div>
                <Card className="text-center bg-card/60 dark:bg-card/40 border-border/50 py-4">
                  {typeof item.free === 'boolean' ? 
                    (item.free ? <Check className="h-6 w-6 text-primary mx-auto" /> : <Minus className="h-6 w-6 text-muted-foreground mx-auto" />) :
                    <span className="font-semibold">{item.free}</span>
                  }
                </Card>
                <Card className="text-center bg-primary/10 border-primary/50 py-4">
                  {typeof item.lifetime === 'boolean' ? 
                    (item.lifetime ? <Check className="h-6 w-6 text-primary mx-auto" /> : <Minus className="h-6 w-6 text-muted-foreground mx-auto" />) :
                    <span className="font-bold text-primary text-lg">{item.lifetime}</span>
                  }
                </Card>
              </React.Fragment>
            ))}

            {/* CTA Buttons */}
            <div></div>
            <Card className="text-center bg-card/60 dark:bg-card/40 border-border/50 p-4">
               <Button variant="outline" disabled>Current Plan Mo</Button>
            </Card>
            <Card className="text-center bg-primary/10 border-primary/50 p-4">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform transform hover:scale-105 w-full">
                    <a href="#cta">Mag-upgrade for P99</a>
                </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
