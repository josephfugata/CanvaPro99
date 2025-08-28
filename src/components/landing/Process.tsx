import { CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    { title: 'Click "Get Access Now"', description: 'You will be taken to our secure payment gateway.' },
    { title: 'Enter Your Details', description: 'Fill in your payment information. We accept cards and local payment methods.' },
    { title: 'Check Your Email', description: 'Instantly, you will receive an email with the subject "Your Canva Pro Invitation".' },
    { title: 'Click the Invite Link', description: 'This is a unique link that upgrades your account.' },
    { title: 'Log In & Accept', description: 'Log in to your existing Canva account (or create a new one) and accept the team invitation.' },
    { title: 'Welcome to Canva Pro!', description: 'That\'s it! Your account is now upgraded with full Pro features for life.' },
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-secondary/50">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">The Step-by-Step Purchase Process</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            We believe in full transparency. Here is exactly what happens after you click the button.
          </p>
        </div>
        <div className="relative pl-6">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
          {steps.map((step, index) => (
            <div key={index} className="relative pl-10 pb-10">
              <div className="absolute left-0 top-0 h-12 w-12 rounded-full bg-background border-4 border-border flex items-center justify-center -translate-x-1/2">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-headline text-2xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
           <div className="relative pl-10">
              <div className="absolute left-0 top-0 h-12 w-12 rounded-full bg-primary border-4 border-background flex items-center justify-center -translate-x-1/2">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-headline text-2xl font-bold">It's That Simple!</h3>
              <p className="text-muted-foreground">The whole process takes less than 2 minutes.</p>
            </div>
        </div>
      </div>
    </section>
  );
}
