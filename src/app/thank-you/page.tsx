
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground animated-gradient">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20 md:py-32">
        <div className="container max-w-2xl text-center">
            <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg p-4 md:p-12">
                <CardHeader>
                    <CheckCircle className="h-24 w-24 mx-auto text-primary" />
                    <CardTitle className="font-headline text-4xl md:text-5xl mt-6">Payment Submitted!</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground mt-4 max-w-md mx-auto">
                        Thank you for your purchase. Your creative journey is about to begin!
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="bg-primary/10 p-6 rounded-lg">
                        <h3 className="font-bold text-xl mb-2">What happens next?</h3>
                        <p className="text-muted-foreground">
                            We will now verify your payment. Once confirmed, you will receive an invitation link from Canva to your email within <strong>a few minutes to an hour</strong> to activate your lifetime Pro access. This depends on how busy our team is. Please make sure to check your spam or junk folder just in case.
                        </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        If you don't receive the email within an hour after your payment has been verified, or if you have any other questions, please contact us at <a href="mailto:mail@pinoyentrepreneur.me" className="underline font-semibold">mail@pinoyentrepreneur.me</a>.
                    </p>
                     <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
                        <a href="/">Back to Homepage</a>
                    </Button>
                </CardContent>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
