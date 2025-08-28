import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare, CheckSquare } from 'lucide-react';

export default function TeamBenefits() {
  return (
    <section id="team-benefits" className="py-20 md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Users className="h-6 w-6" />
            <span className="font-semibold">FOR TEAMS & INDIVIDUALS</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Collaborate Like a Pro</h2>
          <p className="text-lg text-muted-foreground mb-8">
            While this is your personal lifetime Pro account, the access is provided via a team plan. This means you get all the powerful real-time collaboration features to work with others if you choose.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Real-Time Comments</h4>
                <p className="text-muted-foreground">Leave feedback and work together on any design simultaneously.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <CheckSquare className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Approval Workflows</h4>
                <p className="text-muted-foreground">Easily manage feedback and get designs approved faster.</p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <a href="#cta">Start Collaborating for P99</a>
          </Button>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="https://picsum.photos/600/500?random=12"
            alt="A team collaborating on a design project"
            width={600}
            height={500}
            data-ai-hint="team collaboration"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
