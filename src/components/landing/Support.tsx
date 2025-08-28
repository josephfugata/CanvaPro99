import { LifeBuoy, Mail, MessageSquare } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Support() {
  return (
    <section id="support" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
            <LifeBuoy className="h-16 w-16 mx-auto text-primary mb-6" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold">We've Got Your Back</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Worried you'll be left in the dark? Our dedicated support team is here to help you every step of the way.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md p-6">
            <CardHeader className="flex flex-row items-center gap-4">
                <Mail className="w-12 h-12 text-primary shrink-0" />
                <div>
                    <CardTitle className="font-headline text-2xl">Email Support</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                    Get a guaranteed response to any query within 24 hours.
                    </CardDescription>
                </div>
            </CardHeader>
          </Card>
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md p-6">
            <CardHeader className="flex flex-row items-center gap-4">
              <MessageSquare className="w-12 h-12 text-primary shrink-0" />
              <div>
                <CardTitle className="font-headline text-2xl">Community Chat</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                 Access our private community group for peer-to-peer help.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
