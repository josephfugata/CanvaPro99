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
    title: 'Mga Marketers',
    description: 'Gumawa ng high-converting ads, social media campaigns, at marketing visuals nang mabilis.',
  },
  {
    icon: ShoppingBag,
    title: 'Mga Small Business Owners',
    description: 'Buuin ang iyong brand identity, mula logos hanggang packaging, nang hindi kumukuha ng mahal na designer.',
  },
  {
    icon: PenTool,
    title: 'Mga Content Creators',
    description: 'Mag-design ng agaw-pansing YouTube thumbnails, Instagram stories, at blog graphics.',
  },
  {
    icon: School,
    title: 'Mga Estudyante at Guro',
    description: 'Gumawa ng magagandang presentasyon, reports, at class materials na kahanga-hanga.',
  },
  {
    icon: Clapperboard,
    title: 'Mga Video Editors',
    description: 'Madaling mag-edit ng videos, magdagdag ng premium stock footage, at gumawa ng professional intros.',
  },
  {
    icon: User,
    title: 'Kahit Sino na May Ideya',
    description: 'Kung mayroon kang creative na ideya, binibigyan ka ng Canva Pro ng kapangyarihang bigyan ito ng buhay.',
  },
];

export default function WhoIsItFor() {
  return (
    <section id="who-is-it-for" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Perfect Para sa... Lahat!</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Propesyonal ka man o nagsisimula pa lang, ang lifetime deal na ito ay dinisenyo para tulungan kang magtagumpay.
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
