import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah L.',
    avatar: '/Digital Marketer.png',
    title: 'Digital Marketer',
    testimonial: 'Grabe, sobrang sulit ng lifetime deal for Canva Pro! Andito lahat ng kailangan ko para sa mga kliyente ko. Game-changer sa workflow ko!',
  },
  {
    name: 'John D.',
    avatar: '/Content Creator.png',
    title: 'Startup Founder',
    testimonial: 'Nag-aalangan ako nung una, pero legit pala! Sa P99, full access na sa lahat. Best investment para sa design needs ng startup ko.',
  },
  {
    name: 'Emily R.',
    avatar: '/Startup Founder.png',
    title: 'Content Creator',
    testimonial: 'Sa wakas, magagamit ko na lahat ng premium templates at fonts nang hindi nag-aalala sa monthly fees. Dream come true para sa mga creator na on a budget!',
  },
];

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Suki ng mga Creatives</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Huwag lang kami ang pakinggan. Ito ang sinasabi ng aming mga customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-card/60 dark:bg-card/40 backdrop-blur-xl border-border/50 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
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
