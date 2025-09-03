import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare, CheckSquare } from 'lucide-react';

export default function TeamBenefits() {
  return (
    <section id="team-benefits" className="py-20 md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center gap-2 text-primary mb-2 justify-center md:justify-start">
            <Users className="h-6 w-6" />
            <span className="font-semibold">PARA SA TEAMS at INDIVIDUALS</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Mag-collaborate na Parang Pro</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
            Kahit na ito'y iyong personal lifetime Pro account, ang access ay ibinibigay sa pamamagitan ng isang team plan. Ibig sabihin, makukuha mo ang lahat ng malakas na real-time collaboration features para makipagtrabaho sa iba kung gugustuhin mo.
          </p>
          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Real-Time na Komento</h4>
                <p className="text-muted-foreground">Mag-iwan ng feedback at magtrabaho nang sabay-sabay sa anumang design.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
                <CheckSquare className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Approval Workflows</h4>
                <p className="text-muted-foreground">Madaling i-manage ang feedback at mas mabilis na maaprubahan ang mga design.</p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 whitespace-normal h-auto">
            <a href="/checkout">Simulan ang Collaboration for ₱99</a>
          </Button>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="https://plus.unsplash.com/premium_vector-1717082060641-5d649cb834aa?q=80&w=982&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Isang team na nagco-collaborate sa isang design project"
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
