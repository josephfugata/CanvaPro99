import { TrendingUp, Clock, InfinityIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function Value() {
  return (
    <section id="value" className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">An Investment That Pays for Itself</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Think about the long-term value. One P99 payment unlocks thousands of pesos in value, year after year.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md p-6 text-center">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-headline text-2xl">Growing Value</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">As Canva adds more features, the value of your lifetime access only increases over time.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md p-6 text-center">
            <CardHeader>
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-headline text-2xl">Time Saved</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Pro features like Magic Resize and Background Remover can save you hours of manual work each week.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md p-6 text-center">
            <CardHeader>
              <InfinityIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-headline text-2xl">Infinite ROI</CardTitle>
            </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">After the first month, you're already saving money compared to a regular subscription. The return on investment is infinite!</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
