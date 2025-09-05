import { LifeBuoy, Mail, MessageSquare } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Support() {
  return (
    <section id="support" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
            <LifeBuoy className="h-16 w-16 mx-auto text-primary mb-6" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Andito Kami Para sa'yo</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Nag-aalala ka bang maiiwan sa ere? Ang aming dedicated support team ay handang tumulong sa iyo sa bawat hakbang.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md p-6">
            <CardHeader className="flex flex-row items-center gap-4">
                <Mail className="w-12 h-12 text-primary shrink-0" />
                <div>
                    <CardTitle className="font-headline text-2xl">Email Support</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                    Garantisadong may sagot sa anumang tanong sa loob ng 24 oras. Mag-email sa <a href="mailto:mail@pinoyentrepreneur.me" className="underline">mail@pinoyentrepreneur.me</a>.
                    </CardDescription>
                </div>
            </CardHeader>
          </Card>
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md p-6">
            <CardHeader className="flex flex-row items-center gap-4">
              <MessageSquare className="w-12 h-12 text-primary shrink-0" />
              <div>
                <CardTitle className="font-headline text-2xl">Messenger Chat</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Mag-message sa amin sa <a href="https://m.me/pinoyentrepreneur.me" target="_blank" rel="noopener noreferrer" className="underline">Messenger</a> para sa mas mabilis na kasagutan.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
