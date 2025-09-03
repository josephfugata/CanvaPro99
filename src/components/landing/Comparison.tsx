import { Check, Minus, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const freeFeatures = [
  { feature: 'Premium Assets', available: 'Limited', icon: Minus },
  { feature: 'Premium Templates', available: 'Limited', icon: Minus },
  { feature: 'Magic Studio AI Tools', available: 'Limited', icon: Minus },
  { feature: 'Background Remover', available: false, icon: X },
  { feature: 'Magic Resize', available: false, icon: X },
  { feature: 'Content Planner', available: false, icon: X },
  { feature: '1TB Cloud Storage', available: '5GB', icon: Minus },
  { feature: 'Save as Template', available: false, icon: X },
  { feature: 'Version History', available: false, icon: X },
];

const proFeatures = [
  { feature: '100+ milyong premium assets', available: true, icon: Check },
  { feature: '610,000+ premium templates', available: true, icon: Check },
  { feature_long: 'Magic Studio AI Tools', feature: 'AI Tools', available: true, icon: Check },
  { feature: 'Background Remover', available: true, icon: Check },
  { feature: 'Magic Resize', available: true, icon: Check },
  { feature: 'Content Planner', available: true, icon: Check },
  { feature: '1TB Cloud Storage', available: true, icon: Check },
  { feature: 'Save as Template', available: true, icon: Check },
  { feature: 'Version History', available: true, icon: Check },
];


export default function Comparison() {
  return (
    <section id="comparison" className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Malinaw ang Pagkakaiba</h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            Tingnan mo kung gaano ka-sulit ang lifetime deal namin kumpara sa regular na Canva plans. Mas maraming value, sa mas murang halaga.
          </p>
        </div>

        <Tabs defaultValue="pro" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 h-auto">
            <TabsTrigger value="free" className="py-3 text-lg">Canva Free</TabsTrigger>
            <TabsTrigger value="pro" className="py-3 text-lg">Aming ₱99 Deal</TabsTrigger>
          </TabsList>
          
          <TabsContent value="free">
            <Card className="bg-card/60 dark:bg-card/40 border-border/50">
              <CardHeader className="text-center">
                  <CardTitle className="font-headline text-3xl font-bold">Canva Free</CardTitle>
                  <div className="text-5xl font-bold mt-2">₱0</div>
                  <CardDescription>Walang bayad, pero limitado.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <ul className="space-y-4">
                  {freeFeatures.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <item.icon className={`h-6 w-6 shrink-0 ${item.available === false ? 'text-destructive' : 'text-muted-foreground'}`} />
                      <span className="flex-1 text-muted-foreground">{item.feature}</span>
                      <span className="font-semibold">{typeof item.available === 'boolean' ? '' : item.available}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pro">
            <Card className="bg-primary/10 border-primary shadow-2xl">
               <div className="relative">
                 <div className="absolute -top-4 right-4 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">PINAKASULIT</div>
               </div>
              <CardHeader className="text-center">
                  <CardTitle className="font-headline text-3xl font-bold text-primary">Aming Lifetime Deal</CardTitle>
                  <div className="text-5xl font-bold text-primary mt-2">₱99</div>
                  <CardDescription className="text-primary/80">Isang beses na bayad. Habambuhay.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <ul className="space-y-4">
                  {proFeatures.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <item.icon className="h-6 w-6 text-primary shrink-0" />
                      <span className="flex-1 text-foreground">{item.feature_long || item.feature}</span>
                    </li>
                  ))}
                </ul>
                 <div className="text-center mt-8">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform transform hover:scale-105 w-full md:w-auto h-auto whitespace-normal text-lg px-8 py-6 rounded-full">
                        <a href="#cta">Mag-upgrade for ₱99 Ngayon!</a>
                    </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
}
