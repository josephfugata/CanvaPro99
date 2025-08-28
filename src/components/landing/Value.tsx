import { TrendingUp, Clock, InfinityIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function Value() {
  return (
    <section id="value" className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Isang Investment na Sulit</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Isipin mo ang long-term value. Isang P99 na bayad ay magbubukas ng libo-libong pisong halaga, taon-taon.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md p-6 text-center">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-headline text-2xl">Lumalagong Halaga</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Habang nagdadagdag ang Canva ng features, tumataas din ang value ng lifetime access mo.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md p-6 text-center">
            <CardHeader>
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-headline text-2xl">Nakatipid na Oras</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Ang mga Pro features tulad ng Magic Resize ay makakatipid sa'yo ng maraming oras bawat linggo.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md p-6 text-center">
            <CardHeader>
              <InfinityIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-headline text-2xl">Walang Hanggang ROI</CardTitle>
            </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">Pagkatapos ng unang buwan, nakakatipid ka na kumpara sa regular na subscription. Ang return on investment ay walang katapusan!</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
