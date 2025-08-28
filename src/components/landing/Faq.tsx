import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Isang beses lang ba talaga magbabayad?',
    answer: 'Oo, sigurado! P99 lang, isang beses na bayad, at lifetime access na sa Canva Pro. Walang hidden fees, walang buwanang bayarin.',
  },
  {
    question: 'Paano ko makukuha ang access pagkatapos magbayad?',
    answer: 'Pagka-confirm ng bayad mo, makakatanggap ka ng email na may invitation link para sumali sa aming Canva Pro team. Click mo lang yung link, at magiging Pro na agad ang account mo.',
  },
  {
    question: 'Legal at safe ba ito?',
    answer: 'Yes, 100% legit. Ginagamit namin ang team features ng Canva para mag-provide ng access. Legal na paraan ito para mag-share ng premium access. Ang account at designs mo ay private at safe.',
  },
  {
    question: 'Paano kung may Canva account na ako?',
    answer: 'Walang problema! Pwede mong gamitin ang existing Canva account mo. I-uupgrade ng invitation ang current account mo to Pro, at lahat ng designs mo ay mananatiling safe.',
  },
  {
    question: 'Ano ang ibig sabihin ng "lifetime"?',
    answer: 'Ang "Lifetime" ay tumutukoy sa haba ng buhay ng aming serbisyo. Ginagarantiya namin ang access for at least 5 years, pero target namin na i-provide ito habang kami ay operational.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Mga Madalas na Tanong</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            May tanong ka? May sagot kami.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full bg-card/60 dark:bg-card/40 backdrop-blur-xl rounded-lg p-4 md:p-8 border border-border/50">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-lg text-left hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
