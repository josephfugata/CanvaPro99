import { Card, CardContent } from '@/components/ui/card';
import { XCircle, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

export default function ProblemSolution() {
  return (
    <section id="problem-solution" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Stop Burning Money on Subscriptions</h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            Monthly fees for design tools add up, limiting your creative freedom and draining your budget. There's a better way.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <Card className="bg-card/60 dark:bg-card/40 border-destructive/30 shadow-md">
            <CardContent className="p-8 text-center">
              <XCircle className="h-16 w-16 mx-auto text-destructive mb-6" />
              <h3 className="font-headline text-3xl font-bold mb-4">The Old Way</h3>
              <ul className="text-left space-y-3 text-muted-foreground text-lg">
                <li className="flex items-start gap-3"><XCircle className="h-5 w-5 text-destructive mt-1 shrink-0" /><span>Paying P300+/month, every month.</span></li>
                <li className="flex items-start gap-3"><XCircle className="h-5 w-5 text-destructive mt-1 shrink-0" /><span>Worrying about recurring bills.</span></li>
                <li className="flex items-start gap-3"><XCircle className="h-5 w-5 text-destructive mt-1 shrink-0" /><span>Losing access if you cancel.</span></li>
                <li className="flex items-start gap-3"><XCircle className="h-5 w-5 text-destructive mt-1 shrink-0" /><span>Limited budget for other tools.</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-card/60 dark:bg-card/40 border-primary/30 shadow-lg">
            <CardContent className="p-8 text-center">
              <CheckCircle className="h-16 w-16 mx-auto text-primary mb-6" />
              <h3 className="font-headline text-3xl font-bold mb-4">The P99 Lifetime Solution</h3>
               <ul className="text-left space-y-3 text-muted-foreground text-lg">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" /><span>One-time P99 payment, forever.</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Never pay for Canva Pro again.</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Keep lifetime access to all features.</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Unlock your full creative potential.</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                <a href="#cta">I'm Ready to Stop Wasting Money!</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
