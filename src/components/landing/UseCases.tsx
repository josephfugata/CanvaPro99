import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const useCases = [
  {
    title: 'Social Media Posts',
    image: '/Social Media Posts.png',
    hint: 'social media',
    description: 'Gumawa ng magagandang graphics para sa Instagram, Facebook, at iba pa in minutes.'
  },
  {
    title: 'Marketing Materials',
    image: '/Marketing Materials.png',
    hint: 'business flyers',
    description: 'Mag-design ng professional flyers, brochures, at business cards na agaw-pansin.'
  },
  {
    title: 'Video Presentations',
    image: '/Video Presentations.avif',
    hint: 'presentation slide',
    description: 'Bumuo ng engaging video slideshows at presentations para sa trabaho o eskwela.'
  },
  {
    title: 'Logos & Branding',
    image: '/company logo.avif',
    hint: 'company logo',
    description: 'Bumuo ng kumpletong brand identity gamit ang custom logos, fonts, at colors.'
  },
  {
    title: 'Website Graphics',
    image: '/Website Graphics.avif',
    hint: 'website design',
    description: 'Gumawa ng eye-catching na banners, icons, at graphics para sa iyong website.'
  },
  {
    title: 'Personal na Proyekto',
    image: '/Personal Projects.avif',
    hint: 'birthday invitation',
    description: 'Mag-design ng invitations, resumes, o kahit anong personal na creative project.'
  }
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Ilabas ang Iyong Pagkamalikhain</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Mula sa professional marketing hanggang sa personal passion projects, Canva Pro lang ang kailangan mo.
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
