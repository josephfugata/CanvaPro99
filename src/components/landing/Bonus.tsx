import { Gift, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Bonus() {
  return (
    <section id="bonus" className="py-20 md:py-32 bg-secondary/50">
      <div className="container text-center">
        <div className="inline-block bg-accent text-accent-foreground rounded-full px-4 py-2 mb-4 font-bold shadow-lg">
          <Gift className="inline-block h-5 w-5 mr-2" />
          LIMITED TIME BONUS
        </div>
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Kunin ang Aming Exclusive Asset Pack, LIBRE!</h2>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12">
          Bilang pasasalamat, sa susunod na 24 oras, lahat ng mag-sign up ay makakatanggap din ng aming custom-made "Ultimate Creator" asset pack (worth P1,500) nang libre.
        </p>
        <div className="flex justify-center">
          <Card className="max-w-md bg-card/60 dark:bg-card/40 backdrop-blur-lg border-accent/50 shadow-xl p-8">
            <CardContent className="p-0">
              <Star className="h-16 w-16 mx-auto text-yellow-400 fill-yellow-400 mb-6" />
              <h3 className="font-headline text-2xl font-bold mb-2">"Ultimate Creator" Pack</h3>
              <p className="text-muted-foreground">May kasamang exclusive templates, fonts, at graphics na di mo makikita sa iba.</p>
            </CardContent>
          </Card>
        </div>
         <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 whitespace-normal h-auto">
                <a href="/checkout">I-claim ang Bonus at Lifetime Access!</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
