import { generateHeadline } from '@/ai/flows/generate-headline';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Benefits from '@/components/landing/Benefits';
import SocialProof from '@/components/landing/SocialProof';
import Faq from '@/components/landing/Faq';
import Guarantee from '@/components/landing/Guarantee';
import Footer from '@/components/landing/Footer';

export default async function Home() {
  const { headlines } = await generateHeadline({
    businessDescription: 'A lifetime subscription to Canva Pro for only P99.',
  });

  const headline = headlines[0] || "Get Lifetime Access to Canva Pro for Just P99.";

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero headline={headline} />
        <Benefits />
        <SocialProof />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
