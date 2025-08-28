import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Crown, Scissors, FolderSync, Sparkles, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Sparkles,
    title: 'Magic Studio',
    description: 'Gamitin lahat ng AI-powered Magic Studio tools para mas mabilis mag-design at gumawa ng content.',
  },
  {
    icon: Crown,
    title: '100+ Milyong Pro Assets',
    description: 'Walang limitasyong access sa buong library ng premium photos, videos, audio, at graphics.',
  },
  {
    icon: Scissors,
    title: 'Background Remover',
    description: 'Tanggalin agad ang image at video backgrounds sa isang click lang. Perfect para sa product shots!',
  },
  {
    icon: FolderSync,
    title: '1TB na Cloud Storage',
    description: 'Enjoy sa 1TB na cloud storage para i-save at i-manage lahat ng projects mo nang safe.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Mag-work together nang real-time kasama ang team mo sa kahit anong design.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Lahat ng Gusto Mo, at Higit Pa</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Mula sa mga pro hanggang sa mga baguhan, palakasin ang iyong pagiging malikhain at pagiging produktibo with Canva Pro.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card/60 dark:bg-card/40 border-border/50 shadow-md hover:shadow-xl transition-shadow duration-300 backdrop-blur-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                    <benefit.icon className="w-10 h-10 text-primary" />
                    <CardTitle className="font-headline text-2xl">{benefit.title}</CardTitle>
                </div>
                <CardDescription className="pt-4 text-base text-muted-foreground">
                  {benefit.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
