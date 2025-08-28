import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BadgeHelp, CircleDotDashed, ThumbsUp } from 'lucide-react';

export default function MythBusting() {
  return (
    <section id="myth-busting" className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Is This Too Good To Be True?</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            We get it. You're skeptical. Let's address the elephant in the room and bust some common myths about this offer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md p-6">
            <CardHeader>
                <BadgeHelp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-headline text-2xl text-center">MYTH: "This can't be legal."</CardTitle>
              <CardDescription className="pt-4 text-base text-muted-foreground">
                <strong>REALITY:</strong> It's 100% legitimate. We use Canva's official "Teams" feature to provide access. We purchase a large agency plan and share the slots, a method fully within Canva's terms for team invitations.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md p-6">
            <CardHeader>
              <CircleDotDashed className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-headline text-2xl text-center">MYTH: "I'll lose my designs."</CardTitle>
              <CardDescription className="pt-4 text-base text-muted-foreground">
                <strong>REALITY:</strong> You use your OWN Canva account. We simply invite it to our Pro team. All your existing designs, folders, and uploads remain safe, secure, and private to you.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border-border/50 shadow-md p-6">
            <CardHeader>
              <ThumbsUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-headline text-2xl text-center">MYTH: "It will stop working."</CardTitle>
              <CardDescription className="pt-4 text-base text-muted-foreground">
                <strong>REALITY:</strong> We've built a sustainable service. The one-time fees from new members cover the team plan costs indefinitely. We guarantee access for 5 years, but plan for a true lifetime.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
