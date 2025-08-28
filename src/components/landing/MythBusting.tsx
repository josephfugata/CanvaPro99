import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BadgeHelp, CircleDotDashed, ThumbsUp } from 'lucide-react';

export default function MythBusting() {
  return (
    <section id="myth-busting" className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Masyado bang Maganda para Maging Totoo?</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Gets namin. Nagdududa ka. Linawin natin ang mga bagay-bagay at sirain ang mga maling akala tungkol sa offer na 'to.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md p-6">
            <CardHeader>
                <BadgeHelp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-headline text-2xl text-center">MALING AKALA: "Hindi 'to legal."</CardTitle>
              <CardDescription className="pt-4 text-base text-muted-foreground">
                <strong>KATOTOHANAN:</strong> Ito ay 100% legitimate. Ginagamit namin ang official "Teams" feature ng Canva. Bumibili kami ng malaking agency plan at shinare namin ang slots, isang paraan na sakop ng terms ng Canva.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md p-6">
            <CardHeader>
              <CircleDotDashed className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-headline text-2xl text-center">MALING AKALA: "Mawawala mga design ko."</CardTitle>
              <CardDescription className="pt-4 text-base text-muted-foreground">
                <strong>KATOTOHANAN:</strong> Sarili mong Canva account ang gamit mo. Ini-invite ka lang namin sa aming Pro team. Lahat ng designs, folders, at uploads mo ay mananatiling safe, secure, at private sa'yo lang.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md p-6">
            <CardHeader>
              <ThumbsUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-headline text-2xl text-center">MALING AKALA: "Titigil din 'to."</CardTitle>
              <CardDescription className="pt-4 text-base text-muted-foreground">
                <strong>KATOTOHANAN:</strong> Nakagawa kami ng sustainable na serbisyo. Ang one-time fees mula sa mga bagong miyembro ang sumusoporta sa gastos ng team plan. Ginagarantiya namin ang access for 5 years, pero plano namin na ito'y pang-lifetime talaga.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
