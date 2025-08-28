import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, PenTool, School, ShoppingBag, Clapperboard, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Audience {
  icon: LucideIcon;
  title: string;
  description: string;
}

const audiences: Audience[] = [
  {
    icon: Briefcase,
    title: 'Marketers',
    description: 'Create high-converting ads, social media campaigns, and marketing visuals in a flash.',
  },
  {
    icon: ShoppingBag,
    title: 'Small Business Owners',
    description: 'Build your brand identity, from logos to packaging, without hiring an expensive designer.',
  },
  {
    icon: PenTool,
    title: 'Content Creators',
    description: 'Design eye-catching YouTube thumbnails, Instagram stories, and blog graphics.',
  },
  {
    icon: School,
    title: 'Students & Educators',
    description: 'Craft beautiful presentations, reports, and class materials that will impress.',
  },
  {
    icon: Clapperboard,
    title: 'Video Editors',
    description: 'Easily edit videos, add premium stock footage, and create professional intros.',
  },
  {
    icon: User,
    title: 'Anyone with an Idea',
    description: 'If you have a creative idea, Canva Pro gives you the power to bring it to life.',
  },
];

export default function WhoIsItFor() {
  return (
    <section id="who-is-it-for" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Perfect for... Everyone!</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Whether you're a professional or just starting, this lifetime deal is designed to help you succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="bg-card/60 dark:bg-card/40 border-border/50 shadow-md hover:shadow-xl transition-shadow duration-300 backdrop-blur-lg p-4 text-center">
              <CardHeader>
                <audience.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-headline text-2xl">{audience.title}</CardTitle>
                <CardDescription className="pt-4 text-base text-muted-foreground">
                  {audience.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
