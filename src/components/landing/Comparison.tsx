import { Check, Minus, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const comparisonFeatures = [
    { 
        feature: 'Premium Assets', 
        free: 'Limited', 
        pro: true,
        pro_text: '100+ Milyon' 
    },
    { 
        feature: 'Premium Templates', 
        free: 'Limited', 
        pro: true,
        pro_text: '610,000+'
    },
    { 
        feature: 'Magic Studio AI Tools', 
        free: 'Limited', 
        pro: true 
    },
    { 
        feature: 'Background Remover', 
        free: false, 
        pro: true 
    },
    { 
        feature: 'Magic Resize', 
        free: false, 
        pro: true 
    },
    { 
        feature: 'Content Planner', 
        free: false, 
        pro: true 
    },
    {
        feature: 'Cloud Storage', 
        free: '5GB', 
        pro: true,
        pro_text: '1TB'
    },
    { 
        feature: 'Save as Template', 
        free: false, 
        pro: true 
    },
    { 
        feature: 'Version History', 
        free: false, 
        pro: true 
    },
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

        {/* Mobile View: Tabs */}
        <div className="md:hidden">
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
                    {comparisonFeatures.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            {item.free === false ? <X className="h-5 w-5 text-destructive mt-1 shrink-0" /> : <Minus className="h-6 w-6 shrink-0 text-muted-foreground" />}
                            <span className="flex-1 text-muted-foreground">{item.feature}</span>
                            <span className="font-semibold">{typeof item.free !== 'boolean' ? item.free : ''}</span>
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
                    {comparisonFeatures.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="flex-1 text-foreground">{item.feature}</span>
                        {item.pro_text && <span className="font-semibold">{item.pro_text}</span>}
                        </li>
                    ))}
                    </ul>
                    <div className="text-center mt-8">
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 whitespace-normal h-auto w-full">
                            <a href="/checkout">Mag-upgrade for ₱99 Ngayon!</a>
                        </Button>
                    </div>
                </CardContent>
                </Card>
            </TabsContent>
            </Tabs>
        </div>

        {/* Desktop View: Table */}
        <div className="hidden md:block">
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xl font-headline w-[40%]">Features</TableHead>
                  <TableHead className="text-center text-xl font-headline">Canva Free</TableHead>
                  <TableHead className="text-center text-xl font-headline text-primary bg-primary/10">
                    Aming ₱99 Deal
                    <div className="absolute top-2 right-4 bg-accent text-accent-foreground px-3 py-0.5 rounded-full text-xs font-bold shadow-lg">PINAKASULIT</div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonFeatures.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-base">{item.feature}</TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      {item.free === false ? <X className="h-6 w-6 mx-auto text-destructive" /> : item.free}
                    </TableCell>
                    <TableCell className="text-center text-primary bg-primary/10 font-semibold">
                      {item.pro ? <Check className="h-6 w-6 mx-auto" /> : ''}
                      {item.pro_text && <span className="block mt-1">{item.pro_text}</span>}
                    </TableCell>
                  </TableRow>
                ))}
                 <TableRow>
                    <TableCell></TableCell>
                    <TableCell className="text-center text-muted-foreground p-6">
                        <div className="text-4xl font-bold">₱0</div>
                        <div>Walang bayad</div>
                    </TableCell>
                    <TableCell className="text-center text-primary bg-primary/10 p-6">
                        <div className="text-4xl font-bold">₱99</div>
                        <div>Isang beses lang</div>
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 whitespace-normal h-auto mt-4">
                            <a href="/checkout">Mag-upgrade Ngayon!</a>
                        </Button>
                    </TableCell>
                 </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>

      </div>
    </section>
  );
}
