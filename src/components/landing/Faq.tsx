import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Is this a one-time payment?',
    answer: 'Yes, absolutely! You pay only P99 once and get lifetime access to Canva Pro features. No hidden fees, no monthly subscriptions.',
  },
  {
    question: 'How do I get access after payment?',
    answer: 'After your payment is confirmed, you will receive an email with an invitation link to join our Canva Pro team. Simply click the link, and your account will be upgraded to Pro instantly.',
  },
  {
    question: 'Is this legal and safe?',
    answer: 'Yes, it is. We provide access through Canva\'s team features. It\'s a legitimate way to share premium access. Your account and designs are safe and private to you.',
  },
  {
    question: 'What if I already have a Canva account?',
    answer: 'No problem! You can use your existing Canva account. The invitation will upgrade your current account to Pro, and all your existing designs will remain safe.',
  },
  {
    question: 'What does "lifetime" mean?',
    answer: '"Lifetime" refers to the life of the service we provide. We guarantee access for a minimum of 5 years, but we aim to provide it for as long as our service is operational.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Have questions? We've got answers.
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
