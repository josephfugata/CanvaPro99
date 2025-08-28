import { Card, CardContent } from '@/components/ui/card';
import { XCircle, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

export default function ProblemSolution() {
  return (
    <section id="problem-solution" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Tigilan na ang Pagsunog ng Pera sa Subscriptions</h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            Ang buwanang bayarin sa design tools ay malaki ang nagagastos, nililimitahan ang iyong pagiging malikhain at budget. May mas magandang paraan.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <Card className="bg-card/60 dark:bg-card/40 border-destructive/30 shadow-md">
            <CardContent className="p-8 text-center">
              <XCircle className="h-16 w-16 mx-auto text-destructive mb-6" />
              <h3 className="font-headline text-3xl font-bold mb-4">Ang Dati Mong Ginagawa</h3>
              <ul className="text-left space-y-3 text-muted-foreground text-lg">
                <li className="flex items-start gap-3"><XCircle className="h-5 w-5 text-destructive mt-1 shrink-0" /><span>Nagbabayad ng P300+/buwan, buwan-buwan.</span></li>
                <li className="flex items-start gap-3"><XCircle className="h-5 w-5 text-destructive mt-1 shrink-0" /><span>Nag-aalala sa paulit-ulit na bayarin.</span></li>
                <li className="flex items-start gap-3"><XCircle className="h-5 w-5 text-destructive mt-1 shrink-0" /><span>Nawawalan ng access pag nag-cancel.</span></li>
                <li className="flex items-start gap-3"><XCircle className="h-5 w-5 text-destructive mt-1 shrink-0" /><span>Limitado ang budget para sa ibang tools.</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-card/60 dark:bg-card/40 border-primary/30 shadow-lg">
            <CardContent className="p-8 text-center">
              <CheckCircle className="h-16 w-16 mx-auto text-primary mb-6" />
              <h3 className="font-headline text-3xl font-bold mb-4">Ang ₱99 Lifetime na Solusyon</h3>
               <ul className="text-left space-y-3 text-muted-foreground text-lg">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Isang beses na ₱99 na bayad, pang-habambuhay.</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Hindi na ulit magbabayad para sa Canva Pro.</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Panatilihin ang lifetime access sa lahat ng features.</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Ilabas ang iyong buong potensyal sa pagiging malikhain.</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                <a href="#cta">Handa na akong tumigil sa pag-aaksaya ng pera!</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
