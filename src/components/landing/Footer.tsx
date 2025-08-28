import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-background border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <p className="text-center text-sm leading-loose md:text-left">
              © {new Date().getFullYear()} CanvaPro99. All Rights Reserved.
            </p>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          This is an independent service and is not affiliated with Canva®.
        </p>
      </div>
    </footer>
  );
}
