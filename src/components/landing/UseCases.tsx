import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const useCases = [
  {
    title: 'Social Media Posts',
    image: 'https://picsum.photos/400/300?random=1',
    hint: 'social media',
    description: 'Create stunning graphics for Instagram, Facebook, and more in minutes.'
  },
  {
    title: 'Marketing Materials',
    image: 'https://picsum.photos/400/300?random=2',
    hint: 'business flyers',
    description: 'Design professional flyers, brochures, and business cards that stand out.'
  },
  {
    title: 'Video Presentations',
    image: 'https://picsum.photos/400/300?random=3',
    hint: 'presentation slide',
    description: 'Craft engaging video slideshows and presentations for work or school.'
  },
  {
    title: 'Logos & Branding',
    image: 'https://picsum.photos/400/300?random=4',
    hint: 'company logo',
    description: 'Develop a complete brand identity with custom logos, fonts, and colors.'
  },
  {
    title: 'Website Graphics',
    image: 'https://picsum.photos/400/300?random=5',
    hint: 'website design',
    description: 'Produce eye-catching banners, icons, and graphics for your website.'
  },
  {
    title: 'Personal Projects',
    image: 'https://picsum.photos/400/300?random=6',
    hint: 'birthday invitation',
    description: 'Design invitations, resumes, or any other personal creative project.'
  }
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Unleash Your Creativity</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            From professional marketing to personal passion projects, Canva Pro is the only tool you'll need.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="overflow-hidden bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image
                src={useCase.image}
                alt={useCase.title}
                width={400}
                height={300}
                data-ai-hint={useCase.hint}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-headline text-2xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
