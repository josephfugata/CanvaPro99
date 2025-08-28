import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CreditCard, MailCheck, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Simulan sa 3 Simpleng Hakbang</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Ang pag-upgrade ng iyong Canva account to Pro ay napakadali lang.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block"></div>
            <div className="absolute top-1/2 left-0 w-full flex justify-around -translate-y-1/2 hidden md:block">                
            </div>
            
          
          <Card className="relative bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md text-center p-6">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-background">1</div>
            <CardHeader className="pt-12">
              <MailCheck className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle className="font-headline text-2xl">Tanggapin ang Invite</CardTitle>
              <CardDescription className="pt-2 text-base text-muted-foreground">
                Makakatanggap ka agad ng email na may special invitation link para sumali sa aming Canva Pro team.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="relative bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md text-center p-6">
             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-background">2</div>
            <CardHeader className="pt-12">
              <CreditCard className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle className="font-headline text-2xl">Secure na Pagbabayad</CardTitle>
              <CardDescription className="pt-2 text-base text-muted-foreground">
                I-click ang "Get Lifetime Access" button at kumpletuhin ang secure na P99 na bayad.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="relative bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md text-center p-6">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-background">3</div>
            <CardHeader className="pt-12">
              <ShieldCheck className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle className="font-headline text-2xl">Enjoy Pro Habambuhay</CardTitle>
              <CardDescription className="pt-2 text-base text-muted-foreground">
                I-click ang link, tanggapin ang invite, at ang iyong Canva account ay upgraded na to Pro for life!
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
