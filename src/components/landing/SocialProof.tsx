import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah L.',
    avatar: 'https://picsum.photos/id/1011/100/100',
    title: 'Digital Marketer',
    testimonial: 'The lifetime deal for Canva Pro is insane! It has all the features I need for my clients. An absolute game-changer for my workflow.',
  },
  {
    name: 'John D.',
    avatar: 'https://picsum.photos/id/1027/100/100',
    title: 'Startup Founder',
    testimonial: 'I was hesitant at first, but this is legit. For P99, I got full access to everything. Best investment for my startup\'s design needs.',
  },
  {
    name: 'Emily R.',
    avatar: 'https://picsum.photos/id/1040/100/100',
    title: 'Content Creator',
    testimonial: 'I can finally use all the premium templates and fonts without worrying about monthly fees. This offer is a dream come true for creators on a budget.',
  },
];

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Loved by Creatives Everywhere</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our customers are saying.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={t.avatar} alt={t.name} data-ai-hint="person photo"/>
                    <AvatarFallback>{t.name.substring(0,2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.title}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-muted-foreground">{t.testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
