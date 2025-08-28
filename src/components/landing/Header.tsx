import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block font-headline">
              CanvaPro99
            </span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#benefits" className="transition-colors hover:text-primary">Benefits</a>
            <a href="#testimonials" className="transition-colors hover:text-primary">Testimonials</a>
            <a href="#faq" className="transition-colors hover:text-primary">FAQ</a>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform transform hover:scale-105 shadow-lg">
              <a href="#cta">Get Lifetime Access</a>
            </Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-lg">
              <nav className="grid gap-6 text-lg font-medium mt-10">
                <a href="/" className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">CanvaPro99</span>
                </a>
                <a href="#benefits" className="text-muted-foreground hover:text-primary">Benefits</a>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary">Testimonials</a>
                <a href="#faq" className="text-muted-foreground hover:text-primary">FAQ</a>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full mt-4">
                  <a href="#cta">Get Lifetime Access</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
