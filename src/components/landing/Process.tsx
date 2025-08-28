import { CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    { title: 'I-click ang "Get Access Now"', description: 'Dadalhin ka sa aming secure na payment gateway.' },
    { title: 'Ilagay ang Iyong Detalye', description: 'Punan ang iyong impormasyon sa pagbabayad. Tumatanggap kami ng cards at local payment methods.' },
    { title: 'Tingnan ang Iyong Email', description: 'Agad kang makakatanggap ng email na may subject na "Your Canva Pro Invitation".' },
    { title: 'I-click ang Invite Link', description: 'Ito ay isang unique link para i-upgrade ang iyong account.' },
    { title: 'Mag-Log In at Tanggapin', description: 'Mag-log in sa iyong existing na Canva account (o gumawa ng bago) at tanggapin ang team invitation.' },
    { title: 'Welcome sa Canva Pro!', description: 'Ganun lang! Ang iyong account ay upgraded na at may full Pro features for life.' },
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-secondary/50">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Ang Step-by-Step na Proseso ng Pagbili</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Naniniwala kami sa buong transparency. Ito mismo ang mangyayari pagkatapos mong i-click ang button.
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
              <h3 className="font-headline text-2xl font-bold">Gano'n lang kasimple!</h3>
              <p className="text-muted-foreground">Ang buong proseso ay wala pang 2 minuto.</p>
            </div>
        </div>
      </div>
    </section>
  );
}
