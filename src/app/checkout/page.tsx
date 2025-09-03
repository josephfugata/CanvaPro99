
"use client";

import * as React from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, ArrowRight, Eye, Copy } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const checkoutFormSchema = z.object({
  canvaEmail: z.string().email({ message: "Please enter a valid email address." }),
  paymentProofType: z.enum(["reference", "screenshot"], {
    required_error: "You need to select a payment proof type.",
  }),
  referenceNumber: z.string().optional(),
  paymentScreenshot: z.any().optional(),
}).refine(data => {
    if (data.paymentProofType === 'reference') {
        return !!data.referenceNumber && data.referenceNumber.length > 0;
    }
    return true;
}, {
    message: "Please enter the reference number.",
    path: ["referenceNumber"],
}).refine(data => {
    if (data.paymentProofType === 'screenshot') {
        return !!data.paymentScreenshot && data.paymentScreenshot.length > 0;
    }
    return true;
}, {
    message: "Please upload a payment screenshot.",
    path: ["paymentScreenshot"],
});


type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;

export default function CheckoutPage() {
    const { toast } = useToast();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isGcashRevealed, setIsGcashRevealed] = React.useState(false);
    const encodedGcash = "MDk2MjI0NjYxNDI="; // Base64 encoded "09622466142"
    const decodedGcash = React.useMemo(() => Buffer.from(encodedGcash, 'base64').toString('utf8'), [encodedGcash]);


    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            canvaEmail: "",
            paymentProofType: "reference",
            referenceNumber: "",
            paymentScreenshot: "",
        },
    });

    const handleCopy = () => {
        navigator.clipboard.writeText(decodedGcash.replace(/\s/g, ''));
        toast({
            title: "Copied to Clipboard!",
            description: "GCash number copied successfully.",
        });
    };

    async function onSubmit(data: CheckoutFormValues) {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("canvaEmail", data.canvaEmail);
        formData.append("paymentProofType", data.paymentProofType);
        if (data.paymentProofType === "reference" && data.referenceNumber) {
            formData.append("referenceNumber", data.referenceNumber);
        } else if (data.paymentProofType === "screenshot" && data.paymentScreenshot[0]) {
            formData.append("paymentScreenshot", data.paymentScreenshot[0]);
        }

        try {
            // Using 'no-cors' mode to allow the request to be sent to the external webhook
            // We won't be able to read the response, but the data will be sent.
            await fetch("https://automate.pinoyentrepreneur.me/webhook/e77b8cee-5d45-4e17-8d68-5b2fc84537ce", {
                method: "POST",
                mode: 'no-cors', 
                body: formData,
            });

            // Since we can't check response.ok in 'no-cors' mode, we optimistically assume success and redirect.
            router.push('/thank-you');

        } catch (error) {
            console.error("Submission error:", error);
             toast({
                title: "Submission Failed",
                description: "There was an error submitting your proof of payment. Please try again or contact us at mail@pinoyentrepreneur.me for support.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground animated-gradient">
            <Header />
            <main className="flex-1 py-20 md:py-32">
                <div className="container max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        {/* Payment Details Column */}
                        <div className="space-y-8">
                             <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg">
                                <CardHeader>
                                    <CardTitle className="font-headline text-3xl">Malapit na! One Last Step.</CardTitle>
                                    <CardDescription>Just complete the ₱99 payment via GCash to get your lifetime Canva Pro access.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="font-bold mb-2">Option 1: Scan to Pay</h3>
                                        <div className="bg-white p-4 rounded-md inline-block">
                                             <Image
                                                src="https://automate.pinoyentrepreneur.me/webhook/e77b8cee-5d45-4e17-8d68-5b2fc84537ce"
                                                alt="GCash QR Code"
                                                width={250}
                                                height={250}
                                                data-ai-hint="qr code"
                                                className="rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2">Option 2: Manual Payment</h3>
                                        <p>Send to GCash Number:</p>
                                        <div className="font-mono text-lg bg-muted p-2 rounded-md inline-flex items-center gap-4">
                                             {isGcashRevealed ? (
                                                <>
                                                    <span>{decodedGcash}</span>
                                                    <Button variant="ghost" size="sm" onClick={handleCopy}>
                                                        <Copy className="mr-2 h-4 w-4" /> Copy
                                                    </Button>
                                                </>
                                            ) : (
                                                <>
                                                    <span>0962 XXX 6142</span>
                                                    <Button variant="ghost" size="sm" onClick={() => setIsGcashRevealed(true)}>
                                                        <Eye className="mr-2 h-4 w-4" /> Reveal
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">Name: Juan D. Cruz</p>
                                    </div>
                                    <div className="text-sm text-muted-foreground pt-4 border-t border-border/50">
                                       <p>After payment, please fill out the form on the right to confirm your purchase. Your access will be granted within 24 hours.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        {/* Form Column */}
                        <div>
                             <Card className="bg-card/60 dark:bg-card/40 backdrop-blur-lg">
                                <CardHeader>
                                    <CardTitle className="font-headline text-3xl">Confirm Your Payment</CardTitle>
                                    <CardDescription>Fill out this form after you have completed the payment.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                            <FormField
                                                control={form.control}
                                                name="canvaEmail"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Your Canva Email</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="you@example.com" {...field} />
                                                        </FormControl>
                                                        <FormDescription>The email address of the Canva account you want to upgrade.</FormDescription>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="paymentProofType"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel>Proof of Payment</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup
                                                                onValueChange={field.onChange}
                                                                defaultValue={field.value}
                                                                className="flex flex-col space-y-1"
                                                            >
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="reference" />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal">GCash Reference Number</FormLabel>
                                                                </FormItem>
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="screenshot" />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal">Upload Screenshot</FormLabel>
                                                                </FormItem>
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            {form.watch("paymentProofType") === "reference" && (
                                                <FormField
                                                    control={form.control}
                                                    name="referenceNumber"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Reference Number</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="1234567890123" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            )}

                                            {form.watch("paymentProofType") === "screenshot" && (
                                                <FormField
                                                    control={form.control}
                                                    name="paymentScreenshot"
                                                    render={({ field: { value, onChange, ...fieldProps } }) => (
                                                        <FormItem>
                                                            <FormLabel>Payment Screenshot</FormLabel>

                                                            <FormControl>
                                                                <Input type="file" accept="image/png, image/jpeg, image/jpg"  onChange={e => onChange(e.target.files)} {...fieldProps} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            )}
                                            
                                            <Button type="submit" disabled={isSubmitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                                                {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <ArrowRight className="mr-2 h-5 w-5" />}
                                                Submit My Payment
                                            </Button>
                                        </form>
                                    </Form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
