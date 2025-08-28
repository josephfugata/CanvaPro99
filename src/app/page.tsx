
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Countdown from '@/components/landing/Countdown';
import SocialProof from '@/components/landing/SocialProof';
import ProblemSolution from '@/components/landing/ProblemSolution';
import HowItWorks from '@/components/landing/HowItWorks';
import Benefits from '@/components/landing/Benefits';
import WhatsIncluded from '@/components/landing/WhatsIncluded';
import Comparison from '@/components/landing/Comparison';
import UseCases from '@/components/landing/UseCases';
import WhoIsItFor from '@/components/landing/WhoIsItFor';
import MagicStudio from '@/components/landing/MagicStudio'; 
import ContentPlanner from '@/components/landing/ContentPlanner';
import OneTBStorage from '@/components/landing/OneTBStorage';
import ProTemplates from '@/components/landing/ProTemplates';
import Bonus from '@/components/landing/Bonus';
import TeamBenefits from '@/components/landing/TeamBenefits';
import MythBusting from '@/components/landing/MythBusting';
import ByTheNumbers from '@/components/landing/ByTheNumbers';
import Community from '@/components/landing/Community';
import FutureProof from '@/components/landing/FutureProof';
import Process from '@/components/landing/Process';
import Support from '@/components/landing/Support';
import Platform from '@/components/landing/Platform';
import Mobile from '@/components/landing/Mobile';
import Value from '@/components/landing/Value';
import Journey from '@/components/landing/Journey';
import Guarantee from '@/components/landing/Guarantee';
import Faq from '@/components/landing/Faq';
import FinalCta from '@/components/landing/FinalCta';
import Footer from '@/components/landing/Footer';


export default function Home() {
  const headline = "Get Lifetime Access to Canva Pro for Just P99.";

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero headline={headline} />
        <Countdown />
        <SocialProof />
        <ProblemSolution />
        <HowItWorks />
        <Benefits />
        <WhatsIncluded />
        <Comparison />
        <UseCases />
        <WhoIsItFor />
        <MagicStudio /> 
        <ContentPlanner />
        <OneTBStorage />
        <ProTemplates />
        <Bonus />
        <TeamBenefits />
        <MythBusting />
        <ByTheNumbers />
        <Community />
        <FutureProof />
        <Process />
        <Support />
        <Platform />
        <Mobile />
        <Value />
        <Journey />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
