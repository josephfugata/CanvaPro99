import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Crown, Palette, Scissors, FolderSync, Sparkles, Users } from 'lucide-react';
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
    description: 'Access all the AI-powered Magic Studio tools to design and create content faster than ever.',
  },
  {
    icon: Crown,
    title: '100+ Million Pro Assets',
    description: 'Unlimited access to our entire library of premium photos, videos, audio, and graphics.',
  },
  {
    icon: Scissors,
    title: 'Background Remover',
    description: 'Instantly remove image and video backgrounds with a single click. Perfect for product shots.',
  },
  {
    icon: Palette,
    title: 'Brand Kit',
    description: 'Maintain brand consistency with your own logos, colors, and fonts stored in a Brand Kit.',
  },
  {
    icon: FolderSync,
    title: '1TB of Cloud Storage',
    description: 'Enjoy a massive 1TB of cloud storage to save and manage all your creative projects securely.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with your team in real-time on any design.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Everything You Love, and More</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            From seasoned professionals to passionate beginners, Canva Pro supercharges your creativity and productivity.
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
